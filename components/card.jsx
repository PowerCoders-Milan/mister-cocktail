import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Component({cocktail}) {

  return (

    <div className={styles.card}>
      <Link href={`/cocktails/${cocktail.id}`}>
        <h3>{cocktail.title}</h3>
        <p>{cocktail.description}</p>
      </Link>
    </div>
  )
}

