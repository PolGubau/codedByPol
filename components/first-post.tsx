import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const FirstPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <section className=" grid grid-cols-1 xl:grid-cols-2 gap-10">
      <CoverImage title={title} src={coverImage} slug={slug} />

      <div className="md:grid md:grid-cols-2 xl:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 ">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default FirstPost;
