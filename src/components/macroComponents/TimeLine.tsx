import styles from '@/scss/components/History.module.scss';

import TimeLineTile from '../microComponents/TimeLineTile';

import master from '@/../public/img/icons/master.png';

const TimeLine = (): React.JSX.Element => {
    return (
        <section id="time-line" className={styles.timeLine}>
            <h2 >Time Line</h2>
            <p>Ważne daty w <span className='purple'>mojej</span> karierze</p>

            <TimeLineTile
                icon={master}
                date="Styczeń 2019"
                title="Otwarcie Działalności Gospodarczej"
                info="Pierwotny Model Działalności"
                description={["Automatyzacja i Otymalizacja Procesów", "Usługi Finansowe i Ubezpieczeniowe", "HR oraz Zarządzanie", "Szkolenia"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={master}
                date="Styczeń 2019"
                title="Otwarcie Działalności Gospodarczej"
                info="Pierwotny Model Działalności"
                description={["Automatyzacja i Otymalizacja Procesów", "Usługi Finansowe i Ubezpieczeniowe", "HR oraz Zarządzanie", "Szkolenia"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={master}
                date="Styczeń 2019"
                title="Otwarcie Działalności Gospodarczej"
                info="Pierwotny Model Działalności"
                description={["Automatyzacja i Otymalizacja Procesów", "Usługi Finansowe i Ubezpieczeniowe", "HR oraz Zarządzanie", "Szkolenia"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={master}
                date="Styczeń 2019"
                title="Otwarcie Działalności Gospodarczej"
                info="Pierwotny Model Działalności"
                description={["Automatyzacja i Otymalizacja Procesów", "Usługi Finansowe i Ubezpieczeniowe", "HR oraz Zarządzanie", "Szkolenia"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={master}
                date="Styczeń 2019"
                title="Otwarcie Działalności Gospodarczej"
                info="Pierwotny Model Działalności"
                description={["Automatyzacja i Otymalizacja Procesów", "Usługi Finansowe i Ubezpieczeniowe", "HR oraz Zarządzanie", "Szkolenia"]}
            />
            <div className={styles.vl} />
            <TimeLineTile
                icon={master}
                date="Styczeń 2019"
                title="Otwarcie Działalności Gospodarczej"
                info="Pierwotny Model Działalności"
                description={["Automatyzacja i Otymalizacja Procesów", "Usługi Finansowe i Ubezpieczeniowe", "HR oraz Zarządzanie", "Szkolenia"]}
            />
        </section>
    )
};

export default TimeLine;