import ColorSection from './ColorSection'
import ProductGrid from './ProductGrid'
import styles from './CategoryPage.module.css'

export default function CategoryPage({ titulo, descripcion, productos, colores }) {
  return (
    <section className={styles.cuerpoVista}>
      <div className={styles.portada}>
        <h2>{titulo}</h2>
        <div className={styles.descripcion}>{descripcion}</div>
      </div>

      {colores && <ColorSection colores={colores} />}

      <ProductGrid products={productos} />
    </section>
  )
}
