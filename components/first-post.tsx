import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Avatar from "./avatar";
import Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const FirstPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  author,
}: Props) => {
  return (
    <section className=" grid grid-cols-1 xl:grid-cols-2 gap-10">
      <CoverImage title={title} src={coverImage} slug={slug} />

      <div className="md:grid md:grid-cols-2 xl:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 ">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className=" text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className=" md:mb-0 text-lg pb-4">
            <DateFormatter dateString={date} />
          </div>
          <Link as={`/authors/${author.id}`} href="/authors/[slug]">
            <Avatar name={author.name} picture={author.picture} />
          </Link>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default FirstPost;
