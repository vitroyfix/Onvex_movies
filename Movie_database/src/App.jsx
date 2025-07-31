import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import Footer from './components/Footer.jsx'
import './App.css'; // global styling for shared video

function App() {
  return (
   <div>
      <Navbar buttonName="Sign In" />
      <HeroBanner
        title="The Dark Knight"
        genre="Action, Thriller"
        releaseYear="2022"
        watchTrailer="Watch Trailer"
        summary="Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as The Joker"
        moreInfo="More Info"
      />
      <MovieGrid/>
      <Footer/>
    </div>
  );
}

export default App;

