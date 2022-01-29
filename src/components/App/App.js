import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';




function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>      
        <Link to="/"> HOME </Link>  ||   
        <Link to="/details"> details </Link>  || 
        <Link to='/addMovie'> AddMovie </Link>

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
