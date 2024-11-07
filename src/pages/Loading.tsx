import ContextTitle from "../components/ContextTitle";

const Loading = () => {
  return (
    <div className="flex-1 bg-main h-screen flex items-center justify-center">
      <div className="animate-pulse">
        <ContextTitle>Loading...</ContextTitle>
      </div>
    </div>
  );
};

export default Loading;
