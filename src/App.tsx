import { routes } from './router'
import { useRoutes } from 'react-router-dom'

import Header from './layout/header'

const App = () => {
  const routing = useRoutes(routes)
  return (
    <>
      <Header/>
      {routing}
    </>
  )
}

export default App