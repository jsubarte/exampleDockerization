import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTest } from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTest />
  </React.StrictMode>,
)
