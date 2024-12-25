import {
  Routes, Route, Link, BrowserRouter,
} from 'react-router-dom';

import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="bg-gray-200 p-12">
          <div className="bg-white container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route index element={<Books />} />
                  <Route path="categories" element={<Categories />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
