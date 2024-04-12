import PostExample from '@/app/(protected)/(main)/post/_components/PostExample';
import PostForm from '@/app/(protected)/(main)/post/_components/PostForm';

const PostPage = () => {
  return (
    <>
      <div className="w-full md:pl-64">
        <div className="w-full">
          <PostExample />
          <hr className="my-16" />
          <PostForm />
        </div>
      </div>
    </>
  );
};

export default PostPage;
