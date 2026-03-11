import { Link } from "react-router-dom";
import ItemLink from "./ItemLink";
import { useState, useEffect } from "react";
import { getItems } from "../../models/Item";

export default function ItemList() {
  const [items, setItems] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getItems();
    if (data.status === 500 || data.status === 404) {
      return setLoaded(null);
    }
    if (data.status === 200) {
      setItems(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <h1>Items not found!</h1>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <h1>Items are loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1>Item list</h1>
      <div className="items-list">
        {items.map((item, index) => (
          <ItemLink key={index} {...item} />
        ))}
      </div>
      <div className="links-container">
        <Link to="/">Go back</Link>
      </div>
    </>
  );
}
