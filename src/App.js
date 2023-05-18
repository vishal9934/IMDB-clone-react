
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import MovieList from "./components/movieList/MovieList"
import Movie from "./pages/MovieDetails/Movie"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>} /> 
      <Route path="movie/:id" element={<Movie/>} />
      <Route path="movies/:type" element={<MovieList/>} />
      <Route path="/*" element={<h1>error page</h1>} />


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
