import { useEffect, useState } from "react";

const GachaGame = () => {
  const [inputValue, setInputValue] = useState("");
  const [presentStep, setPresentStep] = useState(0);
  const [chance, setChance] = useState(90);
  const [tuition, setTuition] = useState(90);
  const [chanceUp, setChanceUp] = useState(0);
  const [chanceUpSuccess, setChanceUpSuccess] = useState("");
  const setInputOnChange = (e) => {
    if (e.target.value <= 100) {
      setInputValue(e.target.value);
    }
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const tuitionOnChange = (e) => {
    setTuition(e.target.value);
  };
  const payOnClick = () => {
    setChanceUp((tuition * chance) / 10000);
    setChanceUpSuccess("Thanks, you paid to Nill");
    setTuition("");
    setTimeout(() => {
      setChanceUpSuccess("");
    }, 1000);
  };
  const upgradeOnClick = () => {
    let randomNumber = Math.random().toFixed(5) * 100;
    console.log(randomNumber);
    if (randomNumber <= chance) {
      setPresentStep(presentStep + 1);
      console.log("chanceUp", chanceUp);
      setChance((chance * 0.9).toFixed(2));
      setChanceUp(0);
    }
  };
  return (
    <div>
      <div>
        <h1>개발자를 강화해서 성장하기 </h1>
        <div>
          <h2>현재 강화 단계: {presentStep}</h2>
          <h3>
            확률:{chance} + {chanceUp}%
          </h3>
          <h4>확률 높이기</h4>
          <div>
            Pay tuition for learning programming from Nill:{" "}
            <input type="number" onChange={tuitionOnChange} value={tuition} placeholder="지불액에 비래하여 확률 업!" />$
            <button onClick={payOnClick}>Pay</button>
            <div>{chanceUpSuccess}</div>
          </div>
        </div>
        <div>
          <button onClick={upgradeOnClick}>개발자 성장 시도하기</button>
        </div>
      </div>
    </div>
  );
};
export default GachaGame;
