import { Routes, Route } from 'react-router-dom';
import Books from './View/Books';
import Categories from './View/Categories';

const Main = () => (
  <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
);
export default Main;
