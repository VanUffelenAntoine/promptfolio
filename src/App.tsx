import React, { useEffect, useRef, useState } from "react";
import { UserPath } from "./components/UserPath";
import "./index.css";
import { Commands } from "./components/Commands";

function App() {
  const [inputVal, setInputVal] = useState<string>("");
  const [history, setHistory] = useState<
    { command: string; response: JSX.Element }[]
  >([]);
  const bottom = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    document.addEventListener("click", () => {
      inputRef.current && inputRef.current.focus();
    });
    setHistory([
      { command: "welcome", response: <Commands input={"welcome"} /> },
    ]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e) e.preventDefault();
    if (inputVal === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }
    setHistory([
      ...history,
      { command: inputVal, response: <Commands input={inputVal} /> },
    ]);

    setInputVal("");
  };

  return (
    <div className="font-mono bg-background text-foreground min-h-screen p-2">
      <div id="history">
        {history.map((item) => {
          return (
            <div key={item.command}>
              <div className="flex flex-row">
                <UserPath />
                <div>{item.command}</div>
              </div>
              <div>{item.response}</div>
            </div>
          );
        })}
      </div>
      <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
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
          ref={inputRef}
        />
      </form>
      <div ref={bottom}></div>
    </div>
  );
}

export default App;
