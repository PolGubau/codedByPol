import Container from "../../components/container";
import PostList from "../../components/post-list";
import Intro from "../../components/hero";
import Layout from "../../components/layout/layout";
import { getAllAuthors } from "../../lib/api";
import Head from "next/head";
import Link from "next/link";
import Author from "../../interfaces/author";
import { metadata } from "../../lib/constants";
import AuthorList from "../../components/author-list";
import Header from "../../components/layout/header";

type Props = {
  authors: Author[];
};

export default function AuthorsPage({ authors = [] }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`All Authors | ${metadata.title}`}</title>
      </Head>
      <Container>
        <Header />
        <Link href="/" className="text-blue-500 hover:underline">
          Go home
        </Link>

        {authors.length > 0 && <AuthorList authors={authors} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const authors = getAllAuthors();

  return {
    props: { authors },
  };
};
