import { commands } from "../../utils/commands";
export const Help = () => {
  console.log(Object.entries(commands));

  return (
    <>
      {Object.entries(commands).map((entry) => {
        return (
          <div key={entry[0]}>
            <div>{entry[0]}</div>
            <div>{entry[1]}</div>
          </div>
        );
      })}
    </>
  );
};
