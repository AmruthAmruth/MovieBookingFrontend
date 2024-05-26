import React, { useEffect, useState } from 'react'
import { editMovies, getBookingById, getMovieById } from '../Api-Helpers/Api-helpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const AdminEditMovie = () => {
  const [title, setTitle] = useState("");
  const [playTime, setPlayTime] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [director, setDirector] = useState('');
  const [production, setProduction] = useState([]);
  const [actors, setActors] = useState([]);
  const [posterUrl, setPosterUrl] = useState("");
  const [movie, setMovie] = useState("");
const navigate=useNavigate()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('data');
  
  useEffect(()=>{
   getMovieById(id).then((result)=>{
    setMovie(result.movie);
  })
},[])


    const handleProduction = (e) => {
      const inputArray = e.target.value.split(',').map(item => item.trim());
      setProduction(inputArray);
    };
    const handleActors = (e) => {
      const inputArray = e.target.value.split(',').map(item => item.trim());
      setActors(inputArray);

    };

    const handleSubmit = () => {
      editMovies(id,title,playTime,description,releaseDate,director,production,actors,posterUrl).then((result)=>{
        console.log(result);
        enqueueSnackbar('Login Successful.!',{variant:"success"});
        navigate('/')
      })
    };


  return (
    <div class='dark:bg-gray-800 pt-5 pb-10'>
       <h2 class='text-center text-white text-2xl pb-5'>Edit The Movie</h2>

<form class="max-w-md mx-auto dark:bg-gray-900 p-8 rounded-3xl border-gray-200 border ">
    <div class="relative z-0 w-full mb-5 groupborder-gray-200">
        <input defaultValue={movie ? movie.title :""}
                      onChange={(e)=>setMovie(e.target.value)} type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Movie Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input defaultValue={movie ? movie.playTime :""}
                      onChange={(e)=>setPlayTime(e.target.value)}  type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Play Time</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input defaultValue={movie ? movie.description :""}
                      onChange={(e)=>setDescription(e.target.value)}  type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input defaultValue={movie ? movie.releaseDate :""}
                      onChange={(e)=>setReleaseDate(e.target.value)}  type="date"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Release Date</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input defaultValue={movie ? movie.director :""}
                      onChange={(e)=>setDirector(e.target.value)}   type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Director</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input onChange={handleProduction}
        defaultValue={movie ? movie.production :""} type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Production</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input onChange={handleActors}
         defaultValue={movie ? movie.actors :""}  type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Actors</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" defaultValue={movie ? movie.posterUrl :""} onChange={(e)=>setPosterUrl(e.target.value)}  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PosterUrl</label>
    </div>
    <div class="flex justify-center">
  <button onClick={handleSubmit} type="submit" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div></form>

        </div>
  )
}

export default AdminEditMovie