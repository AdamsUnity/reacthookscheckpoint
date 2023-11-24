import CreatNewMovie from "./components/CreatNewMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { Button } from "antd";
import movieCollection from "./data";
import { useMemo, useState } from "react";

function App() {
  // creating useState to manage the movieCollection

  const [myMovies, setMyMovies] = useState(movieCollection);
  const [random, setRandom] = useState(0);

  //lets memorize the movies in a useMemo Hook

  const memorizeMovies = useMemo(() => {
    return {
      myMemorizeMovies: myMovies,
    };
  }, [random]);

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto flex justify-between pt-8 flex-col md:flex-row gap-4 py-8 px-5 items-center">
        {/* filter component */}
        <Filter setMyMovies={setMyMovies} memorizeMovies={memorizeMovies} />
        <CreatNewMovie
          setMyMovies={setMyMovies}
          memorizeMovies={memorizeMovies}
          setRandom={setRandom}
        />
      </div>
      {/* intenary statement to show if movie seached for does not exist  */}
      {myMovies.length === 0 ? (
        <div className="text-center py-24 text-3xl">
          Searched movie did not return any result
        </div>
      ) : (
        <MovieList myMovies={myMovies} />
      )}
    </div>
  );
}

export default App;
