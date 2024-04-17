import { commands } from "../../utils/commands";
import { ListItem } from "./ListItem";
export const Help = () => {
  console.log(Object.entries(commands));

  return (
    <>
      {Object.entries(commands).map((entry) => {
        return <ListItem key={entry[0]} title={entry[0]} content={entry[1]} />;
      })}
    </>
  );
};
