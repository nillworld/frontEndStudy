import { createStore } from "redux";

function reducer(currentStore, action) {
  if (currentStore === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentStore };
  return newState;
}

const store = createStore(reducer);

const ReduxLearn = () => {
  return (
    <div>
      <div>rr</div>
    </div>
  );
};
export default ReduxLearn;
