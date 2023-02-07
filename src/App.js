import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';

function App() {
  return (
    <div className="App">
      <Router> 
        < Header />

        <Routes>
          <Route index element={<h1>Hello World</h1>}></Route>
          <Route path='movie/:id' element={<h1>Movie details page</h1>}></Route>
          <Route path='movies/:type' element={<h1>Movie list page</h1>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
        
     </Router>
    </div>
  );
}

export default App;
