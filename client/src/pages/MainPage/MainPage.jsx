import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <div className="links-container">
        <Link to="/createitem">Create Item</Link>
        <Link to="/items">View Items</Link>
      </div>
    </>
  );
}