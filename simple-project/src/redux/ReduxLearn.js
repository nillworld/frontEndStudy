import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

//state 안에 있는 store를 어떻게 바꿀것인가
function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState };
  return newState;
}

const store = createStore(reducer);

const test1 = () => {
  return <div>hi</div>;
};

const ReduxLearn = () => {
  return (
    <div>
      {/* provider는 store를 제공할 범위 설정/ 반드시 store 필요 */}
      <Provider store={store}>
        <div>rr</div>
        <test1></test1>
      </Provider>
    </div>
  );
};
export default ReduxLearn;
