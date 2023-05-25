import ToolTip from "./ToolTip";

function App() {
  return (
    <div className="App">
      <ToolTip text="Top ToolTip." pos="top" />
      <ToolTip text="Left ToolTip." pos="left" />
      <ToolTip text="Right ToolTip." pos="right" />
      <ToolTip text="Bottom ToolTip." pos="bottom" />
    </div>
  );
}

export default App;
