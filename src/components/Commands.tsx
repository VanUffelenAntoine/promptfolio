import { About } from "./About";
import { Echo } from "./Echo";
import { Education } from "./Education";
import { Help } from "./Help";
import { Projects } from "./Projects";
import { Socials } from "./Socials";
import { Weather } from "./Weather";
import { Welcome } from "./Welcome";
import { Whoami } from "./Whoami";

type Props = {
  input: string;
};

export const Commands = ({ input }: Props) => {
  const split = input.split(" ");
  const stripped_command = split.shift()?.toLocaleLowerCase();
  const args = split.join(" ");

  switch (stripped_command) {
    case "":
      return <></>;
    case "weather":
      if (!args) return <div>Usage: weather [city]</div>;
      return <Weather args={args} />;
    case "welcome":
      return <Welcome />;
    case "projects":
      return <Projects />;
    case "echo":
      return <Echo arg={args} />;
    case "whoami":
      return <Whoami user={"guest"} />;
    case "socials":
      return <Socials />;
    case "education":
      return <Education />;
    case "about":
      return <About />;
    case "help":
      return <Help />;
    default:
      return <div>Unknown command: {input}</div>;
  }
};
