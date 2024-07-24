import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import articleHero from "@/../public/blogImgs/blogPreviews/awaria_microsoft_eng.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";

export const metadata = {
  title: 'The Great Microsoft Failure. Can IT giants still be trusted? A subjective opinion.',
  description: 'Giant Microsoft failure. Airports are canceling flights, Sky News is down, bank problems...',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/it-news/giant-microsoft-crash-subjective-opinion',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/nowosci-ze-swiata-it/gigantyczna-awaria-microsoftu-subkietywna-opinia',
      "en": 'https://jakubwojtysiak.online/en/blog-it/it-news/giant-microsoft-crash-subjective-opinion',
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        hardCodedPreviousPage={"/en/blog-it"}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="The Great Failure of <span class='purple'>Microsoft</span>.<br />Can IT giants still be trusted? A subjective opinion."
            articleInfo={{ time: "5 minutes", specialization: "IT News" }}
            headerImg={articleHero}
            contentsTitle="Article Overview"
            contents={[
              { text: "What happened on July 19, 2024?", url: "#what-happened-today" },
              { text: "What are the causes of the great Microsoft failure?", url: "#causes-of-the-great-Microsoft-crash" },
              { text: "Can IT giants still be trusted?", url: "#can-it-giants-still-be-trusted" }
            ]}
            style={{ marginBottom: 32 }}
          />
        </div>
        {/* Co się stało 19.07.2024? */}
        <section id="what-happened-today" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>What happened on July 19, 2024?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Microsoft's Big Crash</h3>
            <p className={styles.sectionContentText}>Today, the largest failure of Microsoft websites and services in history occurred. The failure is so serious that it affected many critical infrastructure centers. In theory, a failure of the <strong className="purple">Microsoft 365</strong> service may seem trivial at first glance, but reality, as usual, has verified the solutions currently used in the IT sector. Numerous integrations with this service have led to global "armageddon". The whole world literally stopped...</p>
            <h3 className={styles.sectionContentHeader}>Who suffered from the failure?</h3>
            <p className={styles.sectionContentText}>The failure mainly caused the most problems for companies from the TLS (Transport Spedition Logistic) industry. Airports using Microsoft's services were forced to suspend flights. The seriousness of the situation is best illustrated by the example of <strong className="purple">Frontier Airlines</strong>, which, due to the failure, was forced to cancel or delay as much as 30 percent of its flights today!<br /><br />Among the victims Today's failure also affected supermarkets located in <strong className="purple">Australia and Greater Britain</strong>, which, as a result of the failure, could not properly serve their customers. Store systems simply refused to obey.<br /><br />One of the (least expected) victims of the failure was also the British station <strong className="purple">Sky News</strong>, which was forced to stop broadcasting its broadcast.<br /><br />The above-mentioned examples are only a drop in the scale of the failure. There are definitely more victims and their number is constantly increasing. <strong className="purple">British Railways and the US emergency number - 991 (SICK!)</strong>were also affected. Our domestic companies were also hit, e.g. <strong className="purple">Baltic Hub</strong>.</p>
            <ArticleImportantInfo
              type="how"
              title="Main victims"
              listContent="<ul><li>Airports around the world</li><li>Railways in the UK</li><li>Supermarkets in the UK and Australia</li><li>Sky News</li ><li>Banks</li><li>Microsoft 365 users</li><li>Azure users</li></ul>"
            />
          </div>
        </section>
        {/* Przyczyny wielkiej awarii Microsoftu */}
        <section id="causes-of-the-great-Microsoft-crash" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Causes of the great Microsoft failure</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>What are the main causes of Microsoft's great failure?</h3>
            <p className={styles.sectionContentText}>At this moment, we do not yet know the reasons that caused today's failure. From Microsoft's official announcements, we can only learn that the whole matter is currently being thoroughly investigated. Behind the scenes you can hear rumors about hacker attacks, which is not really surprising. I emphasize once again that these are only rumors and we must wait for Microsoft's official position on this topic.</p>
            <h3 className={styles.sectionContentHeader}>Update</h3>
            <p className={styles.sectionContentText}>According to the spokesman of <strong className="purple">Microsoft Polska</strong>, after investigating the incident, it turned out that the failure occurred as a result of 2 parallel errors. The first one was an error related to the Azure cloud. The second error was related to a failure in the update of CrowdStrike's Falcon program for Windows systems. There was no hacker attack!!!</p>
          </div>
        </section>
        {/* Przyczyny wielkiej awarii Microsoftu */}
        <section id="can-it-giants-still-be-trusted" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Can IT giants still be trusted?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Can IT giants still be trusted? Subjective Thoughts</h3>
            <p className={styles.sectionContentText}>After today's incident, many of you are probably asking yourself, "Can IT giants still be trusted?", since even such a large corporation as Microsoft does not guarantee 100% system efficiency of its services. There is one answer to this question...<br /><br />We should definitely continue to trust large IT corporations, they employ thousands of highly specialized specialists who make every effort to ensure that the services they guarantee meet the highest possible standards. . However, importantly, we should not base our entire IT infrastructure only on the services of one provider. Diversification is the basis for guaranteeing the security of our services. As the old Polish proverb says, "Don't put all your eggs in one basket."</p>
          </div>
        </section>
      </article>
    </main >
  )
}