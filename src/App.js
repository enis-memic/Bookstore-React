import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/Booklist';
import Nav from './components/Nav';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
