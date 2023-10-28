import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      loader={({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
      }}
      layout="responsive"
      priority
      lang="en"
      title={`Cover Image for ${title}`}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full rounded-lg", {
        "group-hover:shadow-xl transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
