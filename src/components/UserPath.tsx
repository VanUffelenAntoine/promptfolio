export const UserPath = () => {
  const user = "guest";
  const domain = "promptFolio";
  const path = "~/";

  return (
    <div className="font-bold flex pr-2">
      <span className="text-yellow">{user}</span>
      <span className="text-white">@</span>
      <span className="text-green">{domain}</span>
      <span className="text-white">
        <span>: </span>
        <span>{path}</span>
        <span>$ </span>
      </span>
    </div>
  );
};
