import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import Spinner from "react-spinkit";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1920, min: 900 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function MovieList({ title, filter, carousel = false, duration = 500, speed = 1000 }) {

  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);



  const getMovies = async () => {
    setLoading(true);
    
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`).then(res => res.json());
    
    setTimeout(() => {
      setMovies(response.data.movies);
      setLoading(false);
    }, 3000)
  }

  useEffect(() => {

    getMovies();
  }, []);


  return (
    <div className="my-12">
      <h1 className="text-gray-100 text-3xl font-medium">{title}</h1>

      {loading && (
       
          <div className="flex justify-center py-5">
          <Spinner name="ball-grid-pulse"  color="#fff" />
          </div>
       

      )};
      {movies.length > 0 && (

        <>
        {carousel ? (
          <div className="my-7">
            <Carousel swipeable={true} loop responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={speed}
              keyBoardControl={true}
              transitionDuration={duration}
              infinite={true}
            >
              {movies?.map(movie => (
                <MovieCard onClick={() => setDetails(movie)} {...movie} key={movie?.id} />
              ))}
            </Carousel>
          </div>

        ) : (
          <div className="my-7 flex items-start justify-between flex-wrap">
            {movies?.map(movie => (

              <MovieCard onClick={() => setDetails(movie)} {...movie} key={movie?.id} />
            ))}
          </div>


        )}

      </>

      )}

     

      {details && (

        <div className="fixed bg-black bg-opacity-90 w-screen h-screen top-0 left-0 z-[999999]">
          <div className="text-center text-white text-3xl my-5">{details?.title}</div>
          <span className="text-white cursor-pointer" onClick={() => setDetails(null)}>Close</span>
        </div>
      )}
    </div> 
  )
}

export default MovieList