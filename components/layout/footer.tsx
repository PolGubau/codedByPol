import { metadata } from "../../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 flex justify-center">
      <section
        className="gap-4 flex flex-col w-full
    items-center justify-center pt-20 pb-20 md:pb-28  md:flex-row md:justify-between max-w-5xl md:px-8"
      >
        <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2">
          The {metadata.title} Blog
        </h3>
        <p>
          With 🖤{" "}
          <a href={metadata.author.website}> By {metadata.author.fullName}</a>
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href={metadata.links.github}
            className="mx-3 font-bold hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
