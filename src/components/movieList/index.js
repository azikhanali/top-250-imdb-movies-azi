import { Fragment, useEffect, useState } from "react";
import "./style.css"
import axios from "axios";
import { Link,useSearchParams,createSearchParams } from "react-router-dom";
import { Spin,Pagination,Card } from "antd";

export default function MovieList(){
    const[searchParams,setSearchParams]=useSearchParams();
    const[loading,setloading]=useState(false);
    useEffect(function(){
        document.title="IMDb Top 250 Movies"
    },[]);
    const [movies, setMovies]=useState({data:[],metadata:{}});
   useEffect(function(){
    setloading(true);
    
    axios.get( "https://moviesapi.codingfront.dev/api/v1/movies" )
        .then(function(response){
            setMovies(response.data)
            setloading(false)
        })
        .catch(function(){
            setloading(false)
        })
    },[]);
    function renderMovies(){
        const{Meta}=Card;
        return movies.data.map(function({id,title,poster}){
           return( <li className="col-4" key={id}>
                        <Link to={`/movieinformation/${id}`}>
                            <Card  hoverable style={{ width: 240, }} cover={<img className="img-fit" src={poster} />}>
                                <Meta title={title}/>
                            </Card>
                        </Link>
                    </li>
           )
        })
    }
    function getApi(page){
        axios.get( `https://moviesapi.codingfront.dev/api/v1/movies?page=${page}` )
        .then(function(response){
            setMovies(response.data) })
        .catch(function(error){})
    }
    function changePage(page){
            setSearchParams(createSearchParams({page:page}))
            axios.get( `https://moviesapi.codingfront.dev/api/v1/movies?page=${page}` )
                .then(function(response){
                    setMovies(response.data) })
                .catch(function(error){})
    }
    useEffect(function(){
            axios.get( `https://moviesapi.codingfront.dev/api/v1/movies?page=${searchParams.get("page")}` )
                .then(function(response){
                    setMovies(response.data) })
                .catch(function(error){})
    },[])
            return(
                <div className="container">
                    {loading==true? (<Spin spinning={loading}/>):(
                    <Fragment>
                    <div className="imdbList">
                        <h2>IMDb Top 250 Movies</h2>
                        <ul className="flex flex-wrap space-between">
                        {renderMovies()}
                        </ul>
                    </div>
                    <div style={{padding:"10px 0"}}>
                    <Pagination current={movies.metadata.current_page}
                        pageSize={movies.metadata.per_page} 
                        total={movies.metadata.total_count}
                        onChange={changePage}
                        showSizeChanger={false}
                        align="center"
                        size="small"/>
                    </div>
                    </Fragment>
                    )}
                </div>
            )
}