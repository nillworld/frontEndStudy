import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import "./ReduxLearn.css";

//store안에 있는 state를 어떻게 바꿀것인가
function reducer(currentState, action) {
  console.log("reducer호출");
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
};

const Left2 = () => {
  console.log("2");
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
};

const Left3 = () => {
  console.log("3");
  const number = useSelector((state) => state.number);
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <h1>Left3</h1>
      <h1>number:{number}</h1>
    </div>
  );
};

const Left4 = () => {
  console.log("4");
  const number = useSelector((state) => state.number);
  const state = useSelector((state) => state);
  console.log(state);
  return <div>Left4</div>;
};

const Right1 = () => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
};
const Right2 = () => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
};
const Right3 = () => {
  // dispatch는 state 변경 트리거 state는 store를 통해 관리되므로 createStore가 호출됨.
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
    </div>
  );
};

const ReduxLearn = () => {
  return (
    <div id="container">
      {/* provider는 store를 제공할 범위 설정/ 반드시 store 필요 */}
      <Provider store={store}>
        <div id="grid">
          <Left1></Left1>
          <Right1></Right1>
        </div>
      </Provider>
    </div>
  );
};
export default ReduxLearn;
