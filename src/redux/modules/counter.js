// src/modules/counter.js

// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const TOTAL = "TOTAL";
const PLUS_NUMBER = "PLUS_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};
export const total = () => {
  return {
    type: TOTAL,
  };
};
export const plusNumber = (payload) => {
  return {
    type: PLUS_NUMBER,
    payload,
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// 초기 상태값
const initialState = {
  plusOneResult: 0,
  minusOneResult: 0,
  totalNumber: 0,

  globalNumber: 0,
};

// 리듀서 - set함수
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      console.log(state.plusOneResult);
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        plusOneResult: state.plusOneResult + 1,
      };
    case MINUS_ONE:
      console.log(state.minusOneResult);
      return {
        ...state,
        minusOneResult: state.minusOneResult - 1,
      };
    case TOTAL:
      console.log(state.totalNumber);
      return {
        ...state,
        totalNumber: state.plusOneResult + state.minusOneResult,
      };
    case PLUS_NUMBER:
      console.log(state.globalNumber);
      return {
        ...state,
        globalNumber: state.globalNumber + action.payload,
      };
    case MINUS_NUMBER:
      console.log(state.globalNumber);
      return {
        ...state,
        globalNumber: state.globalNumber - action.payload,
      };

    default:
      return state;
  }
};

export default counter;
