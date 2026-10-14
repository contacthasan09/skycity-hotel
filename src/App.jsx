import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Dining from './pages/Dining'
import RoomService from './pages/RoomService'
import Wellness from './pages/Wellness'
import Meetings from './pages/Meetings'
import Offers from './pages/Offers'
import Gallery from './pages/Gallery'
import Location from './pages/Location'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/room-service" element={<RoomService />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}