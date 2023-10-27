import Container from "../../components/container";
import PostList from "../../components/post-list";
import Intro from "../../components/hero";
import Layout from "../../components/layout/layout";
import { getAllPosts, getAuthorById } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import Header from "../../components/layout/header";
import { metadata } from "../../lib/constants";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`All Posts | ${metadata.title}`}</title>
      </Head>
      <Container>
        <Header />

        {allPosts.length > 0 && <PostList posts={allPosts} />}
      </Container>
    </Layout>
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
