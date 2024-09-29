import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "../../pages/homePage";
import MovieInformation from "../../pages/movieInformaion";
import Search from "../../pages/search";
export default function Router(){
    const router=createBrowserRouter([
        {
            path:"/",
            element:<HomePage/>,
        },
        {
            path:"/movieinformation/:movie_id",
            element:<MovieInformation/>, 
        }
        ,
        {
            path:"/search",
            element:<Search/>, 
        }
    ]);
    return <RouterProvider router={router}/> ;
}