import Image from "next/image";
import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Component({cocktail}) {

  return (
    <Link href={`/cocktails/${cocktail.id}`}>
      <div className={styles.card}>
        <h3>{cocktail.title}</h3>
        <p>{cocktail.description}</p>
        <Image src={cocktail.imageUrl} alt="cocktail-image" width="60" height="100"></Image>
      </div>
    </Link>
  )
}

