import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import MarketPlace from './Components/MarketPlace/MarketPlace';
import HomePage from './Components/HomePage/HomePage';
import EventsPage from "./Components/EventsPage/EventsPage";
import EventsDetailsPage from "./Components/EventsPage/EventsDetailsPage";
import EventCategoryPage from "./Components/HomePage/EventCatergoryPage"; //make this dynamic


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/marketplace" element={<MarketPlace/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/internal" element={<EventsPage />} />
            <Route path="internalPage/:eid" element={<EventsDetailsPage />} />
            <Route path="events/:cid" element={<EventCategoryPage />} />
          </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;