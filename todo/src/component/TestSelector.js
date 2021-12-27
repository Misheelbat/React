import { useTest } from "../hooks/useTestContext";
import "./TestSelector.css";

const themeColors = ["#58249c", "#249c6b", "#b70233"];
export default function TestSelector() {
  const { changeTest, changeMode, mode } = useTest();
  const toggle = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <button className="mode-toggle" onClick={() => toggle()}>
        change background
      </button>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeTest(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
