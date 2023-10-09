import './App.css'
import Main from './views/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HandleForm from './views/HandleForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route default path="/authors" element={<Main />} />
          <Route path="/authors/new" element={<HandleForm />} />
          <Route path="/authors/:id/edit" element={<HandleForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
