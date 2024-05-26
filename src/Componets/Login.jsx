import React,{ useState }   from 'react'
import { userLogin } from '../Api-Helpers/Api-helpers';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const Login = () => {
    const navigate=useNavigate()
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState("");
const { enqueueSnackbar } = useSnackbar();

const handleSubmit =  (e) => {
    e.preventDefault();
    userLogin(email,password).then((result)=>{
         if (result.existingUser && result.existingUser._id) {
              enqueueSnackbar('Login Successful.!',{variant:"success"});
             Cookies.set('userId', result.existingUser._id, { expires: 7 });
             console.log("Login");
            navigate('/');
         } else {
            enqueueSnackbar('No user found',{variant:"error"});
            
        }
    })
   
};

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900 h-screen  justify-center align-middle flex">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen w-full max-w-7xl lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          MOVIE TIME    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
              
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} 
                       type="email"  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} 
                       type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button onClick={handleSubmit}
                   type="submit" class="w-full border-solid bg-gray-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login
