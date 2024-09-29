import { Fragment } from "react";
import "./style.css"
import Header from "../../components/header";
import MovieList from "../../components/movieList";
import HeroSection from "../../components/heroSection";
import Footer from "../../components/footer";
import LayOut from "../../components/layOut";
export default function HomePage(){
    return(
           <LayOut>
                <HeroSection/>
                <MovieList/>
            </LayOut>
    )
}