import "./App.scss";
import Search from "./component/Search";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
