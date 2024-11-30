import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './app/Landing'
import About from "./app/About"
import Signup from "./app/Signup"
import Signin from './app/Signin'
import Courses from './app/Courses'
import Layout from './layout'

export default function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<Courses />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

