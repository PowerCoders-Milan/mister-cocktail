import styles from '../styles/Home.module.css'
import cocktailController from '../controllers/cocktail'
import userController from '../controllers/user'
import Navbar from '../components/navbar'
import Card from '../components/card'

export default function Home(props) {
  const users = props.users
  const cocktails = props.cocktails

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>List of cocktails</h1>
        {cocktails.map(cocktail => (<Card cocktail={cocktail} key={cocktail.id}></Card>))}
        <h2>List of Users</h2>
        {users.map(user => (<p key={user.id}>{user.firstName}</p>))}
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const users = await userController.all()
  const cocktails = await cocktailController.all()
  return {
    props: { cocktails, users },
  }
}
