


export default function FilmWatchList() {

  function clearFilmInList() {
    const [films, setFilms] = useState(films);
    return (
    <main>
      <section className='container'>
        <h3>Films In My Watchlist({films.length})</h3>
        <List films={films} />
        <button color = 'red' onClick={() => setFilms([])}>Remove From List</button>
      </section>
    </main>
    );
  }
  
  
  const filmList = ({ films }) => {
    return (
      <>
  {films.map((films) => {
    const { id, name, image } = films; 
    return (
      <article key={id} className='films'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          
        </div>
      </article>
    );
  })}  
    </>
    );
  };
  
  

 const films = [
    {
      film:{
        id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/boat.png"],
        name: "test1",
        duration: 2,
      
    
      }
    },
  
    {
      film:{
        id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/watch.png"],
        name: "test2",
        duration: 2,
      
    
      }
    },
  
    {
      film:{
        id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/pool.png"],
        name: "test1",
        duration: 2,
      
    
      }
    }
    ,
  
    {
      film:{
        id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/watch.png"],
        name: "test3",
        duration: 11,
      
    
      }
    },
  
    {
      film:{
        id: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        thumbNailsUrls: ["https://homepages.cae.wisc.edu/~ece533/images/cat.png"],
        name: "test4",
        duration: 5,
      
    
      }
    },
     
  ]
  
  
  }



