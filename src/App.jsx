import { lazy, Suspense } from 'react'

import './App.css'
// import HomePage from './pages/Home'
// import AboutPage from './pages/About' // static import
import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Router } from './components/Router'
import { Route } from './components/Route'

const LazyAboutPage = lazy(() => import('./pages/About.jsx')) // lazy import
const LazyHomePage = lazy(() => import('./pages/Home.jsx')) // lazy import

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
