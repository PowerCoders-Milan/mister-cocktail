import styles from '../../styles/Home.module.css'
import cocktailController from '../../controllers/cocktail'
import Navbar from '../../components/navbar'

export default function Home(props) {
  // you can get the cocktail from the props
  const cocktail = props.cocktail


  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>{cocktail.title}</h1>
        <p>{cocktail.description}</p>
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  // TODO get the id from the request query

  // find the cocktail with the id
  const cocktail = await cocktailController.find(id)
  return {
    // return the cocktail to the component
    props: {  },
  }
}
