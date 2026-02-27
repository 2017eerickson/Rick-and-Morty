import { Children } from "react"
import App from "./App.jsx"
import Homepage from "./pages/Homepage.jsx"
import NotFound from "./pages/NotFound.jsx"
import About from "./pages/About.jsx"
import {createBrowserRouter,createHashRouter} from "react-router-dom"
import CharacterPage from "./pages/CharacterPage.jsx"
import CharacterDetails from "./pages/CharacterDetails.jsx"
import Errorpage from "./components/Errorpage.jsx"
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage.jsx"

const DEBUG = JSON.parse(import.meta.env.VITE_DEBUG)
const createRouter =
    DEBUG ?
        createBrowserRouter
        :
        createHashRouter



const router = createRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Errorpage/>,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/character",
                element: <CharacterPage/>
            },
            {
                path: "/characterdetails/:id",
                element: <CharacterDetails/>
            },
            {
                path: "/favoriteCharactersPage",
                element: <FavoriteCharactersPage/>
            },
            {
                path:"*",
                element: <NotFound/>
            },
        ]


    }
])

export default router