import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Your search is ${routeParams.query}`
  }, [])

  return (
    <h1>Your search is {routeParams.query}</h1>
  )
}
