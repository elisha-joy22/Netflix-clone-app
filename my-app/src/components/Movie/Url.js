import React,{useState ,useEffect} from 'react';
import MoreTitles from '../MoreTitles/MoreTitles';
import Movies from './Movie';

function Url({url,app}){
    <Movies link={url?url:app}/>
}

export default Url;