import React,{useEffect,useState} from 'react';
import '../../App.css';
import './Banner.css';
import { baseUrl } from "../../constants/constants";

function Banner({data}){        
    let [movie,setMovie] = useState();

    useEffect(()=>{
        setMovie(data);
        window.scrollTo({top:0,left:0,behavior:'smooth'});
    });
    
    return(
        <section className='section-common banner-section'>

        <div className='banner-container'>
            <div className='info-container'>
                <div className='title-logo-container'>
                    <img alt='title-logo' src={movie?movie.title_image:''}/>
                </div>                    
                <div className='details-container'>
                    <div className='m-title'>{movie?movie.title:''}</div>
                    <div className='m-metadata'>
                        <span>{movie?movie.metaData.year:''}</span>
                        <span className='pipe'>|</span>
                        <span className='age'>{movie?movie.metaData.certification:''}</span>
                        <span className='pipe'>|</span>
                        <span>{movie?movie.metaData.duration:''}</span>
                        <span className='pipe'>|</span>
                        <span><a href={baseUrl+"genres/"+(movie?movie.genre[0]:'')}>{movie?movie.genre[0]:''}</a></span>
                    </div>
                    <div className='m-description'>{movie?movie.description:''}</div>
                    <div className='m-cast'><span className='cast'>Starring : </span><span>{movie?movie.cast[0]:''},{movie?movie.cast[1]:''},{movie?movie.cast[2]:''}</span></div>
                </div>
            </div>
            <div className='banner-image-container'>
                <div className='banner-image-desktop' >
                    <img className='banner-image-desktop'  alt=' ' src='' style={{"background-image":`url(${movie?movie.hero_image_desktop:''})`}} />
                </div>
                <div>
                    <img className='banner-image-mobile' alt=' ' src={movie?movie.hero_image_mobile:''}/>                    
                </div>
                <div className='banner-fade-left'></div>                            
            </div>
        </div>
        <div className='banner-fade-bottom'></div>
        </section>
    )
}

export default Banner;