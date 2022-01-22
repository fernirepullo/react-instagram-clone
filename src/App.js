import './App.css';
import Login from './Components/Login.js'
import Feed from './Components/Feed';
import SignUp from './Components/SignUp';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
