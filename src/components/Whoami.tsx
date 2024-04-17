type Props = {
    user: string
}
export const Whoami = ({ user } : Props) => {
  return <div>{user}</div>;
};
