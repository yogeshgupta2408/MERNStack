import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import Movies from './components/Movie/Movies';
import MovieDetails from './components/Movie/MovieDetail';
import {Route, Routes} from 'react-router-dom';
import Register from './components/User/Register';
import Signin from './components/User/Signin';
const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMovie />} exact />
          <Route path="/movies" element={<Movies />} exact />
          <Route path="/movies/:id" element={<MovieDetails />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/signin" element={<Signin />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App
