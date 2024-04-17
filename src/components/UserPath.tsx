export const UserPath = () => {
  const user = "guest";
  const domain = "promptFolio";
  const path = "~/";

  return (
    <div className="font-bold flex">
      <span>{user}</span>
      <span>@</span>
      <span>{domain}</span>
      <span>: </span>
      <span>{path}</span>
      <span>$ </span>
    </div>
  );
};
