import { commands } from "../../utils/commands";
export const Help = () => {
  console.log(Object.entries(commands));

  return (
    <>
      {Object.entries(commands).map((entry) => {
        return (
          <div className="px-2" key={entry[0]}>
            <div>{entry[0]}: </div>
            <div className="ml-8">
              <span className="text-green">{">"} </span>
              <span className="text-white">{entry[1]}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
