import customStyle from './page.module.css'
import styles from '../page.module.css'
import Heading from "@/components/heading/heading";
import ThreeCarrerPath from './ThreeCarrerPath';


export default function carrerPath() {


  return (
    
    <div className={customStyle.main}>
      <section className={styles.jumbotronContainer}>
        <Heading className={customStyle.header}>Paljasta urapolkusi!</Heading>

        <p className={customStyle.text}>By analyzing your answers, Urapolku AI found you have the following qualities which fit 3 dynamic careers:</p>


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

      <ThreeCarrerPath />
    </div>

    
  )
}

