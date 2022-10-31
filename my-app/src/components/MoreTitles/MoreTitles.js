import React , {useEffect,useState} from "react";
import '../../App.css';
import './MoreTitles.css';
import axios from '../../axios';
import { baseUrl } from "../../constants/constants";

function MoreTitles(props){
    const [moreTitles,setMoreTitles] = useState();
    useEffect(()=>{
        axios.get(props.url)
        .then((response)=>{
            console.log(response.data.similarMovies);
            setMoreTitles(response.data.similarMovies);
        })
    },[])
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
                    <div className="grid-components"><a href={baseUrl+"movie/"+obj._id}><img src={obj.template_image} alt=""/></a></div>
                    )                    
                })
                :''
                }
            </div>
        </section>
    )
}

export default MoreTitles;