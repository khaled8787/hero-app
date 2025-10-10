import { Suspense,} from 'react'
import './App.css'
import SomeApps from './someApps';

function App({data}) {


  return (
    <>
      
      <Suspense fallback = {<span className="loading loading-dots loading-4xl"></span>}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
        <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
         {
          data.map((singleApp => <SomeApps key={singleApp.id} singleApp = {singleApp}></SomeApps>))
         }
        </Suspense>
      </div>
      </Suspense>

    </>
  )
}

export default App
