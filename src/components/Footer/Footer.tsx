import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.rights}>
            Created by <a href="https://batalshikov.com" target='_blank' rel='noreferrer'>Dima Batalshikov</a>
        </div>
    </footer>
  )
}

export default Footer
