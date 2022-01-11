import { useState } from "react";
import Crawling from "./Crawling";

const YesOrNo = () => {
  const [keywords, setKeyWords] = useState(["burger", "pizza", "noodle", "fried chicken"]);
  const [startCheck, setStartCheck] = useState(false);
  const [chooseState, setChooseState] = useState("none");
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [divClickCheck, setDivClickCheck] = useState(false);
  const startOnClick = (e) => {
    keywords.sort(() => Math.random() - 0.5);

    setStartCheck(true);
  };
  const next = () => {
    setKeywordIndex(keywordIndex + 1);
    setDivClickCheck(false);
  };
  return (
    <div>
      <h1>Choose UP</h1>
      {startCheck ? (
        <Crawling
          keywords={keywords}
          keywordIndex={keywordIndex}
          setChooseState={setChooseState}
          divClickCheck={divClickCheck}
          setDivClickCheck={setDivClickCheck}
        />
      ) : (
        <button onClick={startOnClick}>Start</button>
      )}
      <div>{chooseState === "none" ? "" : <button onClick={next}>next</button>}</div>
    </div>
  );
};
export default YesOrNo;
