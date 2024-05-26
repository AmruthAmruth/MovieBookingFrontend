import React, { useEffect, useState } from 'react'
import { deleteMovie, getAllMovies } from '../Api-Helpers/Api-helpers'
import { useNavigate } from 'react-router-dom'

const AdminHome = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
            getAllMovies().then((result)=>{
                setMovies(result.data.movies);
            })
    },[])
    
const navigate = useNavigate()
    const handleAddMovie =()=>{
            navigate('/addmovie')
    }

    const handleDelete = (id) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this movie?");
      if (userConfirmed) {
        deleteMovie(id).then((result) => {
          console.log(result);
          navigate('/')
        }).catch((error) => {
          console.error("Error deleting movie:", error);
        });
      } else {
        console.log("Movie deletion canceled by user.");
      }
    };

   
    const editMovie=(id)=>{
  console.log(id);
  navigate(`/updatemovie?data=${encodeURIComponent(id)}`);
    }

   const view=(movieName)=>{
    console.log(movieName);
    navigate(`/booking?data=${encodeURIComponent(movieName)}`);
   } 
  
   const viewmore=(movieId)=>{
    
    navigate(`/viewmore?data=${encodeURIComponent(movieId)}`);
   } 
  return (
    <div class=''>
        <div class='bg-gray-800 pt-5 justify-center flex'>
        <button onClick={handleAddMovie} type="button" class=" w-[20rem]  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New Movie</button>
        </div> 
    <div class='flex justify-center pt-5 pb-5 bg-gray-800'>
         
      <div class='flex flex-wrap max-w-7xl  gap-5 justify-around p-3'>
        {movies.map((movi)=>{
            return(

           
<a onClick={()=>viewmore(movi._id)} href="#" class="flex p-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-500 dark:border-white-700 dark:bg-gray-900 dark:hover:bg-gray-700">
    <img class="object-cover  w-full  rounded-t-lg h-96 md:h-full md:w-[15rem] md:rounded-none md:rounded-s-lg" src={movi.posterUrl} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movi.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{movi.description}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Actors: {movi.actors && movi.actors.map((obj)=>{
    return(
      <span>{obj} ,</span>
    )
  })} </p>
        <div class='flex justify-center mt-5'>
        <button onClick={()=>view(movi.title)}  type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Bookings</button>
        <button onClick={()=>editMovie(movi._id)} type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
        <button onClick={()=>handleDelete(movi._id)} type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
        </div>
    </div>
</a>
 )
})}


</div>
    </div>
    </div>
  )
}

export default AdminHome