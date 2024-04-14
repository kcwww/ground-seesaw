const PostDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-4">
      {description.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};
export default PostDescription;
