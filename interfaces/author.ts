type Author = {
  id: string;
  short_name: string;
  name: string;

  picture: string;

  links?: {
    website?: string;
    github?: string;
    linkedin?: string;
    npm?: string;
  };

  mini_bio?: string;
  location?: string;
  email?: string;

  tags?: string[];
  techStack?: string[];
  color?: `#${string}`;
};
export default Author;
