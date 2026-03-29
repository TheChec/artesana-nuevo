import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.piedepagina}>
      <div className={styles.contenidofooter}>
        <h2 className={styles.footertitle}>ARTESANA</h2>
        <div className={styles.linea} />
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://wa.link/76fgft" target="_blank" rel="noreferrer">
              <img className={styles.iconoEnlace} src="/assets/icono-whatsapp.png" alt="WhatsApp" loading="lazy" decoding="async" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/artesana.mcbo?igsh=NDFnMzkzM21vdTk0"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.iconoEnlace} src="/assets/icono-instagram.png" alt="Instagram" loading="lazy" decoding="async" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
