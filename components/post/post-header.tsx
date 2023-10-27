import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "./post-title";
import type Author from "../../interfaces/author";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: { data: Author; text: string };
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Link
          as={`/authors/${author.data.id}`}
          href="/authors/[slug]"
          aria-label={author.data.name}
        >
          <Avatar name={author.data.name} picture={author.data.picture} />
        </Link>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Link
            as={`/authors/${author.data.id}`}
            href="/authors/[slug]"
            aria-label={author.data.name}
          >
            <Avatar name={author.data.name} picture={author.data.picture} />
          </Link>
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
