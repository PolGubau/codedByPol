import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";
import type Author from "../../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: { data: Author; text: string };
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <article className="flex flex-col gap-1 group">
      <CoverImage slug={slug} title={title} src={coverImage} />

      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className=" group-hover:underline
      text-slate-700 group-hover:text-black transition-all"
      >
        <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      </Link>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

      <Link
        as={`/authors/${author.data.id}`}
        href="/authors/[slug]"
        aria-label={author.data.name}
      >
        <Avatar name={author.data.name} picture={author.data.picture} />
      </Link>
    </article>
  );
};

export default PostPreview;
