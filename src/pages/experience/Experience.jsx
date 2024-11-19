import React, { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    document.title = "Experience";
  }, []);
  return (
    <div>
      <span>This is experience page</span>
    </div>
  );
}
