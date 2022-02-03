import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

//state 안에 있는 store를 어떻게 바꿀것인가
function reducer(currentState, action) {
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
  return (
    <div>
      Left3
      <div>number:{number}</div>
    </div>
  );
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
    <div>
      {/* provider는 store를 제공할 범위 설정/ 반드시 store 필요 */}
      <Provider store={store}>
        <div>rr</div>
        <Left1></Left1>
        <h2>-------------------</h2>
        <Right1></Right1>
      </Provider>
    </div>
  );
};
export default ReduxLearn;
