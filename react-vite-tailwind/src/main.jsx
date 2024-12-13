import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TailwindCSS from './components/TailwindCSS/TailwindCSS.jsx'
import Api from './components/API/Api.jsx'
import News from './components/News/News.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewsDetail from './components/News/NewsDetail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tailwindcss" element={<TailwindCSS />} />
      <Route path="/api" element={<Api />} />
      <Route path="/news" element={<News />} />
      <Route path="/newsdetails" element={<NewsDetail />} />
    </Routes>
  </BrowserRouter>,
)
