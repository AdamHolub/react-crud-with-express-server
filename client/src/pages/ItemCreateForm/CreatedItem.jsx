import { Link, useParams } from "react-router-dom";

export default function CreatedItem() {
    const { id } = useParams();

    return (
        <>
            <h1>Item created successfully!</h1>
            <p>Your item with ID {id} has been created.</p>
            <div className="links-container">
                <Link to={`/items/${id}`}>
                    View item details
                </Link>
                <Link to="/items">
                    Back to items
                </Link>
            </div>
        </>
    );
}
