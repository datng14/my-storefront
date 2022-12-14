import { ProductCollection } from '@/components/ProductCollection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <ProductCollection />
    </div>
    </div>
  )
}
