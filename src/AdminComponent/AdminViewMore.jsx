import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteMovie, getMovieById } from '../Api-Helpers/Api-helpers';

const AdminViewMore = () => {
  


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('data');
const [movi, setMovi] = useState([])
console.log(id);
useEffect(()=>{
         getMovieById(id).then((result)=>{
          console.log(result.movie);
          setMovi(result.movie)
         })
},[])
const releaseDate = movi ? new Date(movi.releaseDate).toLocaleDateString() : "";

const navigate=useNavigate()

const bookingsmovie=(movieName)=>{
  navigate(`/booking?data=${encodeURIComponent(movieName)}`);
}
const editmovies=(movieId)=>{
  navigate(`/updatemovie?data=${encodeURIComponent(movieId)}`);
}

const deletemovies = (id) => {
  const userConfirmed = window.confirm("Are you sure you want to delete this movie?");
  if (userConfirmed) {
    deleteMovie(id).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error("Error deleting movie:", error);
    });
  } else {
    console.log("Movie deletion canceled by user.");
  }
};

  return (
    <div>
        <div class='w-full  dark:bg-gray-800  mx-auto'>
    <div class=' justify-center align-middle items-center flex pt-10 pb-10 ' >
      
<a href="#" class="flex p-2  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
    <img class="object-cover rounded-3xl h-[30rem] w-96    md:w-auto " src={movi ? movi.posterUrl :""} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="m text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movi ? movi.title:""}e</h5>
       <div class='flex gap-2 mt-2 mb-3'>
        <button class='text-white bg-red-600 px-5 py-1  rounded-2xl'>{movi ? movi.playTime : ""}</button>
       
        </div> 
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{movi ? movi.description : ""}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{releaseDate}</p>
       
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Director: {movi ? movi.director : ""}</p>
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  Production: {movi && movi.production ? movi.production.map((obj, index) => (
    <span key={index}>{obj}, </span>
  )) : ""}
</p>


<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Actors: {movi.actors &&movi.actors.map((obj)=>{
    return(
      <span>{obj} ,</span>
    )
  })} </p>
     
        <div class='flex justify-center mt-5'>
        <button onClick={()=>bookingsmovie(movi.title)} type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bookings</button>
        <button onClick={()=>editmovies(movi._id)} type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
        <button onClick={()=>deletemovies(movi._id)} type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
        </div>
    </div>
</a>

    </div>
    </div>
    </div>
  )
}

export default AdminViewMore