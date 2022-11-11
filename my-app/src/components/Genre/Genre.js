import React,{useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import axios from '../../axios';
import '../../App.css';
import './Genre.css' 




/* Genre Component calls GenreInstance component where the logics are written and pass title as props */
function Genre(){
    let genreArr = ["Recently Added","Action & Adventure","Dramas","Crime Movies","Thriller Movies","Sci-Fi Movies","Malayalam-Language Movies"]
    return(
        <section className="genre-section">
            <div className="genre-container genre-main-heading" >
                <h1>Movies</h1>
                <h3>Movies move us like nothing else can,
                     whether they’re scary, funny, dramatic,
                      romantic or anywhere in-between.
                       So many titles, so much to experience.
                </h3>
            </div>
            {
                genreArr.map((name)=>{      
                   return(
                    <>
                    <GenreInstance title={name}/>
                    </>
                   ) 
                })
            }
        </section>           
    )
}



/* GenreInstance component does the logic */ 
/* Using axios,Fetches template data from backend using the title as url passed from Genre component */
function GenreInstance({title}){
    let [templateArr,setTemplateArr] = useState([]);
    useEffect(()=>{
        axios.get("genre/"+title)
        .then((response)=>{
            console.log(response.data);
            setTemplateArr(response.data)
        })
    },[])
    return(
            <div className="section-common genre-container">
                <div className="genre-title"> 
                    <h3 className="">{title}</h3>
                </div>
                <div className="genre-templates-container">
                    {
                    templateArr.map((item)=>{
                        return (
                        <div className="template">
                            <img src={item.template_image}/>
                            <h3>{item.title}</h3>
                        </div>
                        )
                    })
                    }
                </div>
            </div>          
    )
}

export default Genre;
