"use client"

import Image from 'next/image';
import styles from '@/scss/components/HeaderWithQuote.module.scss';
import Quote from '../microComponents/Quote';
import Link from 'next/link';

import Github from '@/../public/img/icons/github.png';
import Linkedin from '@/../public/img/icons/linkedIn.png';
import { determineLanguage } from '@/helpers/translations';

const HeaderWithQuote = (): React.JSX.Element => {
    const languages = determineLanguage()
    return (
        <section className={styles.header}>
            <h1 dangerouslySetInnerHTML={{ __html: languages === 'pl' ? 'Witaj, jestem <span class="purple">Jakub</span>' : 'Hello, I am <span class="purple">Jakub</span>' }} />
            <p className={styles.paragraph}>
                JavaScript <span className='purple'>Developer</span></p>
            <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: languages === 'pl' ? "Programowanie jest moją <span className='purple'>pasją</span>, czymś co sprawia mi niezwykłą frajdę i satysfakcję." : "Programming is my <span className='purple'>passion</span>, something that gives me great fun and satisfaction." }} />
            <Quote
                quote={`${languages === 'pl' ? 'Większość programistów programuje nie dlatego, że spodziewają się zapłaty lub uwielbienia tłumów, ale dlatego, że programowanie jest dla nich zabawą.' : 'Most programmers code not because they expect to be paid or admired by crowds, but because programming is fun for them.'}`}
                author="Linus Torvalds"
            />
            <div className={styles.buttons}>
                <a href="#process" className='button active'>{languages === 'pl' ? 'Opis Współpracy' : 'Know my workflow'}</a>
                <a href="#technologies" className='button'>{languages === 'pl' ? 'Technologie' : 'Technologies'}</a>
            </div>
            <div className={styles.buttons}>
                <a href="#time-line" className='button'>Time Line</a>
                <Link href="https://github.com/CodastickFantastic" className='button' target='_blank'>
                    <Image src={Github} alt="Github" />
                </Link>
                <Link href="https://www.linkedin.com/in/jakub-wojtysiak-6a16912b0/" target='_blank' className='button'>
                    <Image src={Linkedin} alt="Linkedin" />
                </Link>
            </div>
        </section>
    )
};

export default HeaderWithQuote;