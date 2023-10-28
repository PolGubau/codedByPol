import Link from "next/link";
import { metadata } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:items-start mb-20 mt-8 ">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline">
          {metadata.title}
        </Link>
      </h1>
      <h4 className="text-center opacity-75 md:text-left text-xl mt-5 md:pl-2">
        {metadata.description}
      </h4>
    </section>
  );
};

export default Intro;
