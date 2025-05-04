import { useState } from 'react'

import './App.css'
import NAVBAR from './components/NAVBAR'
import MANAGER from './components/MANAGER'
import FOOTER from './components/FOOTER'
import ABOUT from './components/ABOUT'

function App() {
  const [page, setPage] = useState("home");
  

  return (
    <>
     <NAVBAR setPage={setPage} />
      <div>
        {page === "home" && <MANAGER />}
        {page === "about" && <ABOUT />}
      </div>
      <FOOTER />
      
    </>
  )
}

export default App
