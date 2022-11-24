import styles from '../styles/Home.module.css'
import cocktailController from '../controllers/cocktail'
import userController from '../controllers/user'
import Card from '../components/card'
import { getSession } from "next-auth/react"
import Navbar from '../components/navbar'

export default function Home(props) {
  const users = props.users
  const cocktails = props.cocktails
  console.log(props)
  return (
    <>
      <Navbar session={props.currentUser}></Navbar>
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
  const currentUser = await getSession(req)

  return {
    props: { cocktails, users, currentUser },
  }
}
