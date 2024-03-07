import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './components/Router'
import Page404 from './pages/404'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: ({ routeParams }) => <h1>Your search is {routeParams.query}</h1>
  }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
