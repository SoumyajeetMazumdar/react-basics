import { useState } from "react";

import ColorButton from "./ColorButton";

function App() {
  const [color, setColor] = useState("black");

  const styles = { backgroundColor: color };

  function buttonClick(col) {
    setColor(col);
  }

  return (
    <div
      className="w-full h-screen duration-200 relative flex flex-1 items-end justify-center"
      style={styles}
    >
      <div
        className="w-fit  rounded-lg  bg-white  m-[2.5%] p-3 fixed flex flex-wrap justify-center gap-4
      border-[1px] border-solid border-white"
      >
        <ColorButton color="red" handleClick={buttonClick} />
        <ColorButton color="blue" handleClick={buttonClick} />
        <ColorButton color="green" handleClick={buttonClick} />
        <ColorButton color="olive" handleClick={buttonClick} />
        <ColorButton color="pink" handleClick={buttonClick} />
        <ColorButton color="goldenrod" handleClick={buttonClick} />
        <ColorButton color="grey" handleClick={buttonClick} />
        <ColorButton color="orange" handleClick={buttonClick} />
        <ColorButton color="purple" handleClick={buttonClick} />
        <ColorButton color="brown" handleClick={buttonClick} />
      </div>
    </div>
  );
}

export default App;
