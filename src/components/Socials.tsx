import { Link } from "./Link";

export const Socials = () => {
  return (
    <div>
      <div>
        <span className="text-green">{"> "}</span>
        <Link href="https://www.linkedin.com/antoinevanuffelen/">Linkedin</Link>
      </div>
      <span className="text-green">{"> "}</span>
      <Link href="https://github.com/VanUffelenAntoine">Github</Link>
    </div>
  );
};
