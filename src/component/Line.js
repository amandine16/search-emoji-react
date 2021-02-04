const Line = ({ title, symbol, index, search, find, setFind }) => {
  return (
    <div
      className="Line"
      key={index}
      // style={{ backgroundColor: search === title ? "green" : "red" }}
    >
      <span>
        {symbol} {title}
      </span>
    </div>
  );
};

export default Line;
