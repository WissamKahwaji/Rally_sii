import React from "react";

const PageContainer = ({ children, className }) => {
  return (
    <div className={`w-full lg:w-[80%] absolute right-0  top-96 min-h-screen lg:top-0 p-4 bg-black ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
