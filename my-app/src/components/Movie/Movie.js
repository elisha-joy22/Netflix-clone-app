import React,{useState ,useEffect,createContext} from 'react';
import axios from '../../axios';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import MoreTitles from '../MoreTitles/MoreTitles';

export const MovieContext = createContext();


function Movies({link,setLink}){

    let [titlesData,setTitlesData] = useState();
    let [movieData,setMovieData] = useState();
    let [play,setPlay] = useState(false);
 
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

    /* Event Listener*/
    function eventListener(){
    const video = document.getElementsByClassName('video');
        video.onended = ()=>{
            alert("video ended")
        }
    }

    /*changeLink function to simultaneously change the link from moreTitles child*/
    function changeLink(link){
        setLink(link);
        console.log("count:",link);
    }
    
    return(
        <div>
            {
                !play?<Banner data={movieData} play={play} setPlay={setPlay}/>
                :<div>
                    <iframe className='video' src={"https://www.youtube.com/embed/"+movieData.youtube_id+"?autoplay=1"} width='100%'
                    height='500' frameborder='0' allowFullScreen='' webkitallowfullscreen="true" allow='autoplay'/>                                        
                 </div>
                
            }
            
            <Details data={movieData}/>
            <MoreTitles data={titlesData} changeLink={changeLink} setPlay={setPlay}/>
        </div>
    )
}


export {Movies};
