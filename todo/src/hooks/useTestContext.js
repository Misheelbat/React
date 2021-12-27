import { useContext } from "react";
import { TestContext } from "../context/TestContext";

export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("outside of useContext scope");
  }
  return context;
};
