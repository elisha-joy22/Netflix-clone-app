import React,{useState ,useEffect} from 'react';
import axios from '../../axios';

function One(props){
    let [child,setChild] = useState();
    let [child2,setChild2] = useState();
    useEffect(()=>{
        console.log(props.url);
        axios.get(props.url)
        .then((response)=>{
            setChild(response.data.movie.hero_image_mobile)
            console.log("Child:",response.data.movie);
        });
    })

    return(
        <div>
            <h3>{child?child:"Nt found"}</h3>
        </div>
    )
}

export default One;