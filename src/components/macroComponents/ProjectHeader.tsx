import styles from '@/scss/components/ProjectHeader.module.scss';

import Image from 'next/image';
import ok from '@/../public/img/icons/ok.png';
import clock from '@/../public/img/icons/clock.png';
import techImg from '@/../public/img/icons/technologies.png';

const ProjectHeader = ({
    title, info, bullets, technologies, time
}: {
    title: string
    info: string
    bullets: string[]
    technologies: string
    time: string
}
): JSX.Element => {

    return (
        <div className={styles.projectHeader}>
            <h1>{title}</h1>
            <p className={styles.underTitle}>{info}</p>
            <ul className={styles.bulletPoints}>
                {bullets.map((bullet, index) => {
                    return <li key={index}><Image src={ok} alt="Ikona ptaszka" /> {bullet}</li>
                })}
            </ul>

            <p className={styles.infoSectionHeader}>Informacje Ogólne</p>
            <p className={styles.addInfo}><Image src={techImg} alt="Ikona technologii" />Technologia: {technologies}</p>
            <p className={styles.addInfo}><Image src={clock} alt="Ikona zegarka" />Czas Realizacji: {time}</p>
        </div>
    )
};

export default ProjectHeader;