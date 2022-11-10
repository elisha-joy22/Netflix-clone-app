import React , {useEffect,useState} from "react";
import '../../App.css';
import './MoreTitles.css';
import { baseUrl } from "../../constants/constants";
import { Link } from "react-router-dom";

function MoreTitles({data,changeLink}){
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
                    <div className="grid-components"><img src={obj.template_image} alt="" onClick={()=>{changeLink('movie/'+obj._id)}}/></div>
                    )                    
                })
                :''
                }
            </div>
        </section>
    )
}

export default MoreTitles;