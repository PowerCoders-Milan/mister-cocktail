import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Component({cocktail}) {

  return (
    <Link href={`/cocktails/${cocktail.id}`}>
      <div className={styles.card}>
        <h3>{cocktail.title}</h3>
        <p>{cocktail.description}</p>
      </div>
    </Link>
  )
}

