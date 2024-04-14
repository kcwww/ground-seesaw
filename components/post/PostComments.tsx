import Comment from './Comment';

const dummyComments = [
  {
    id: '1',
    nickname: 'nickname1',
    content: 'content1\ncontent1\ncontent1',
    createAt: '2024-04-14 15:32:14',
    password: '123',
  },
  {
    id: '2',
    nickname: 'nickname2',
    content: 'content2 conte\nnt2 \ncontent2',
    password: '123',
    createAt: '2024-04-14 15:32:14',
  },
  {
    id: '3',
    nickname: 'nickname3',
    content: 'content3 c\nontent3 content3',
    password: '123',
    createAt: '2024-04-14 15:32:14',
  },
];

const PostComments = ({ comments }: { comments: string[] }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {dummyComments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default PostComments;
