import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {

  const items = useSelector(store => store.items);
  console.log(items);

  return (
    <>
      <main>
        <div className="items-container"></div>
        {items.map(item => <HomeItem item={item} />)}
      </main>
    </>
  );
};

export default Home;
