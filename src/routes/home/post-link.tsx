import { Link } from "react-router-dom";

type PostLinkProps = {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  tags: string[];
};

export const PostLink = ({ title, subtitle, date, url, tags }: PostLinkProps) => {
  return (
    <li className="flex flex-col">
      <div className="flex mt-2 w-full justify-between">
        <Link to={`/blog/${url}`}>
          <h3>{title}</h3>
        </Link>
        <p className="text-sm text-ctp-subtext0">{date}</p>
      </div>
      <p className="mt-2 text-ctp-subtext0 pr-3 ">{subtitle}</p>
    </li>
  );
};
