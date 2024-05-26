import React, { useEffect, useState } from 'react'
import { getBookingById } from '../Api-Helpers/Api-helpers'

const BookingHistory = (props) => {
    
    const bookingId = props.bookingId;
    const [Booked, setBooked] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookedData = [];
                await Promise.all(bookingId.map(async id => {
                    const result = await getBookingById(id);
                    bookedData.push(result.data.booking);
                }));
                
                setBooked(bookedData);
            } catch (error) {
                console.error('Error fetching booking data:', error);
            }
        };
    
        fetchData();
    }, [bookingId]); 
    
    console.log(Booked);
   
  return (
    

<div class="relative overflow-x-auto p-5 dark:bg-gray-900 pt-4 pb-10">
    <h2 class='text-center text-white text-2xl mb-5'>BOOKING HISTORY</h2>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Date & Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Movie Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Seat Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Total  Price
                </th>
            </tr>
        </thead>
        <tbody>
         
{Booked.map((item)=>{
    return(

  
            
               <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {new Date(item.createdAt).toLocaleString()}
                </th>
                <td class="px-6 py-4">
                    {item.movieName}
                </td>
                <td class="px-6 py-4">
                    {item.seatNumber.map((seat)=>{
                        return(
                            seat+" , "
                        )
                    })}
                </td>
                <td class="px-6 py-4">
                    {item.amount}
                </td>
            </tr>
              )
            })
             }
           
        </tbody>
    </table>
</div>

  )
}

export default BookingHistory