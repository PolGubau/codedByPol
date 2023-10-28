import Image from "next/image";
import Author from "../interfaces/author";
import Link from "next/link";

type Props = {
  authors: Author[];
  label?: string;
};

const AuthorList = ({ authors, label = "Our Creators" }: Props) => {
  return (
    <section className="flex gap-8 flex-col justify-center md:justify-start">
      <h1 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-center md:text-left pt-4 md:pt-0">
        {label}
      </h1>

      {/*
       */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-24 items-stretch">
        {authors.map((a) => {
          const slug = a.id;
          return (
            <Link
              href={`/authors/${slug}`}
              as={`/authors/${slug}`}
              className="h-full"
            >
              <li className="flex flex-col relative rounded-2xl items-center group cursor-pointer h-full">
                <header
                  className="relative w-full h-36 rounded-2xl flex justify-center group-hover:brightness-95"
                  style={{
                    backgroundColor: a.color,
                  }}
                >
                  <Image
                    loading="lazy"
                    loader={({ src, width, quality }) => {
                      return `${src}?w=${width}&q=${quality || 75}`;
                    }}
                    lazyRoot="lazy-root"
                    layout="intrinsic"
                    title={a.name}
                    src={a.picture}
                    alt={a.name}
                    width={200}
                    height={200}
                    className="rounded-none -bottom-5 h-50 aspect-square  absolute hover:bottom-0 transition-all group-hover:bottom-0"
                  />
                </header>
                <article className="bg-background z-10 flex flex-col p-6 gap-4 justify-start">
                  <hgroup className="flex h-full flex-col gap-1 text-center ">
                    <h2 className="text-3xl ">{a.name}</h2>
                    <h3 className="text-md">{a.mini_bio}</h3>
                  </hgroup>
                  <ul className="flex gap-2 flex-wrap justify-center">
                    {a.techStack.map((t) => (
                      <li
                        className="bg-gray-400 px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: a.color,
                        }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default AuthorList;
