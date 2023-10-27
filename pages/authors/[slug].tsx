import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post/post-body";
import Header from "../../components/layout/header";
import PostHeader from "../../components/post/post-header";
import Layout from "../../components/layout/layout";
import {
  getPostBySlug,
  getAllPosts,
  getAuthorById,
  getAllAuthors,
} from "../../lib/api";
import PostTitle from "../../components/post/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import Link from "next/link";
import Author from "../../interfaces/author";

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
            <Link href="/" className="text-blue-500 hover:underline">
              Go home
            </Link>
            <article className="mb-32">
              <Head>
                <title>{author.name} | Author from CodedByPol </title>
                <meta property="og:image" content={author.picture} />
              </Head>

              <h1>{author.name}</h1>
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
