import styles from '../../styles/Home.module.css'
import cocktailController from '../../controllers/cocktail'
import Image from 'next/image'
export default function Home(props) {
  const cocktail = props.cocktail


  return (
    <>
      <div className={styles.container}>
        <h1>{cocktail.title}</h1>
        <p>{cocktail.description}</p>
        <Image src={cocktail.imageUrl} alt="cocktail-image" width="60" height="100"></Image>
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
