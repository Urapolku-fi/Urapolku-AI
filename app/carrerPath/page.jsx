import customStyle from './page.module.css'
import styles from '../page.module.css'
import Heading from "@/components/heading/heading";


export default function carrerPath() {


  return (
    
    <div className={styles.main}>
      <section className={styles.jumbotronContainer}>
        <Heading className={customStyle.header}>Paljasta urapolkusi!</Heading>

        <p>By analyzing your answers, Urapolku AI found you have the following qualities which fit 3 dynamic careers:</p>


      {/* Circle progress bars */}

      <div className={customStyle.elements}>
        <div className={customStyle.center}>
        <div className={customStyle.circle}>
        </div>
          <p>Comunicative</p>
        </div>

        <div className={customStyle.center}>
        <div className={customStyle.circle}>
        </div>
          <p>Comunicative</p>
        </div>

        <div className={customStyle.center}>
        <div className={customStyle.circle}>
        </div>
          <p>Comunicative</p>
        </div>

        <div className={customStyle.center}>
        <div className={customStyle.circle}>
        </div>
          <p>Comunicative</p>
        </div>

        <div className={customStyle.center}>
        <div className={customStyle.circle}>
        </div>
          <p>Comunicative</p>
        </div>
        </div>

      </section>
    </div>

    
  )
}

