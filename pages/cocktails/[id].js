import styles from '../../styles/Home.module.css'
import cocktailController from '../../controllers/cocktail'
import Navbar from '../../components/navbar'

export default function Home(props) {
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
  const { id } = req.query
  const cocktail = await cocktailController.find(id)
  return {
    props: { cocktail },
  }
}
