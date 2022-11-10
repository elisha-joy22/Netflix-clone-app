import React,{useState ,useEffect} from 'react';
import axios from '../../axios';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import MoreTitles from '../MoreTitles/MoreTitles';

function Movies(){
    let [titlesData,setTitlesData] = useState();
    let [movieData,setMovieData] = useState();
    let [link,setLink] = useState("movie/6346fd19fe46018b5f66d26f")

/*UseEffect for Changing the link by changeLink function*/ 
    useEffect(()=>{
        link?setLink(link):setLink("movie/6346fd19fe46018b5f66d26f");
       })
    
/*UseEffect for Data fetching from Backend*/
    useEffect(()=>{
        /*Fetching similarMovies array*/
        axios.get(link)
        .then((response)=>{
            setTitlesData(response.data.similarMovies);
            console.log(response.data.similarMovies);
        });
        /*Fetching movie Object*/
        axios.get(link)
        .then((response)=>{
            setMovieData(response.data.movie);
        });
    },[link])

    
/*changeLink function to simultaneously change the link from moreTitles child*/
    function changeLink(link){
        setLink(link);
        console.log("count:",link);
    }
    
    
    
    return(
        <div>
            <Banner data={movieData}/>
            <Details data={movieData}/>
            <MoreTitles data={titlesData} changeLink={changeLink}/>
        </div>
    )
}




export default Movies;