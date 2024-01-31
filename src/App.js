// src/App.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// 사용할 Action creator를 import 합니다.
// dispatch로 쓸 거는 import 해야 함.
import {
  plusOne,
  minusOne,
  total,
  plusNumber,
  minusNumber,
  addTodo,
} from "./redux/modules/counter";

import AddForm from "./components/AddForm";
import TodoListContainer from "./components/TodoListContainter";

const App = () => {
  // 간단 계산기
  const dispatch = useDispatch();
  const plusOneResult = useSelector((state) => state.counter.plusOneResult);
  const minusOneResult = useSelector((state) => state.counter.minusOneResult);
  const totalNumber = useSelector((state) => state.counter.totalNumber);
  const globalNumber = useSelector((state) => state.counter.globalNumber);
  const addTodo = useSelector((state) => state.todos.addTodo);
  // useSelector로 할 것은 import할 필요 없음.

  // 편한 계산기
  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const { value } = event.target; // 구조분해 할당 -> event.target.value
    setNumber(+value); // setNumber(event.target.value)
  };

  const onClickAddNumberHandler = () => {
    dispatch(plusNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div>
      <div>
        <div>계산기</div>
        <div>
          {plusOneResult}
          <button
            onClick={() => {
              dispatch(plusOne());
              dispatch(total()); // 액션객체를 Action creator로 변경합니다.
              // dispatch 두 개 넣을 수 있음.
            }}
          >
            + 1
          </button>
        </div>
        <div>
          {minusOneResult}
          <button
            onClick={() => {
              dispatch(minusOne());
              dispatch(total());
            }}
          >
            - 1
          </button>
        </div>
        <div>합계 : {totalNumber}</div>
      </div>

      <hr />

      <div>
        <div>편한 계산기</div>
        <input type="number" onChange={onChangeHandler} />
        <button onClick={onClickAddNumberHandler}>더하기</button>
        <button onClick={onClickMinusNumberHandler}>빼기</button>
        <div>결과: {globalNumber}</div>
      </div>

      <hr />

      <div>
        <div>todo list</div>
        <div>
          <StContainer>
            <AddForm />
            <TodoListContainer />
          </StContainer>
        </div>
      </div>
    </div>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
