import { Suspense, useEffect, useState } from 'react'
import './App.css'
import SomeApps from './someApps';

function App({data}) {
const [someApps, setSomeApps] = useState([]);

  return (
    <>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
        <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
         {
          data.map((singleApp => <SomeApps key={singleApp.id} singleApp = {singleApp}></SomeApps>))
         }
        </Suspense>
      </div>

    </>
  )
}

export default App
