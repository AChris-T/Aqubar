import { Route, Routes } from "react-router-dom"
import LandingPageLayout from "./Pages/LandingPage/LandingPageLayout"
import EventPage from "./Pages/EventPage/EventPage"

function App() {
  return (
    <Routes>
    <Route path="/">
      <Route index element={<LandingPageLayout/>}/>
      <Route path='events' element={<EventPage/>}/>
    </Route>
   </Routes>
  )
}

export default App
