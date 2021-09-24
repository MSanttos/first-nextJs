import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Pesquisar..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Sobre nós</a>
      </Link>
      <Link href="/contact">
        <a>Contato</a>
      </Link>
    </nav>
  )
}