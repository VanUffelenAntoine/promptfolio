type Props = {
  arg: string;
};
export const Echo = ({ arg }: Props) => {
  if (arg === "") {
    return <div>echo [Insert text here]</div>;
  }
  return <div>{arg}</div>;
};
