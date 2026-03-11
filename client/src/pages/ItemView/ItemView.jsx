import { Link, useParams, useNavigate } from "react-router-dom";
import { getItem, deleteItem } from "../../models/Item";
import { useState, useEffect } from "react";

export default function ItemView() {
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

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (item.name === formData) {
      const data = await deleteItem(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong item name");
    }
  };

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
      <h1>Item view</h1>
      <p>{id}</p>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>

      <form>
        <input type="text" placeholder={item.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>

      <div className="links-container">
        <Link to={`/updateitem/${id}`}>Update</Link>
        <Link to="/">Go back</Link>
      </div>
    </>
  );
}
