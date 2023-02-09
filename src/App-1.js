import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import NotFoundPage from './pages/NotFoundPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 className="text-moose text-7xl">React Starter w/ Tailwind</h1>
          <Link
            className="text-xl border border-gray-600 py-2 px-5 mt-8 inline-block"
            to="/"
          >
            Home
          </Link>
          <Link className="moose-nav" to="/page-one">
            Page One
          </Link>
          <Link className="moose-nav" to="/page-two">
            Page Two
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
