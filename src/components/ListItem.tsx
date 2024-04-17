interface ListItemProps {
  title: string;
  content: string;
}

export const ListItem = ({ title, content }: ListItemProps) => {
  return (
    <div className="px-2">
      <div>{title}: </div>
      <div className="ml-8">
        <span className="text-green">{">"} </span>
        <span className="text-white">{content}</span>
      </div>
    </div>
  );
};
