import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { UserPath } from "./components/UserPath";
import "./index.css";
import { Commands } from "./components/Commands";

function App() {
  const [inputVal, setInputVal] = useState<string>("");
  const [history, setHistory] = useState<
    { command: string; response: JSX.Element }[]
  >([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [currComand, setCurrCommand] = useState<number>(0);
  const bottom = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  };

  const refocusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  //ToDo: Set input to end of line on arrow up
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault;
      if (currComand != 0) setCurrCommand(currComand - 1);
      setInputVal(cmdHistory[currComand - 1] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault;
      if (currComand != cmdHistory.length) setCurrCommand(currComand + 1);
      setInputVal(cmdHistory[currComand + 1] || "");
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    if (cmdHistory.length >= 1)
      localStorage.setItem("cmdHistory", JSON.stringify(cmdHistory));
    setCurrCommand(cmdHistory.length);
  }, [cmdHistory]);

  useEffect(() => {
    document.addEventListener("click", refocusInput);
    setHistory([
      { command: "welcome", response: <Commands input={"welcome"} /> },
    ]);
    const localstorageHistory = localStorage.getItem("cmdHistory");
    console.log(localstorageHistory);
    if (localstorageHistory) setCmdHistory(JSON.parse(localstorageHistory));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e) e.preventDefault();
    setCmdHistory([...cmdHistory, inputVal]);
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
        {history.map((item, index) => {
          return (
            <div key={index}>
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
          onKeyDown={handleKeyDown}
        />
      </form>
      <div ref={bottom}></div>
    </div>
  );
}

export default App;
