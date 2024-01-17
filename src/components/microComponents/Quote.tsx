import styles from '@/scss/components/Quote.module.scss';

const Quote = ({ quote, author, width }: { quote: string, author: string, width: number }): React.JSX.Element => {
    return (
        <div className={styles.quote} style={{ width: width }}>
            <p className={styles.quote__text}>{quote}</p>
            <p className={styles.quote__author}>{author}</p>
        </div>
    )
};

export default Quote;