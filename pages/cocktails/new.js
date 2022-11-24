import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar'

export default function Home() {
  // TODO use the "action" attribute of the html form (you can google it)
  // to send the content of the form to the api/coktails/new.js endpoint
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>Create new cocktail</h1>
        <form action="POST">
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
