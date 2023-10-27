import React from "react";

import { useRouter } from "next/router";

const Breadcrumps = () => {
  const router = useRouter();
  const { asPath } = router;
  const pathnames = asPath.split("/").filter((x) => x);

  const links = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    return { name, routeTo };
  });

  const allLinks = [
    {
      name: "Home",
      routeTo: "/",
    },
    ...links,
  ];

  return (
    <ul className="flex gap-2  text-center justify-center md:text-left md:justify-start">
      {allLinks.map((link, index) => {
        return (
          <li key={index}>
            <a
              href={link.routeTo}
              className="
            hover:underline 
            "
            >
              {link.name}
            </a>
            {index < allLinks.length - 1 && (
              <span className="opacity-75"> / </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumps;
