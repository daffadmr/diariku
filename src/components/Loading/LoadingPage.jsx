import { Spinner } from "flowbite-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-[698px] bg-slate-100 flex flex-col items-center pt-24 md:pt-0 md:justify-center">
      <Spinner color="gray" size="xl" light={true} />
    </div>
  );
};

export default LoadingPage;
