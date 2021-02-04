import data from "../data/data.json";

const Search = ({ search, setSearch }) => {
  let tabSearch = [];
  let tabEmoji = [];
  tabSearch = search.split("");

  return (
    <>
      <div className="Search">
        <span>🦄 EmojiSearch 🦄</span>
        <input
          type="text"
          name="search"
          placeholder="What emoji are you looking for ?"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div>
        {console.log(search)}
        {data.map((elem, index) => {
          tabEmoji = elem.title.split("");
          // console.log(tabEmoji);
          // console.log(tabEmoji);
          // console.log(tabEmoji);
          if (tabEmoji.indexOf(search) !== -1) {
            return (
              <div className="Line" key={index}>
                <span>
                  {elem.symbol} {elem.title}
                </span>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Search;
