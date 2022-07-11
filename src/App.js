import React from "react"
import {Routes, Route} from 'react-router-dom';
import Notes from "./components/Notes";
import ContactPage from "./components/Contact/Contact";
import Login from './components/Login/Login'
import Signup from "./components/Signup/Signup";

const LazyHome = React.lazy(() => import('./components/Home'))
const LazyNotes = React.lazy(() => import('./components/Notes'))





export default function App() {
     
    
    return (
        <>
     
        <Routes>
        <Route  path='/' element={<Login/>}  />
        <Route  path='/contact' element={<ContactPage/ >}  />
        <Route path='/home' element={<React.Suspense><LazyHome/></React.Suspense>} />
        <Route path='/signup' element={<Signup/>} />
        <Route  path='/notes' element={<React.Suspense><LazyNotes/></React.Suspense>}>
        <Route  path=':noteID' element={<Notes/ >}  /> 
        </Route>
        </Routes>
       
        </>
    )
}
