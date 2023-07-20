import React from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import { Home,Createpost } from './Components';
import {logo} from './assets';

export default function App() {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]" >
     <Link to={'/'} >
      <img className="w-28 object-contain" src={logo} alt='logo'/>
     </Link>
     <Link to={'/createPost'} className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md ' >
Create Post
      </Link>
    </header>
    <main className="w-full sm:p-8 px-4 py-8  bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createPost" element={<Createpost/>}/>
        
      </Routes>
      </main>
    </BrowserRouter>
  )
}
