import { Link } from "./Link";

export const Education = () => {
  return (
    <div>
      <div>2020 - 2023</div>
      <div className="pl-4">
        <div>
          I followed an associate degree in programming(Graduaat Programmeren)
        </div>
        <div>
          at{" "}
          <Link href="https://thomasmore.be/nl/campus-de-nayer">de Nayer</Link>{" "}
          offered by{" "}
          <Link href="https://thomasmore.be/nl/opleidingen/graduaat/programmeren/sint-katelijne-waver/basistraject">
            Thomas More
          </Link>
        </div>
      </div>
      <div>
        <div>2023 - Present</div>
        <div className="pl-4">
          Right now I am following the courses offered on{" "}
          <Link href="https://www.boot.dev">boot.dev</Link>
        </div>
        <div className="pl-4">
          You can check my progress{" "}
          <Link href="https://www.boot.dev/u/jointeat87">here</Link>
        </div>
      </div>
    </div>
  );
};
