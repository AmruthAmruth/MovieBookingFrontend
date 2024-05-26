import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {  getBookingByMovieName } from '../Api-Helpers/Api-helpers';

const AdminBookings = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieName = searchParams.get('data');
 

  const [selectedSeat, setSelectedSeat] = useState([])

  const addSeat = (seatNumber) => {
      const foundValue = selectedSeat.find(item => item === seatNumber);    
      if (foundValue !== undefined) {
          // Seat is already selected, so remove it
          setSelectedSeat(prevSeatNumbers => prevSeatNumbers.filter(item => item !== seatNumber));
      }  else {
          // Seat is not selected and not sold, so add it
          setSelectedSeat(prevSeatNumbers => [...prevSeatNumbers, seatNumber]);
      }
  }
  

  const [bookedSeat, setBookedSeat] = useState([])

  useEffect(() => {
      getBookingByMovieName(movieName).then((result) => {
          setBookedSeat(result.data);
         
      })
  }, [])
  
  

  let seatnumbers = [];
  if (bookedSeat && Array.isArray(bookedSeat)) {
      seatnumbers = bookedSeat.map(booking => booking.seatNumber);
  }
      const combinedArray = seatnumbers.flat();
 


  const divs = document.querySelectorAll('.seat');
  const seatvalues = Array.from(divs).map(div => div.textContent);

  const bookedSeats = combinedArray.filter(item => seatvalues.includes(item));
 
//     const soldSeat=bookedSeats.find((item)=>item) 
// console.log(soldSeat);

