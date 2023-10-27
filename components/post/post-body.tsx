type Props = {
  content: string;
  color?: string;
};

const PostBody = ({ content, color = "#fff176" }: Props) => {
  return (
    <div
      className={`markdown  `}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
