import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=()=> {
   const page=9;
   const apiKey= process.env.REACT_APP_NEWS_API;
   const[progress,setProgress]=useState(0);
  //  state= {
  //   progress:0
  // }
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#ffd166'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={page} category="general" />} />
            <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={page} category="business" />} />
            <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={page} category="sports" />} />
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={page} category="entertainment" />} />
            <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={page} category="health" />} />
            <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={page} category="science" />} />
            <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={page} category="technology" />} />
          </Routes>
        </Router>
      </>
    );
  }
export default App;
