import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import { signIn, signOut } from "next-auth/react"

export default function Navbar(props) {
  const session = props.session

    return (
      <nav className={styles.navbar}>
        <div className={styles.navlink}>
          <Link href={`/`}>View All</Link>
        </div>
        <div className={styles.navlink}>
          <Link href={`/cocktails/new`}>New Cocktail</Link>
        </div>
        <div className={styles.navlink}>
          {session ? <button onClick={() => signOut()}>Sign out</button> : <button onClick={() => signIn()}>Sign in</button>}
        </div>
      </nav>
    )
}
