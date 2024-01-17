import styles from '@/scss/components/TimeLineTile.module.scss';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

const TimeLineTile = ({ icon, title, date, description, info }: {
    icon: StaticImageData,
    title: string,
    date: string,
    description: string[],
    info: string

}): React.JSX.Element => {

    return (
        <div className={styles.timeLineTile}>
            <div className={styles.left}>
                <Image src={icon} alt={title} />
            </div>
            <div className={styles.right}>
                <p className={styles.date}>{date}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.info}>{info}</p>
                <ul>
                    {description.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default TimeLineTile;