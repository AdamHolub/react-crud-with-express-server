import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateItem, getItem } from "../../models/Item";

export default function ItemUpdateForm() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItem(id);
    if (data.status === 500 || data.status === 404) {
      return setLoaded(null);
    }
    if (data.status === 200) {
      setItem(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const item = await updateItem(id, formData);
    if (item.status === 200) {
      navigate(`/items/${id}`);
    } else {
      setInfo(item.payload);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <h1>Item not found</h1>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <h1>Item is loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1>Update Item</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={item.name}
          name="name"
          required
          placeholder="Enter item name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={item.description}
          name="description"
          required
          placeholder="Enter item description"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={item.price}
          name="price"
          required
          placeholder="Enter item price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handlePost(e)}>Update Item</button>
      </form>

      <div className="links-container">
        <Link to={`/items`}>
          Back to items
        </Link>
      </div>
    </>
  );
}
