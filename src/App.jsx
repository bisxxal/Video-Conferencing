import { useState } from 'react' 
import './App.css'
import Home from './components/Home'
import VideoPage from './components/VideoPage'
import { Route ,Routes, useParams} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/room/:id' element={<VideoPage />} />  
      </Routes>

    </>
  )
}

export default App
