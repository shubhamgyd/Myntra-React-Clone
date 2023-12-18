import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsAction.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      Fetch Done: {fetchStatus.fetchDone}
      Currently Fetching: {fetchStatus.currentlyFetching}
    </>
  );
};

export default FetchItems;
