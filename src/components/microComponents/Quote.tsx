import styles from '@/scss/components/Quote.module.scss';

const Quote = ({ quote, author }: { quote: string, author: string, }): React.JSX.Element => {
    return (
        <div className={styles.quote}>
            <p className={styles.quote__text}>{quote}</p>
            <p className={styles.quote__author}>{author}</p>
        </div>
    )
};

export default Quote;