import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import MarketPlace from './Components/MarketPlace/MarketPlace';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/marketplace" element={<MarketPlace/>} />
            {/* <Route path="/login" element={<LoginPage/>}/> */}
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;