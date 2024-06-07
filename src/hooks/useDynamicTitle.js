import { useEffect } from "react";

//set dynamic title for different page
function useDynamicTitle(title, defaultTitle) {
  useEffect(() => {
    if (title) {
      document.title = title + " | " + defaultTitle;
    } else {
      document.title = defaultTitle;
    }
  }, [title]); // Run effect when the title changes
}

export default useDynamicTitle;
