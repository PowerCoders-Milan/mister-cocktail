import Link from "next/link"
import styles from "../styles/Navbar.module.css";

export default function Component() {
    // fix the routes so that they send to the correct path
    return (
      <nav className={styles.navbar}>
        <div className={styles.navlink}>
          <Link href={``}>View All</Link>
        </div>
        <div className={styles.navlink}>
          <Link href={``}>New Cocktail</Link>
        </div>
      </nav>
    )
}

