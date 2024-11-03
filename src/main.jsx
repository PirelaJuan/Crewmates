import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import Create from './components/Create.jsx';
import Gallery from './components/Gallery.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Routes>
      <Route  path="/" element={<Layout />} >
        <Route index={true} element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
  </Routes>


 </BrowserRouter>
)