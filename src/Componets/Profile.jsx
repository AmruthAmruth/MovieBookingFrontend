import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import {  deleteAccount, userGetById } from '../Api-Helpers/Api-helpers';
import BookingHistory from './BookingHistory';
const Profile = () => {
    const navigate = useNavigate()

    const userId = Cookies.get('userId');
    const [user, setUser] = useState([])
    const [bookingId,setBookingId]=useState([])
    useEffect(() => {
        if (userId) {
            userGetById(userId)
                .then((result) => {
                    setUser(result.user);
                    setBookingId(result.user.bookings)      
                })
        } 
    }, []);

   
   console.log(userId);
   
   
    const updateProfilebutton = (id) => {
        console.log(id);
        navigate(`/updateprofile?data=${encodeURIComponent(id)}`);
    }

    const deleteAccountButton = () => {
        deleteAccount(userId).then((result) => {
            console.log(result);
            Cookies.remove('userId')
            navigate('/')
        })
    }




    return (
        <div>
            <div class='justify-center flex pt-10 pb-10 dark:bg-gray-900'>
                <div className="relative m-2 pt-10 w-full  max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/004.webp"
                            alt="Bonnie image"
                        />
                        <h5 className="mb-1 text-xl uppercase font-medium text-gray-900 dark:text-white">
                            {user ? user.name : ""}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Email : {user ? user.email : ""}
                        </span>
                        <span className="text-sm  text-gray-500 dark:text-gray-400">
                            Phone :  {user ? user.phone : ""}
                        </span>
                        <div className="flex mt-4 md:mt-6">
                            <a
                                onClick={() => updateProfilebutton(user ? user._id : "")}
                                href=""
                                className="py-2 text-center px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Update Profile

                            </a>

                            <a
                                onClick={deleteAccountButton}
                                href="#"
                                className="py-2 text-center px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Delete Account
                            </a>
                        </div>
                    </div>
                </div>





            </div>


            <BookingHistory bookingId={bookingId}/>

        </div>
    )
}

export default Profile
