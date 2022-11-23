import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>Create new cocktail</h1>
        <form action="/api/cocktails/new">
          <label htmlFor="title">Cocktail name:</label><br />
          <input type="text" id="title" name="title" /><br />
          <label htmlFor="description">Recipe:</label><br />
          <input type="text" id="description" name="description" /><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}
