import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


const App = () => {

  return (
    <div className='container'>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App