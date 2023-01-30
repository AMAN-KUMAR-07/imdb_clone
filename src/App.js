
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path="movie/:id" element={<MovieDetail/>}/>
          <Route path="movies/:type" element={<MovieList/>}/>
          <Route path="/*" element={<h1>Error page</h1>}/>
        </Routes>
      
    </div>
  );
}

export default App;
