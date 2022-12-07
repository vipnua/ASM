import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import Product from './components/admin/Products';
import MainWeb from './layouts/users/main';
import MainAdmin from './layouts/admin/main';
import UpdateProduct from './components/admin/UpdateProduct';
import Signin from './layouts/auth/signin';
import Signup from './layouts/auth/signup';
import PrivateLayout from './layouts/privateLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route path='signin' element={<Signin />}> </Route>
      <Route path='signup' element={<Signup />}></Route>
        <Route path='/' element={<MainWeb />} >
            <Route index element={<Product />}/>           
        </Route> 
        <Route path='/admin' element={<PrivateLayout><MainAdmin /></PrivateLayout>} >
            <Route index element={<Product />}/>      
            <Route path='' element={<Product />} />
            <Route path='product/edit/:id' element={<UpdateProduct />} />
        </Route> 
      </Routes>
    </div>
  )
}

export default App
