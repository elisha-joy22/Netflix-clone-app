import React,{useEffect,useState} from "react";
import '../../App.css'
import './Details.css';



function Details({data}){
    let [details,setDetails] = useState();
    
    useEffect(()=>{
        setDetails(data);
    });

    return(
        <section className="section-common " id="details-section">
            <div className="details-heading">
                <h3>More Details</h3>
            </div>
                
            <div className={`details-details-grid ${!data?'loading-light':''}`}>
                <div className="details-watch-offline">
                    <div className="text-grey details-head">Watch Offline</div>
                    <div className={!data?'display-none':''}>Available to download</div>
                </div>                
                <div className="details-genres">
                    <div className="text-grey details-head">Genres</div>
                    <div>
                    {
                        details?
                        details.genre.map((item)=>{
                            return(
                            <span>{item}</span>
                            )
                        })
                        :''
                    }
                    </div>
                </div>
                <div className="details-audio">
                    <div className="text-grey details-head">Audio</div>
                    <div>{details?details.audio:''}</div>
                </div>
                <div className="details-subtitles">
                    <div className="text-grey details-head">Subtitles</div>
                    <div>{details?details.subtitles:''}</div>
                </div>
            </div>
            <div className={`${!data?'loading-light display-none':'details-cast'}`}>
                <h3 className="text-grey details-head">Cast</h3>
                <div className="details-cast-grid">
                    {
                        details?
                        details.cast.map((person)=>{
                            return(
                            <div><a>{person}</a></div>
                            )})
                        :''    
                    }
                </div>
            </div>
        </section>
    )
}


export default Details;