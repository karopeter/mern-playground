import Registration from "./authentication/signup/signup-component";
import Login from "./authentication/login/login-component"; 
import HomePage from "./page/home/home-component";
import { Route, Routes } from 'react-router-dom';
import Walmart from "./page/layouts/walmart/walmart-component";
import Products from "./page/layouts/products/product-component";
import Movies from "./page/layouts/movies/movies-component";
import MovieDetails from "./page/layouts/movies-details/movies-details";
import CreateMovie from "./page/layouts/movie/create-movie-component";
import { AuthProvider } from "./authentication/context/AuthContext";
import { WalmartProvider } from "./authentication/context/walmartContext";
import { MovieProvider } from "./authentication/context/movieContext";
import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <WalmartProvider>
          <MovieProvider>
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/walmart" element={<Walmart />} />
              <Route path="/products" element={<Products />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/create-movie" element={<CreateMovie />} />
              <Route path="/movie-details" element={<MovieDetails />} />
            </Routes>
          </MovieProvider>
        </WalmartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
