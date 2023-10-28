import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center hover:underline cursor-pointer group w-fit">
      <Image
        title={`Avatar of ${name}`}
        loading="lazy"
        lang="en"
        loader={({ src, width, quality }) => {
          return `${src}?w=${width}&q=${quality || 75}`;
        }}
        lazyRoot="lazy-root"
        layout="fixed"
        width={60}
        height={60}
        src={picture}
        className="transition-all w-12 h-12 rounded-full mr-4 ring-2 ring-yellow-500 ring-offset-2 hover:ring-offset-0 peer-hover:ring-2 peer-hover:ring-offset-2 group-hover:ring-offset-0"
        alt={name}
      />
      <div className="text-lg  ">{name}</div>
    </div>
  );
};

export default Avatar;
