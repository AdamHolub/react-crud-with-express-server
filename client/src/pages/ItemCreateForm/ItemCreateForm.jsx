import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createItem } from "../../models/Item";

export default function ItemCreateForm() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const item = await createItem(formData);
        if (item.status === 201) {
            redirectToSuccessPage(item.payload._id);
        } else {
            setInfo(item.msg);
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

    const redirectToSuccessPage = (id) => {
        navigate(`/createditem/${id}`);
    };

    return (
        <>
            <h1>Create new item</h1>
            <form>
                <input type="text" name="name" placeholder="Enter item name" onChange={e => handleChange(e)} />
                <input type="text" name="description" placeholder="Enter item description" onChange={e => handleChange(e)} />
                <input type="number" name="price" placeholder="Enter item price" onChange={e => handleChange(e)} />
                <button type="submit" onClick={handlePost}>Create Item</button>
            </form>
            <Link to="/">Back to items</Link>
        </>
    );
}