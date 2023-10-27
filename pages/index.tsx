import PostList from "../components/post-list";
import FirstPost from "../components/first-post";
import Intro from "../components/hero";
import Layout from "../components/layout/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Link from "next/link";
import Container from "../components/container";
import { metadata } from "../lib/constants";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`${metadata.title} | Personal Blog and Code courses, React, SEO, Frontend development`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <FirstPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <PostList posts={morePosts} />}
          <Link href="/posts" className="text-blue-500 hover:underline">
            All posts
          </Link>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
