import axios from 'axios'
import Cookies from 'js-cookie'

const baseUrl='https://moviebooking-o6it.onrender.com'

export const userLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}/user/login`, {
            email,
            password
        }).then((response) => {
            resolve(response.data); // Resolve with the data from the response
        }).catch((error) => {
            reject(error); // Reject with the error if the request fails
        });
    });
};

export const userSignup = (name, phone, email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}/user`, {
            name,
            phone,
            email,
            password
        }).then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}



export const adminLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}//admin/login`, {
            email,
            password
        }).then((response) => {
            resolve(response.data); // Resolve with the data from the response
        }).catch((error) => {
            reject(error); // Reject with the error if the request fails
        });
    });
};

export const userUpdateProfile = (id, name, phone, email, password) => {
    return new Promise((resolve, reject) => {
        axios.put(`${baseUrl}/user/${id}`, {
            name,
            phone,
            email,
            password
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};



export const userGetById = (userId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/user/${userId}`)
            .then((result) => {
                resolve(result.data);
            })
            .catch((err) => reject(err));
    });
};


export const deleteAccount = (userId) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${baseUrl}/user/${userId}`).then((response) => {
            resolve(response.data)
        })
    })
}

export const changePassword = (id, oldPassword, newPassword) => {
    return new Promise((resolve, reject) => {
        axios.put(`${baseUrl}/user/changepassword/${id}`, {
            oldPassword,
            newPassword
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error); // Forwarding error to the caller
            });
    });
}



export const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/movie`).then((response) => {
            resolve(response)
        }).catch((err) => console.log("GetAllMovie" + err))
    })
}

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/movie/${id}`).then((response) => {
            resolve(response.data)
        })
    })
}


export const getBookingById = (bookingId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/booking/${bookingId}`)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


export const createBooking = (userId,seatNumber,amount,movieName,options) => {
  return new Promise((resolve,reject)=>{
    axios.post(`${baseUrl}/booking`,{
        userId,
        seatNumber,
        amount,
        movieName,
        options
    }).then((result)=>{
     resolve(result);
    })
  })
}

export const verifyPayment=(razorpay_payment_id,razorpay_order_id,razorpay_signature)=>{
    return new Promise((resolve,reject)=>{
        axios.post(`${baseUrl}/booking/validate`,{
                   razorpay_payment_id,
                    razorpay_order_id,
                    razorpay_signature
        }).then((response)=>{
            resolve(response.data)
        })
    })
}


export const getBookingByMovieName=(movieName)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${baseUrl}/booking/movie/${movieName}`).then((response)=>{
            resolve(response.data)
        })
    })
}


export const addMovie=(title,playTime,description,releaseDate,director,production,actors,posterUrl)=>{
    return new Promise((resolve,reject)=>{
        axios.post(`${baseUrl}/movie`,{
                title,
                playTime,
                description,
                releaseDate,
                director,
                production,
                actors,
                posterUrl
        },{
            headers:{
            Authorization: `Bearer ${Cookies.get('adminId')}`
            }
        }).then((response)=>{
            resolve(response)
        })
        
    }).catch(err=>console.log(err))
}


export const deleteMovie=(id)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(`${baseUrl}/movie/${id}`).then((response)=>
        {
            resolve(response.data)
        })
    })
}


export const editMovies=(id,title,playTime,description,releaseDate,director,production,actors,posterUrl)=>{
    return new Promise((resolve,reject)=>{
        axios.put(`${baseUrl}/movie/${id}`,{
            id,title,playTime,description,releaseDate,director,production,actors,posterUrl
        }).then((resposne)=>{
            resolve(resposne.data)
        })
    
    })
}


export const getAllUsers=()=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${baseUrl}/user`).then((response)=>{
            resolve(response.data)
        })
    })
}