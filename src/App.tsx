import { useState } from 'react'
import '/src/App.css';
import './index.css';
import LoginForm from './components/LoginForm.js';


const App: React.FC = () => {


  return (
    <>
      {/* <div className="grid items-center justify-center h-screen">
        <div className="grid grid-cols-1 items-center justify-center gap-2">
          <div><h1 className="text-2xl">Manage your own digital photo gallery. Upload. Describe. Filter.</h1></div>
          <div className="justify-self-center"><button className="bg-black text-white cursor-pointer px-16 py-2 rounded-full">Explore</button></div>
        </div>

      </div> */}

      <div className=" w-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen">
       <div className='image-container'></div>
       <div className='login-form-container'>
         <LoginForm />
       </div>
      </div>

    </>
  )
}

export default App;

