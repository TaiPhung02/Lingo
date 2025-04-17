"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("./app"), {
  ssr: false,
});

const AppWrapper = () => {
  return <App />;
};

export default AppWrapper;
