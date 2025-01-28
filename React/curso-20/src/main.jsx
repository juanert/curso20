import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Test, Hooks, Movies, Blogs, Blog } from './pages/pages'
import "./resources/css/output.css"
import { ThemeProvider } from './context/themeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/:id" element={<Blog />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
