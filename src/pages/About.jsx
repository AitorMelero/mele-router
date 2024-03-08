import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: '¡Hola! Esto es un clone de React Router',
    button: 'Ir a la home'
  },
  en: {
    title: 'About us',
    description: 'Hi! This is a React Router clone',
    button: 'Go Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/' >{i18n.button}</Link>
    </>
  )
}
