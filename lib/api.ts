import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Author from "../interfaces/author";

const postsDirectory = join(process.cwd(), "_posts");
const authorDirectory = join(process.cwd(), "_authors");
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
export function getAuthorSlugs() {
  return fs.readdirSync(authorDirectory);
}

export function getAuthorById(id: string): { data: Author; content: string } {
  const realName = id.replace(/\.md$/, "");

  const fullPath = join(authorDirectory, `${realName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    data: data as Author,
    content,
  };
}
export function getAllAuthors() {
  const slugs = getAuthorSlugs();
  const authors = slugs.map((slug) => getAuthorById(slug ?? "").data);
  return authors;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const authorObject = getAuthorById(data.author);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  // change the string of the field author to authorObject
  items["author"] = authorObject;

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
