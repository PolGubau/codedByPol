import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/hero";
import Layout from "../../components/layout/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`Blog`}</title>
      </Head>
      <Container>
        <Intro />

        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
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
