import Link from "next/link"
import styles from "../styles/Navbar.module.css";

export default function Component() {

    return (
      <nav className={styles.navbar}>
        <div className={styles.navlink}>
          <Link href={`/`}>View All</Link>
        </div>
        <div className={styles.navlink}>
          <Link href={`/cocktails/new`}>New Cocktail</Link>
        </div>
      </nav>
    )
}

