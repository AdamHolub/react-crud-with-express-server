import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "./MainPage/MainPage.jsx";
import ItemView from "./ItemView/ItemView.jsx";
import ItemUpdateForm from "./ItemUpdateForm/ItemUpdateForm.jsx";
import ItemCreateForm from "./ItemCreateForm/ItemCreateForm.jsx";
import CreatedItem from "./ItemCreateForm/CreatedItem.jsx";
import ItemsList from "./ItemList/ItemList.jsx";
import About from "./About/About.jsx";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/items/:id" element={<ItemView />} />
          <Route path="/updateitem/:id" element={<ItemUpdateForm />} />
          <Route path="/createitem" element={<ItemCreateForm />} />
          <Route path="/createditem/:id" element={<CreatedItem />} />
          <Route path="/items" element={<ItemsList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}