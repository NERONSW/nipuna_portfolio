import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <span>This is home page</span>
    </div>
  );
}
