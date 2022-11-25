import styles from '../../styles/Home.module.css'
import cocktailController from '../../controllers/cocktail'
import Navbar from '../../components/navbar'
import Image from 'next/image'

export default function Home(props) {
  const cocktail = props.cocktail

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>{cocktail.title}</h1>
        <p>{cocktail.description}</p>
        <Image src={cocktail.imageUrl ? cocktail.imageUrl :
          'https://res.cloudinary.com/dzvox0kev/image/upload/v1669367008/unsigned-uploads/toytzcvt6g8rp21wtgii.jpg'}
          alt="cocktail image" width={200} height={200}></Image>

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
