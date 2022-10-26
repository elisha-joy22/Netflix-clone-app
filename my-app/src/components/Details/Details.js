import React from "react";
import '../../App.css'
import './Details.css';

let genres=[
    "Sci-Fi Movies","US Movies","Movies Based on Books","Action & Adventure"
];
let audio="Hindi,Malayalam,Tamil,Telugu";
let subtitles="English,Hindi";
let cast=[
"Chloë Grace Moretz",
"Nick Robinson",
"Ron Livingston",
"Maggie Siff",
"Alex Roe",
"Maria Bello",
"Maika Monroe",
"Zackary Arthur",
"Liev Schreiber"]
function Details(){
    return(
        <section className="section-common " id="details-section">
            <div className="details-heading">
                <h3>More Details</h3>
            </div>
                
            <div className="details-details-grid">
                <div className="details-watch-offline">
                    <div className="text-grey details-head">Watch Offline</div>
                    <div>Available to download</div>
                </div>                
                <div className="details-genres">
                    <div className="text-grey details-head">Genres</div>
                    <div>
                    {
                        genres.map((genre)=>{
                            return(
                            <span>{genre}</span>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="details-audio">
                    <div className="text-grey details-head">Audio</div>
                    <div>{audio}</div>
                </div>
                <div className="details-subtitles">
                    <div className="text-grey details-head">Subtitles</div>
                    <div>{subtitles}</div>
                </div>
            </div>
            <div className="details-cast">
                <h3 className="text-grey details-head">Cast</h3>
                <div className="details-cast-grid">
                    {
                        cast.map((person)=>{
                            return(
                            <div><a>{person}</a></div>
                            )})
                    }
                </div>
            </div>
        </section>
    )
}


export default Details;