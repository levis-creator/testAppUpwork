import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <ClipLoader />
        Loading...
      </div>
    </div>
  );
};

export default Loading;
