import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import BookList from './pages/BookList';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route  path="books" element={<BookList/>}/>
      </Routes>
  );
}

export default App;
