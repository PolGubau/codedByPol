type Props = {
  content: string;
  color?: string;
};

const PostBody = ({ content, color = "#fff176" }: Props) => {
  console.log(content);
  return (
    <div
      className={`markdown  `}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
