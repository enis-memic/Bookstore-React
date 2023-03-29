import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/Booklist';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
