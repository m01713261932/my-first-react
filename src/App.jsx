import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const clickMe2 = () => {
    alert("Click me 2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickMe2}>Click Me 2</button>
      <button
        onClick={() => {
          alert("BTN 3");
        }}
      >
        Button 3
      </button>
      <button onClick={() => addToFive(5)}>Four</button>
    </>
  );
}

export default App;
