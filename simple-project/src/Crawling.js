import { useState } from "react";
import "./Crawling.css";

// const fs = require("fs");

const Crawling = (props) => {
  console.log(props.keywords);
  const axios = require("axios");
  const cheerio = require("cheerio");
  const log = console.log;
  const [result, setResult] = useState(0);
  const [leftCount, setLeftCount] = useState(null);
  const [rightCount, setRightCount] = useState(null);
  const [resultCountList, setResultCountList] = useState([]);

  const divOnClick = (e) => {
    if (props.divClickCheck) {
      return;
    }
    let rightCheck = 0;
    if (e.target.id === "right-compare-box") {
      rightCheck = 1;
    }
    getHtml(props.keywordIndex)
      .then(getCountLine)
      .then((count) => {
        console.log(count);
        setLeftCount(count);
        setResultCountList([...resultCountList, count]);
      });
    getHtml(props.keywordIndex + 1)
      .then(getCountLine)
      .then((count) => {
        setRightCount(count);
      });

    props.setChooseState("check");
    console.log(resultCountList);
    props.setDivClickCheck(true);
  };

  const getHtml = async (keyword) => {
    try {
      return await axios.get(`https://www.google.com/search?q=${keyword}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getCountLine = (html) => {
    const $ = cheerio.load(html.data);
    const $bodyList = $("div#result-stats");
    const resultLine = $bodyList[0].children[0].data;
    const regex = /[^0-9]/g;
    let result = resultLine.replace(regex, "");
    console.log(result);
    setResult(result);
    return result;
  };

  return (
    <div className="main">
      <div className="compare-box" id="left-compare-box" onClick={divOnClick}>
        {props.keywords[props.keywordIndex]}
        <div>{props.divClickCheck ? leftCount : ""}</div>
      </div>
      <div className="compare-box" id="right-compare-box" onClick={divOnClick}>
        {props.keywords[props.keywordIndex + 1]}
        <div>{props.divClickCheck ? rightCount : ""}</div>
      </div>
    </div>
  );
};
export default Crawling;
