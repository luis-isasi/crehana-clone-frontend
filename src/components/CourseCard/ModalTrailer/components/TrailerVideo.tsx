const TrailerVideo: React.FC<{ url: string }> = ({ url }) => {
  return (
    <iframe
      className="w-full h-88 "
      src={'https://www.youtube.com/embed/ItfnDYuCEmA'}
      // src="https://youtu.be/ItfnDYuCEmA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default TrailerVideo;
