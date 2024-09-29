import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import LayOut from "../../components/layOut";
import { Spin } from "antd";

export default function MovieInformation(){
    useEffect(function(){
        document.title="Movie Information"
    },[]);
    const[loading,setloading]=useState(true);
    const[movie,setMovie]=useState({images:[]});
    const {movie_id}=useParams();
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies/${movie_id}`)
        .then(function(response){
            setMovie(response.data)
            setloading(false)
        })
        .catch(function(error){
            setloading(false)
        })
        const imageAddress=movie.images[0]
    return(
        <LayOut>
            {loading==true? (<Spin spinning={loading}/>):(
                            <div className="movieInformation">
                            <img style={{width:"100%"}}src={imageAddress}/>
                            <div className="container">
                            <div className="information flex flex-wrap space-between">
                                <img style={{width:"150 px",height:"170px",margin:"0 auto"}} src={movie.poster}/>
                                <div className="informationContent">
                                    <h2>{movie.title}</h2>
                                    <h3>Director:  {movie.director}</h3>
                                    <h3>Description:  {movie.plot}</h3>
                                    <h4>Released Date:  {movie.released}</h4>
                                </div>
                            </div>
                            </div>
                        </div>
            )}
        </LayOut>
    )
}