import React from "react";
import { useEffect, useState } from "react";
import Loading from './Loading';
import Tours from './Tours';
import './index.css';

const url='https://www.course-api.com/react-tours-project';


function App(){
    const [loading, setLoading]=useState(false);
    const[tours,setTours]=useState([]);
    const removeTour= (id)=>{
        const newTours=tours.filter((tour)=>tour.id !==id);
        setTours(newTours);
    }

    const fetchTours=async()=>{
        try {
            setLoading(false);
            const response=await fetch(url);
            const tours=await response.json();
            console.log(tours);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchTours();
    },[])
    if(loading)
    {
        return 
        (
            <h2> <Loading></Loading></h2>
        )
    }
    if(tours.length===0){
        return(
            <main >
                <div className="title">
                    <h2>No Tours Left</h2>
                    <button className="btn" onClick={()=>{fetchTours()}}>Refresh</button>
                </div>
            </main>
        )
    }
    return(
    <h2><Tours tours={tours} removeTour={removeTour}></Tours></h2>
    )

}
export default App;