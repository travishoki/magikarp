import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { HomePage } from './pages/HomePage/HomePage'
import { SplashPage } from './pages/SplashPage/SplashPage'
import { VisionBoardPage } from './pages/VisionBoardPage/VisionBoardPage'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision-board" element={<VisionBoardPage />} />
        <Route path="/splash" element={<SplashPage />} />
      </Routes>
    </BrowserRouter>
  )
}
