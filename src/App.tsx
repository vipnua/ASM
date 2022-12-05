import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route,Routes } from 'react-router-dom';
import Product from './components/Products';
import MainWeb from './layouts/users/main';
import main from './layouts/users/main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainWeb />} >
            <Route index element={<Product />}/>           
        </Route> 
      </Routes>
    </div>
  )
}

export default App
