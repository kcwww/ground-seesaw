const PostNickname = ({ nickname }: { nickname: string }) => {
  return (
    <div className="w-full">
      <h1 className="text-xl">{nickname}</h1>
    </div>
  );
};

export default PostNickname;
