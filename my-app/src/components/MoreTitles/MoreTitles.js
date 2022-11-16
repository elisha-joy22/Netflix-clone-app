import React , {useEffect,useState} from "react";
import '../../App.css';
import './MoreTitles.css';
import { baseUrl } from "../../constants/constants";
import { Link } from "react-router-dom";

function MoreTitles({data,changeLink,setPlay}){
    let [moreTitles,setMoreTitles] = useState();

    useEffect(()=>{
        setMoreTitles(data);
    })

    return(
        <section className="section-common">
            <div className="titles-heading">
                <h3>More Like This</h3>
            </div>
            <div className="titles-grid-container">
                {
                moreTitles?
                moreTitles.map((obj)=>{
                    return (
                        <div className="grid-components">
                            <img className={!data?'loading-light':''} src={obj.template_image} alt="" onClick={()=>{
                                changeLink('movie/'+obj._id);
                                setPlay(false);
                                }}/>
                        </div>
                    )                    
                })
                :''
                }
            </div>
        </section>
    )
}

export default MoreTitles;