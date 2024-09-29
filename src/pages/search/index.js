import { Color } from "antd/es/color-picker";
import axios from "axios"
import { Fragment, useEffect, useState } from "react";
import { Link,useSearchParams,createSearchParams } from "react-router-dom";
import LayOut from "../../components/layOut";

export default function Search(){
    const[searchParams,setSearchParams]=useSearchParams();
    useEffect(function(){document.title="Movie Search"},[]);
    const[movies,setMovies]=useState({data:[],metadata:{}});
    function title(name){
        console.log(name.target.value)
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${name.target.value}`)
            .then (function(response){
                setMovies(response.data)
            })
            .catch (function(error){})
            
    }
    useEffect(function(){
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${searchParams.get("name")}`)
        .then (function(response){
            setMovies(response.data)
        })
        .catch (function(error){})
    },[]);
    function rendermovies(){
        if (movies.data.length==0){
            return(
                <h3 style={{padding:"100px 425px",color:"red",fontStyle:"italic"}}>There is no movie with this title</h3>
            )
        }
        return movies.data.map(function({id,title,poster}){
            return(
                <li key={id} className="col-6">
                    <h6 style={{padding:"5px 0"}}>{title}</h6>
                    <Link to={`/movieinformation/${id}`}><img style={{width:"90 px",height:"110px"}} src={poster}/></Link>
                </li>
            )
        })
    }
    return(
        <LayOut>
        <div className="search container" >
                <input onChange={title} placeholder="Type the movie name" />
        </div>
        <div className="movies container" style={{padding:"20px 0"}}>
            <ul className="flex flex-wrap space-between">
                {rendermovies()}
            </ul>
        </div>
        </LayOut>
    )
}