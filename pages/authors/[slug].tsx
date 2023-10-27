import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post/post-body";
import Header from "../../components/layout/header";
import Layout from "../../components/layout/layout";
import { getAuthorById, getAllAuthors } from "../../lib/api";
import PostTitle from "../../components/post/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import Author from "../../interfaces/author";
import { metadata } from "../../lib/constants";
import Image from "next/image";

type Props = {
  data: {
    author: Author;
    text: string;
  };
  preview: boolean;
};

export default function Post({ data, preview }: Props) {
  const { author, text } = data;

  const router = useRouter();

  const title = `${author.name} | Next.js Blog Example`;
  if (!router.isFallback && !author?.id) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />

        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 flex flex-col gap-2 w-full">
              <Head>
                <title>
                  {author.name} | Author from {metadata.title}
                </title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={author.mini_bio} />
                <meta property="description" content={author.mini_bio} />
                <meta property="og:image" content={author.picture} />
              </Head>

              <header className="flex w-full h-full md:items-center   justify-between flex-col-reverse mt-4 md:mt-0  md:flex-row">
                <hgroup className="text-center md:text-left flex-col bg-background z-10 pt-6 md:pt-0">
                  <h1 className="text-6xl font-bold">{author.name}</h1>
                  <h4 className="text-xl ">{author.mini_bio}</h4>
                </hgroup>

                <header
                  className="relative w-full md:w-36 h-36 rounded-2xl md:rounded-full flex justify-center group md:overflow-hidden mt-16 md:mt-0"
                  style={{
                    backgroundColor: author.color,
                  }}
                >
                  <Image
                    src={author.picture}
                    alt={author.name}
                    width={200}
                    height={200}
                    className="rounded-none -bottom-5 md:bottom-0 h-50 aspect-square absolute hover:bottom-0 transition-all group-hover:bottom-0 md:group-hover:bottom-0"
                  />
                </header>
              </header>

              <div className="flex gap-2 flex-col md:mt-8">
                {author.location && (
                  <div className="flex gap-2 flex-col items-center md:items-start">
                    <span>{author.location}</span>
                  </div>
                )}
                {author.tags && (
                  <div className="flex items-center gap-4 mt-8 flex-col md:flex-row">
                    <h3 className="text-3xl md:text-xl text-center  font-bold md:text-left">
                      Topics
                    </h3>
                    <ul className="flex gap-2 text-center justify-center md:justify-start">
                      {author.tags.map((tag) => (
                        <li className="px-2 py-1 rounded-xl bg-slate-200">
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {author.techStack && (
                  <div className="flex items-center gap-4 mt-8 flex-col md:flex-row">
                    <h3 className="text-3xl md:text-xl text-center  font-bold md:text-left">
                      Tech Stack
                    </h3>
                    <ul className="flex gap-2 text-center justify-center md:justify-start">
                      {author.techStack.map((tag) => (
                        <li
                          className="px-2 py-1 rounded-full "
                          style={{
                            backgroundColor: author.color + "70",
                          }}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {text && <PostBody content={text} color={author.color} />}
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { data, content } = getAuthorById(params.slug);

  const c = await markdownToHtml(content ?? "");

  return {
    props: {
      data: {
        author: data,
        text: c,
      },
    },
  };
}

export async function getStaticPaths() {
  const authors = getAllAuthors();

  return {
    paths: authors.map((post) => {
      return {
        params: {
          slug: post.id,
        },
      };
    }),
    fallback: false,
  };
}
