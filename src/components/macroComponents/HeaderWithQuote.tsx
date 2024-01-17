
import Image from 'next/image';
import styles from '@/scss/components/HeaderWithQuote.module.scss';
import Quote from '../microComponents/Quote';
import Link from 'next/link';

import Github from '@/../public/img/icons/github.png';
import Linkedin from '@/../public/img/icons/linkedIn.png';

const HeaderWithQuote = (): React.JSX.Element => {
    return (
        <section className={styles.header}>
            <h1>Witaj, jetem <span className="purple">Jakub</span></h1>
            <p className={styles.paragraph}>
                JavaScript <span className='purple'>Developer</span></p>
            <p className={styles.paragraph}>
                Programowanie jest moją <span className='purple'>pasją</span>, czymś co sprawia mi niezwykłą frajdę i satysfakcję.</p>
            <Quote
                quote={`"Większość programistów programuje nie dlatego, że spodziewają się zapłaty lub uwielbienia tłumów, ale dlatego, że programowanie jest dla nich zabawą."`}
                author="Linus Torvalds"
                width={430}
            />
            <div className={styles.buttons}>
                <a href="#process" className='button active'>Jak wygląda współpraca</a>
                <a href="#technologies" className='button'>Technologie</a>
            </div>
            <div className={styles.buttons}>
                <a href="#time-line" className='button'>Time Line</a>
                <Link href="https://github.com/CodastickFantastic" className='button' target='_blank'>
                    <Image src={Github} alt="Github" />
                </Link>
                <Link href="#" className='button'>
                    <Image src={Linkedin} alt="Linkedin" />
                </Link>
            </div>
        </section>
    )
};

export default HeaderWithQuote;