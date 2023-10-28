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

  const fourNextPosts = morePosts.slice(0, 4);

  return (
    <>
      <Layout>
        <Head>
          <title>{`${metadata.title} | Personal Blog and Code courses, React, SEO, Frontend development`}</title>

          <meta name="description" content={metadata.description} />

          <link rel="manifest" href="/manifest.json" />
          <meta property="og:url" content={metadata.siteUrl} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`${metadata.title} | Personal Blog and Code courses, React, SEO, Frontend development`}
          />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={metadata.homeOgImage} />
          <meta property="tags" content={metadata.tags.join(", ")} />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <FirstPost
              author={heroPost.author.data}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {fourNextPosts.length > 0 && <PostList posts={fourNextPosts} />}

          <div className="flex gap-4 mb-8 items-center justify-center">
            <Link
              href="/posts"
              className="text-orange-900 hover:underline bg-orange-200 hover:bg-orange-300 transition-all px-3 py-2 rounded-md text-xl"
            >
              All posts
            </Link>
            <Link
              href="/authors"
              className="text-yellow-900 hover:underline bg-yellow-200 hover:bg-yellow-300 transition-all px-3 py-2 rounded-md text-xl"
            >
              Our creators
            </Link>
          </div>
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
