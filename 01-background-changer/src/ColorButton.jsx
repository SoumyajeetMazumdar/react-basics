/* eslint-disable react/prop-types */
function ColorButton({ color, handleClick }) {
  return (
    <div
      className="w-fit px-4 py-2  text-white rounded-full shadow-slate-600"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(color)}
    >
      {color}
    </div>
  );
}

export default ColorButton;
