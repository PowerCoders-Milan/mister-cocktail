import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'
import ImageUpload from '../../components/ImageUpload'

export default function Home({error}) {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>Create new cocktail</h1>
        {error ? <h2 className={styles.error}>{error}</h2> : <></>}
        <form action="/api/cocktails/new" method='POST'>
          <label htmlFor="title">Cocktail name:</label><br />
          <input type="text" id="title" name="title" /><br />
          <label htmlFor="description">Recipe:</label><br />
          <input type="text" id="description" name="description" /><br /><br />
          <ImageUpload></ImageUpload>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const error = req.query.error
  return {
    props: { error: error || null },
  }
}
