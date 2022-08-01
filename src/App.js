import Hero from './app/components/Hero'
import Nav from "./app/components/Nav";
import MovieList from './app/components/MovieList';



function App() {
 
  return (
    
    <>
    <div className="">
      <div className="max-w-5xl mx-auto">
         <Nav />
         <Hero />
         <MovieList
          title='Top Rated 💀'
          filter="sort_by=rating"
          carousel={true}
          />
         <MovieList
          title='Action 😎'
          filter="genre=action"
          carousel={true}
          speed={1000}
          duration={1000}
          />
         <MovieList
          title='Drama 😀'
          filter="genre=drama"
          carousel={true}
          />
         <MovieList
          title='Fantasy 🙂'
          filter="genre=fantasy"
          />
           <MovieList
          title='Thriller ☠'
          filter="genre=thriller"
          />
      </div>
      <div className='text-white text-center py-4 text-lg'>Build with by <a className='font-semibold' href='https://www.linkedin.com/in/coderarife/'>Arif Almas 💖</a></div>
    </div>
   
    </>

  );
}



export default App;
