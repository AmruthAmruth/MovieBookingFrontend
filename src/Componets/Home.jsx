import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../Api-Helpers/Api-helpers'
import { useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'

const Home = () => {
  const [movie, setMovie] = useState([])
  useEffect(()=>{
      getAllMovies().then((result)=>{
            console.log(result.data.movies);
            setMovie(result.data.movies)
           
      })
  },[])
  const navigate = useNavigate();
  const bookticket=(id)=>{
console.log(id);
navigate(`/viewmore?data=${encodeURIComponent(id)}`);
  }
  return (
    <div class='flex flex-wrap w-full justify-center   dark:bg-gray-900 pt-10 pb-10'>
  
  {movie.map((movi)=>{
    return(

      <div class="relative border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-10 grid m-3 h-[35rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 hover:scale-105 transition-transform duration-300">
      <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-contain bg-clip-border bg-center text-gray-700 shadow-none
      
      " style={{ backgroundImage: `url(${movi.posterUrl})` }}>
        <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div class="relative p-6 px-6 py-14 md:px-12">
        <h2 class="mb-6 block uppercase font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          {movi.title}
        </h2>
        <a
        onClick={()=>bookticket(movi._id)}
        href='#' class="block mb-4 px-5 py-2 rounded-3xl bg-red-700 text-white cursor-pointer font-mono text-xl antialiased font-semibold leading-snug tracking-normal ">
         Book Ticket
        </a>
        <img alt="Tania Andrew"
          src={movi.posterUrl}
          class="relative inline-block h-[130px] w-[70px] !rounded-full border-2 border-white object-cover object-center" />
      </div>
    </div>
    )
  })
    
}



    </div>
  )
}

export default Home
