import { PostLink } from "./post-link";

export default () => {
  return (
    <div className="flex flex-col w-full justify-center max-w-full px-2">
      <section className="flex items-center justify-center flex-col mb-8">
        <p className="text-lg">Here are my most recent blog posts. It’s not much, but I promise it’s honest work.</p>
      </section>
      <ul className="flex flex-col justify-center">
        <PostLink
          title="Swimming with sharks"
          subtitle="Being out of you comfort zone"
          date="23/06/2024"
          url="swimming-with-sharks"
          tags={["reflection", "life"]}
        />
      </ul>
    </div>
  );
};
