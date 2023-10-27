import Link from "next/link";
import { metadata } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline">
          {metadata.title}
        </Link>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {metadata.description}
      </h4>
    </section>
  );
};

export default Intro;