const soldSeat=(val)=>{
  if(bookedSeats.includes(val)){
      alert("Already Booked")
  }else{
    addSeat(val)
  }
  
}
  const seatStyle = (value) => {
      const seat = selectedSeat.find(item => item === value); // Assuming selectedSeat is defined
      const soldSeat = combinedArray.find(set => set === value); // Assuming bookedSeats is defined
     if(soldSeat){
      return "bg-red-500 p-1.5 cursor-pointer rounded-t-3xl text-center text-black cursor-not-allowed";
     }
    
      if (!seat) {
          return "bg-gray-200 p-1.5 cursor-pointer rounded-t-3xl text-center text-black";
      }  else {
          return "bg-green-600 p-1.5 cursor-pointer rounded-t-3xl text-center text-white";
      }
  };

  

  return (
     <div class='dark:bg-gray-900'>
        <hr />
    <div class="container mx-auto px-4  dark:bg-gray-900 py-10 p-3">
    <h1 class="text-xl font-semibold mb-4 text-white text-center">Select Your Seats For "{movieName}"</h1>
    <div class='justify-center flex'>
        <div class='w-[35rem]'>




            <div class="grid grid-cols-8 gap-4 mt-3">
                <div class={seatStyle('A1') + ' seat'} defaultValue={'A1'} onClick={() =>soldSeat('A1') }>A1</div>
                <div class={seatStyle('A2') + ' seat'} defaultValue={'A2'} onClick={() =>soldSeat('A2') }>A2</div>
                <div class={seatStyle('A3') + ' seat'} defaultValue={'A3'} onClick={() =>soldSeat('A3') }>A3</div>
                <div class={seatStyle('A4') + ' seat'} defaultValue={'A4'} onClick={() =>soldSeat('A4') }>A4</div>
                <div class={seatStyle('A5') + ' seat'} defaultValue={'A5'} onClick={() =>soldSeat('A5') }>A5</div>
                <div class={seatStyle('A6') + ' seat'} defaultValue={'A6'} onClick={() =>soldSeat('A6') }>A6</div>
                <div class={seatStyle('A7') + ' seat'} defaultValue={'A7'} onClick={() =>soldSeat('A7') }>A7</div>
                <div class={seatStyle('A8') + ' seat'} defaultValue={'A8'} onClick={() =>soldSeat('A8') }>A8</div>
            </div>

            <div class="grid grid-cols-8 gap-4 mt-3">
                <div class={seatStyle('B1') + ' seat'} defaultValue={'B1'} onClick={() =>soldSeat('B1') }>B1</div>
                <div class={seatStyle('B2') + ' seat'} defaultValue={'B2'} onClick={() =>soldSeat('B2') }>B2</div>
                <div class={seatStyle('B3') + ' seat'} defaultValue={'B3'} onClick={() =>soldSeat('B3') }>B3</div>
                <div class={seatStyle('B4') + ' seat'} defaultValue={'B4'} onClick={() =>soldSeat('B4') }>B4</div>
                <div class={seatStyle('B5') + ' seat'} defaultValue={'B5'} onClick={() =>soldSeat('B5') }>B5</div>
                <div class={seatStyle('B6') + ' seat'} defaultValue={'B6'} onClick={() =>soldSeat('B6') }>B6</div>
                <div class={seatStyle('B7') + ' seat'} defaultValue={'B7'} onClick={() =>soldSeat('B7') }>B7</div>
                <div class={seatStyle('B8') + ' seat'} defaultValue={'B8'} onClick={() =>soldSeat('B8') }>B8</div>
            </div>
            <div class="grid grid-cols-8 gap-4 mt-3">
                <div class={seatStyle('C1') + ' seat'} defaultValue={'C1'} onClick={() =>soldSeat('C1') }>C1</div>
                <div class={seatStyle('C2') + ' seat'} defaultValue={'C2'} onClick={() =>soldSeat('C2') }>C2</div>
                <div class={seatStyle('C3') + ' seat'} defaultValue={'C3'} onClick={() =>soldSeat('C3') }>C3</div>
                <div class={seatStyle('C4') + ' seat'} defaultValue={'C4'} onClick={() =>soldSeat('C4') }>C4</div>
                <div class={seatStyle('C5') + ' seat'} defaultValue={'C5'} onClick={() =>soldSeat('C5') }>C5</div>
                <div class={seatStyle('C6') + ' seat'} defaultValue={'C6'} onClick={() =>soldSeat('C6') }>C6</div>
                <div class={seatStyle('C7') + ' seat'} defaultValue={'C7'} onClick={() =>soldSeat('C7') }>C7</div>
                <div class={seatStyle('C8') + ' seat'} defaultValue={'C8'} onClick={() =>soldSeat('C8') }>C8</div>
            </div>
            <div class="grid grid-cols-8 gap-4 mt-3">
                <div class={seatStyle('D1') + ' seat'} defaultValue={'D1'} onClick={() =>soldSeat('D1') }>D1</div>
                <div class={seatStyle('D2') + ' seat'} defaultValue={'D2'} onClick={() =>soldSeat('D2') }>D2</div>
                <div class={seatStyle('D3') + ' seat'} defaultValue={'D3'} onClick={() =>soldSeat('D3') }>D3</div>
                <div class={seatStyle('D4') + ' seat'} defaultValue={'D4'} onClick={() =>soldSeat('D4') }>D4</div>
                <div class={seatStyle('D5') + ' seat'} defaultValue={'D5'} onClick={() =>soldSeat('D5') }>D5</div>
                <div class={seatStyle('D6') + ' seat'} defaultValue={'D6'} onClick={() =>soldSeat('D6') }>D6</div>
                <div class={seatStyle('D7') + ' seat'} defaultValue={'D7'} onClick={() =>soldSeat('D7') }>D7</div>
                <div class={seatStyle('D8') + ' seat'} defaultValue={'D8'} onClick={() =>soldSeat('D8') }>D8</div>
            </div>

            <div class="grid grid-cols-8 gap-4 mt-3">
                <div class={seatStyle('E1') + ' seat'} defaultValue={'E1'} onClick={() =>soldSeat('E1') }>E1</div>
                <div class={seatStyle('E2') + ' seat'} defaultValue={'E2'} onClick={() =>soldSeat('E2') }>E2</div>
                <div class={seatStyle('E3') + ' seat'} defaultValue={'E3'} onClick={() =>soldSeat('E3') }>E3</div>
                <div class={seatStyle('E4') + ' seat'} defaultValue={'E4'} onClick={() =>soldSeat('E4') }>E4</div>
                <div class={seatStyle('E5') + ' seat'} defaultValue={'E5'} onClick={() =>soldSeat('E5') }>E5</div>
                <div class={seatStyle('E6') + ' seat'} defaultValue={'E6'} onClick={() =>soldSeat('E6') }>E6</div>
                <div class={seatStyle('E7') + ' seat'} defaultValue={'E7'} onClick={() =>soldSeat('E7') }>E7</div>
                <div class={seatStyle('E8') + ' seat'} defaultValue={'E8'} onClick={() =>soldSeat('E8') }>E8</div>
            </div>

            <div class="grid grid-cols-8 gap-4 mt-3">
                <div class={seatStyle('F1') + ' seat'} defaultValue={'F1'} onClick={() =>soldSeat('F1') }>F1</div>
                <div class={seatStyle('F2') + ' seat'} defaultValue={'F2'} onClick={() =>soldSeat('F2') }>F2</div>
                <div class={seatStyle('F3') + ' seat'} defaultValue={'F3'} onClick={() =>soldSeat('F3') }>F3</div>
                <div class={seatStyle('F4') + ' seat'} defaultValue={'F4'} onClick={() =>soldSeat('F4') }>F4</div>
                <div class={seatStyle('F5') + ' seat'} defaultValue={'F5'} onClick={() =>soldSeat('F5') }>F5</div>
                <div class={seatStyle('F6') + ' seat'} defaultValue={'F6'} onClick={() =>soldSeat('F6') }>F6</div>
                <div class={seatStyle('F7') + ' seat'} defaultValue={'F7'} onClick={() =>soldSeat('F7') }>F7</div>
                <div class={seatStyle('F8') + ' seat'} defaultValue={'F8'} onClick={() =>soldSeat('F8') }>F8</div>
            </div>

            <div class='mt-10'>
                <img src="https://www.josecinemas.com/assets/img/ss.png" alt="" />
            </div>
        </div>
    </div>
    <div class=' text-center'>
        <form action="">
            <button type="button" class="text-gray-900  mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 w-[15rem] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SOLD SEAT : {combinedArray ? combinedArray.length + "  " : ""}</button> <br />
            <button type="button" class="text-gray-900 mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 w-[15rem] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">UNSOLD SEAT : {combinedArray ? 48-combinedArray.length : ""}</button> <br />
           
        </form>

    </div>
    </div>
    </div>

  )
}

export default AdminBookings