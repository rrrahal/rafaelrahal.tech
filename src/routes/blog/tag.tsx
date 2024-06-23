type TagProps = {
  title: string;
};

export const Tag = ({ title }: TagProps) => {
  return <div className="rounded-full bg-ctp-blue p-1">{title}</div>;
};
