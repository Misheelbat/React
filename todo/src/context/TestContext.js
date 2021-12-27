import { createContext, useReducer } from "react";

export const TestContext = createContext();

const testReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TEST":
      return { ...state, test: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function TestProvider({ children }) {
  const [state, dispatch] = useReducer(testReducer, {
    test: "works",
    mode: "dark",
  });
  const changeTest = (test) => {
    dispatch({ type: "CHANGE_TEST", payload: test });
  };
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <TestContext.Provider value={{ ...state, changeTest, changeMode }}>
      {children}
    </TestContext.Provider>
  );
}
