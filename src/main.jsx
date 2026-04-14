import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './styles/index.css'
import App from './App.jsx'
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// createRoot(document.getElementById('root')).render( //
 // <StrictMode>
  //  <App />
 // </StrictMode>,
// )
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
