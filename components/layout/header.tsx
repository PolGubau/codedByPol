import Link from "next/link";
import { metadata } from "../../lib/constants";
import Breadcrumps from "../breadcrumps/Breadcrumps";

const Header = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 text-center md:text-left">
        <Link href="/" className="hover:underline">
          {metadata.title}
        </Link>
        .
      </h2>
      <Breadcrumps />
    </>
  );
};

export default Header;
