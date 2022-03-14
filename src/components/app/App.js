import "./App.css";
import Header from "../header/Header";
import Movies from "../movies/Movies";
import Movie from "../movie/Movie";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <Movie />
    </div>
  );
}

export default App;
