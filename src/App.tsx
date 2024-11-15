import { ToastContainer } from 'react-toastify'
import { routes } from './router'
import { useRoutes } from 'react-router-dom'



const App = () => {
  const routing = useRoutes(routes)
  return (
    <>
      {routing}
      <ToastContainer/>
    </>
  )
}

export default App