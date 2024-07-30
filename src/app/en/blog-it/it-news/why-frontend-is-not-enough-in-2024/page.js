import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import articleHero from "@/../public/blogImgs/blogPreviews/frontend_placeholder.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'Why frontend in not enough in 2024?',
  description: "Today's job market requires developers not only to be able to create attractive and functional user interfaces, but also to understand the entire application ecosystem, including Backend, DevOps and Cybersecurity.",
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it/it-news/why-frontend-is-not-enough-in-2024',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/nowosci-ze-swiata-it/dlaczego-sam-frontend-to-za-malo-w-2024-roku',
      "en": 'https://jakubwojtysiak.online/en/blog-it/it-news/why-frontend-is-not-enough-in-2024',
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
            h1="Why <span class='purple'>Frontend</span>.<br/> is not enough in <span class='purple'>2024</span>?"
            articleInfo={{ time: "10 minutes", specialization: "IT news" }}
            headerImg={articleHero}
            contentsTitle="Article Overview"
            contents={[
              { text: "Introduction", url: "#introduction" },
              { text: "Increase the complexity of web applications", url: "#development-of-web-applications" },
              { text: "Integration with the backend", url: "#backend-integration" },
              { text: "Application security", url: "#application-security" },
              { text: "Labor market requirements", url: "#labour-market-requirements" },
              { text: "Soft skills", url: "#soft-skills" },
            ]}
            style={{ marginBottom: 32 }}
          />
        </div>
        {/* Is it worth learning Frontend in 2024? */}
        <section id="introduction" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Is it worth learning Frontend in 2024?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Frontend - A few words of introduction...</h3>
            <p className={styles.sectionContentText}>In the rapidly evolving world of information technology, developer skill requirements are evolving at a dizzying pace. Just a few years ago, knowledge of HTML, CSS and JavaScript could have been enough to build a solid career as a front-end developer. <br /><br />However, in 2024, Frontend alone may no longer be sufficient. Employers expect more comprehensive competencies from programmers, covering Backend, DevOps, Cybersecurity and other key areas. <br /><br />In this article we will try to understand why learning only Frontend in 2024 may not be enough.</p>
            <ArticleImportantInfo
              type="how"
              title="What is Frontend?"
              content='Frontend is the part of the application that the user sees and interacts with. It includes all the elements that are displayed on the screen and with which the user interacts, such as buttons, forms, texts, images and navigation. The main technologies used to create frontends are HTML, CSS and JavaScript. It has become standard to use frameworks such as React, Angular or Vue to build interfaces.<br/><br/> It is also worth noting at this stage that Frontend also includes activities aimed at optimizing performance. , responsiveness, or adapting the application to people with various disabilities (a11y) and using different languages ​​(i16n).'
            />
          </div>
        </section>
        {/* Evolution of Web Frameworks */}
        <section id="development-of-web-applications" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Increase in complexity of web applications</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Evolution of Web Frameworks <br />NextJS, Laravel, Hydrogen and other SPAs...</h3>
            <p className={styles.sectionContentText}>From year to year, web applications become more and more complex and interactive, requiring more and more extensive technical knowledge from programmers. A great example is the recently very popular Fullstack frameworks such as Next.js, Remix or Laravel. With their help, we are able to not only write Frontend but also effectively add Backend code in a quick and simple way. There is no need to maintain two applications separately, and the boundaries between Front and Back are very blurred.<br /><br />The creators of large frameworks have significantly reduced the threshold for learning the Backend. In the example of NextJS, there is no need to create your own Routing in Express, you only need to create one appropriate file so that we can enjoy, for example, a full-fledged API path. Moreover, at this point we are still sticking to one programming language, which is JavaScript, with the help of which we can easily handle applications effectively.<br /><br />Still staying within the scope of SPA applications, it is worth noting that Frontend programmers, due to additional responsibilities began to fall on the specificity of building these applications. To create an SPA, a programmer must not only know front-end technologies, but also how to communicate with the server, manage application states, authorization and many other back-end aspects.</p>
            <h3 className={styles.sectionContentHeader}>Use of new technologies</h3>
            <p className={styles.sectionContentText}>From year to year, technology evolves and requires us to adapt to the new environment. Today's professional Frontend developers should also be familiar with containerization technologies, due to its widespread use throughout the CI/CD chain. Basic knowledge of Docker technology may be necessary, for example to run the development environment.</p>
          </div>
        </section>
        {/* Backend integration */}
        <section id="backend-integration" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Backend Integration</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>REST API and GraphQL</h3>
            <p className={styles.sectionContentText}>Modern web applications often communicate with the server using REST API or GraphQL. Knowledge of these technologies is necessary to be able to download, transmit and manage data effectively. Developers must understand how HTTP works, how to handle API authorization and authentication, and how to manage errors and exceptions.</p>
            <h3 className={styles.sectionContentHeader}>Data handling and state management</h3>
            <p className={styles.sectionContentText}>Modern applications must deal with large amounts of data, which often need to be dynamically synchronized between different parts of the application. Tools such as Redux, MobX and Vuex help manage application state, but require developers to have a deep understanding of application architecture and programming best practices.<br /><br /> Moreover, nowadays there is an increasing move away from "local" application state management on for storing this data in cookies. For many applications, this approach significantly improves their security. For Frontend developers, this is another common element with the Backend.</p>
          </div>
        </section>
        {/* Application Security */}
        <section id="application-security" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Application Security</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Cybersecurity is the basis in 2024.</h3>
            <p className={styles.sectionContentText}>Web application security is one of the most important aspects of programming in 2024 that developers must pay attention to. Frontend alone is not enough to ensure complete application security. Frontend developers must be familiar with security best practices, such as protection against XSS, CSRF and SQL Injection attacks.</p>
            <h3 className={styles.sectionContentHeader}>OWASP Top 10</h3>
            <p className={styles.sectionContentText}>OWASP Top 10 is a list of the most common security threats, such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) and SQL Injection. Developers need to be aware of these threats and how to defend against them. Lack of knowledge of such basic practices can lead to many dangerous situations, especially since some attacks can be excluded by properly written frontend code.</p>
            <h3 className={styles.sectionContentHeader}>Authorization and authentication</h3>
            <p className={styles.sectionContentText}>Managing user identity, authorization and authentication are key elements of modern applications. Developers must know protocols such as OAuth, JWT and SAML and be able to implement them in their applications. Of course, the Backend is mainly responsible for implementing these solutions, but Frontend developers also need to know how to safely store critical data so that potential attackers do not have access to them.</p>
          </div>
        </section>
        {/* Labor Market Requirements */}
        <section id="labour-market-requirements" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Labor market requirements</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Full-Stack Development</h3>
            <p className={styles.sectionContentText}>In 2024, employers are increasingly looking for full-stack developers who can work on both frontend and backend. Full-stack developers can understand and manage the entire application lifecycle, which makes them extremely valuable to companies.</p>
            <h3 className={styles.sectionContentHeader}>DevOps and CI/CD</h3>
            <p className={styles.sectionContentText}>DevOps and Continuous Integration/Continuous Deployment (CI/CD) practices have become the standard in the IT industry. Developers must know tools such as Docker, Kubernetes, Jenkins, GitLab CI/CD and be able to integrate them in their projects. This enables automatic testing, building and deployment of applications, which shortens the time to introduce new features and improves software quality.</p>
            <h3 className={styles.sectionContentHeader}>Cloud computing</h3>
            <p className={styles.sectionContentText}>Knowledge of cloud services such as AWS, Azure or Google Cloud Platform is increasingly desirable. Developers need to be able to create, configure, and manage cloud resources to scale their applications effectively and manage them more flexibly and cost-effectively.</p>
            <h3 className={styles.sectionContentHeader}>Integrations</h3>
            <p className={styles.sectionContentText}>The use of increasingly new solutions requires the use of appropriate integrators. The free market follows its own laws and requires us to know many twin technologies. It is not only necessary to skillfully code the application interface, but also to properly integrate it with the data source.</p>
            <h3 className={styles.sectionContentHeader}>Monitoring and logging</h3>
            <p className={styles.sectionContentText}>Efficient monitoring and logging are key aspects of keeping your application in production. Developers must know tools such as Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana) and be able to integrate them in their applications to quickly diagnose and solve problems.</p>
            <h3 className={styles.sectionContentHeader}>Analytics and performance optimization</h3>
            <p className={styles.sectionContentText}>Tools such as Google Lighthouse and Web Vitals help analyze the performance of web applications and identify areas requiring optimization. Developers must be able to interpret the results of these tools and implement appropriate fixes to ensure that applications run smoothly. In addition, it is also necessary to know tools such as Google Search Console or Google Analitics in order to properly implement SEO solutions.</p>
          </div>
        </section>
        {/* Labor Market Requirements */}
        <section id="soft-skills" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Soft skills</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Team communication and collaboration</h3>
            <p className={styles.sectionContentText}>The modern labor market requires developers not only technical skills, but also soft skills such as communication, teamwork, time management and adaptability. Developers must be able to communicate effectively with other team members, customers, and project stakeholders.</p>
            <h3 className={styles.sectionContentHeader}>Remote work and agile methodologies</h3>
            <p className={styles.sectionContentText}>Remote work has become the norm in many companies, and agile work methodologies such as Scrum and Kanban are widely used. Programmers must be flexible and able to adapt to changing conditions, as well as be able to work in a remote team, organize their work and communicate effectively online.</p>
            <h3 className={styles.sectionContentHeader}>Participation in community and industry events</h3>
            <p className={styles.sectionContentText}>Participation in the programming community, conferences, workshops and meet-ups is crucial for continuous development. Thanks to this, developers can exchange experiences, learn from others, establish contacts and stay up to date with the latest trends and best practices in the industry.</p>
            <h3 className={styles.sectionContentHeader}>Presentation and argumentation skills</h3>
            <p className={styles.sectionContentText}>Developers often need to present their ideas and solutions to other team members, customers, or project stakeholders. Presentation and argumentation skills are crucial to effectively communicate your ideas and convince others of their value.</p>
          </div>
        </section>
        <section id="summary" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Summary</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <p className={styles.sectionContentText}>In 2024, Frontend alone is definitely not enough to succeed in the IT industry. Labor market requirements are increasing, and developers must have a wide range of skills, including Backend, DevOps, security, analytics, soft skills, and continuous improvement and learning new technologies. Understanding and mastering all these aspects will allow programmers to create more complex, secure and efficient applications, as well as better adapt to the needs of modern employers. To meet the demands of the labor market in 2024, programmers must be versatile, flexible and ready for continuous development.</p>
          </div>
        </section>
      </article>
    </main >
  )
}