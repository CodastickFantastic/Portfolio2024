import styles from '@/scss/components/blogComponents/CodeBlock.module.scss'

export default function CodeBlock({ description, commands }) {

    return (
        <div className={styles.codeBlockSection}>
            {description && <p className={styles.preCodeBlock} dangerouslySetInnerHTML={{ __html: description }} />}
            <code className={styles.codeBlock}>
                {
                    commands.map((command, index) => {
                        return <kbd key={index} className={styles.codeBlockKeyboradInput} dangerouslySetInnerHTML={{ __html: command }} />
                    })
                }
            </code>
        </div>
    )
}