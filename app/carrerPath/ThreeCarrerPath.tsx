import customStyles from './page.module.css'
import styles from '../page.module.css'
import Image from 'next/image'


const ThreeCarrerPath = () => {
  return (
    <section>
    <div className={styles.jumbotronContainer}>
            <h2 className={customStyles.title}>Find out your 3 Carrer Paths tailored just for you!</h2>


        <div className={customStyles.threeEl}>
            <div className={customStyles.parent}>
                <Image src="/webdev.png" width="50" height="50" alt='Web developer' className={customStyles.image} />
        
                <span className={customStyles.webDev}>Web Developer</span>
                <p className={customStyles.smallText}>You are matching this carrer by</p>

                <p className={customStyles.percentage}>98%</p>
            </div>

            <div className={customStyles.parent}>
                <Image src="/webdesign.png" width="50" height="50" alt='Web developer' className={customStyles.image} />
        
                <span className={customStyles.webDev}>Web Designer</span>
                <p className={customStyles.smallText}>You are matching this carrer by</p>

                <p className={customStyles.percentage}>98%</p>
            </div>

            <div className={customStyles.parent}>
                <Image src="/media.png" width="50" height="50" alt='Web developer' className={customStyles.image} />
        
                <span className={customStyles.webDev}>Media marketer</span>
                <p className={customStyles.smallText}>You are matching this carrer by</p>
                <p className={customStyles.percentage}>98%</p>
            </div>
        </div>

            <button className={customStyles.btn}>Generate your Carrer Path!</button>
            <a href="#" className={customStyles.link}>Not satisfied with the result? Answer 10 more questions!</a>
    </div>
    </section>
  )
}

export default ThreeCarrerPath