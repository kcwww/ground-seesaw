const EventPage = ({ params: { postId } }: { params: { postId: string } }) => {
  return (
    <>
      <div>{postId}</div>
    </>
  );
};

export default EventPage;
