import React, { useCallback, useState } from "react";
import { UserPath } from "./components/UserPath";
import "./index.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  console.log(inputVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHistory([...history, inputVal]);
    setInputVal("");
  };

  return (
    <div className="font-mono bg-background text-foreground h-screen">
      <div id="history">
        {history.map((item) => {
          return (
            <div className="flex flex-row">
              <UserPath />
              <div>{item}</div>
            </div>
          );
        })}
      </div>
      <form className="flex flex-row" onSubmit={handleSubmit}>
        <UserPath />
        <input
          className=" px-2 bg-transparent outline-none bg-background text-foreground"
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          value={inputVal}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
