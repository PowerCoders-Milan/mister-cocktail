import styles from '../../styles/Home.module.css'
import ImageUpload from '../../components/ImageUpload'
import Navbar from '../../components/navbar'
import { getSession } from 'next-auth/react'

export default function Home(props) {
  return (
    <>
      <Navbar session={props.currentUser} ></Navbar>
      <div className={styles.container}>
        <h1>Create new cocktail</h1>
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
  const currentUser = await getSession(req)

  return {
    props: { currentUser },
  }
}
