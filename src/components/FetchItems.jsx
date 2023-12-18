import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const FetchItems = () => {
  const fetchStatus = useSelector(store => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
  
    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  
      return () => {
        console.log("Cleaning up UseEffect.");
        controller.abort();
      };
  }, []);

  
  return <>
    Fetch Done: {fetchStatus.fetchDone}
    Currently Fetching: {fetchStatus.currentlyFetching}
  </>
}

export default FetchItems;