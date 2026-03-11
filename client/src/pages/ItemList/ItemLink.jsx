import { Link } from "react-router-dom";

export default function ItemLink(props) {
  return (
    <>
      <Link to={`/items/${props._id}`}>
        <h2>{props.name}</h2>
      </Link>
    </>
  );
}
