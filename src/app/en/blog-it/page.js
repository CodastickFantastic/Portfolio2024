import styles from "@/scss/pages/blogArticle.module.scss";

import BlogHeader from "@/components/blogComponents/BlogHeader";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";

import Link from "next/link";

import Image from "next/image";
import articleHero from "@/../public/blogImgs/_index/blog_hero_img_eng.png";
import awariaMicrosoftu from "@/../public/blogImgs/blogPreviews/awaria_microsoft_eng.png";
import frontend2024 from "@/../public/blogImgs/blogPreviews/frontend_placeholder.png";


export const metadata = {
  title: 'Learn IT Right Now - Blog about IT',
  description: 'My name is Jakub and I invite you to my blog devoted to broadly understood IT issues',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/en/blog-it',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it',
      "en": 'https://jakubwojtysiak.online/en/blog-it'
    }
  }
}

export default function BlogHomePage() {
  return (
    <main className={`${styles.articlePage} ${styles.blogIndexPage}`}>
      <div className={styles.articleContainer}>
        <BlogHeader
          h1="Learn <span class='purple'>IT</span> Right Now"
          headerImg={articleHero}
          contentsTitle="Hi, I am pleased to welcome you to my blog devoted to broadly understood IT issues. Don't hesitate and find the topic of your interests!<br/><br/>Here you will find articles and courses in the broad field of Web Development. You will learn current and safe rules programming and hosting web applications. You will learn about the latest news from the world of IT.<br/><br/>See for yourself that IT is not boring and does not require advanced mathematical skills.<br/><br/>Most The articles are written with beginners in mind, so regardless of whether you are just starting your IT career or are already advanced, you will be able to become an IT specialist with me!"
        />
      </div>
      {/* Kursy IT */}
      <section id="dostepne-kursy" className={styles.articleSection}>
        <div className={styles.sectionDivider}>
          <h2 className={styles.articleContainer}>IT Courses</h2>
        </div>
        <div className={styles.articleContainer}>
          <div className={`${styles.sectionWithTiles} ${styles.sectionContent} `}>
            <div className={styles.sectionTrack}>
              <CourseTile title="DevOps Course" level="Junior - 6 lessons" icon="iconDevops" url="/en/blog-it/devops-course-for-juniors" available />
              <CourseTile title="JavaScript Course" level="Junior-Mid" icon="iconJavaScript" url="/en/blog-it" />
              <CourseTile title="React Course" level="Mid" icon="iconReact" url="/en/blog-it" />
              <CourseTile title="Next.js Course" level="Mid" icon="iconNextJs" url="/en/blog-it" />
              <CourseTile title="WordPress Course" level="Mid" icon="iconWordpress" url="/en/blog-it" />
              <CourseTile title="Cybersecurity Course" level="Mid" icon="iconSecurity" url="/en/blog-it" />
            </div>
          </div>
        </div>
      </section>
      {/* Artykuły */}
      <section id="artykuły" className={styles.articleSection}>
        <div className={styles.sectionDivider}>
          <h2 className={styles.articleContainer}>Latest Articles</h2>
        </div>
        <div className={`${styles.sectionContent} ${styles.articleContainer} ${styles.latestArticels}`}>
          <div className={styles.left}>
            <ArticleTile
              title="Why is Frontend not enough in 2024?"
              img={frontend2024}
              url="/en/blog-it/it-news/why-frontend-is-not-enough-in-2024"
              content="Today's job market requires developers not only to be able to create attractive and functional user interfaces, but also to understand the entire application ecosystem, including Backend, DevOps and Cybersecurity."
            />
            <ArticleTile
              title="Microsoft's great failure - Subjective Opinion"
              img={awariaMicrosoftu}
              url="/en/blog-it/it-news/giant-microsoft-crash-subjective-opinion"
              content="Today (July 19, 2024) there was one of the largest Microsoft server failures in history, which led to the grounding of airports, railways and companies around the world. Can we still trust IT giants?"
            />
            {/* <ArticleTile
              title="Jaki język programowania jest najlepszy w 2024 roku?"
              img={frontend2024}
              url="/blog-it"
              content="W dobie dynamicznie rozwijającej się technologii i rosnących oczekiwań użytkowników, sam frontend to już za mało, aby stworzyć kompleksowe i nowoczesne aplikacje internetowe. Rok 2024 przynosi ze sobą nowe wyzwania..."
            />
            <ArticleTile
              title="Jak zostać programistą w 2024 roku?"
              img={frontend2024}
              url="/blog-it"
              content="W dobie dynamicznie rozwijającej się technologii i rosnących oczekiwań użytkowników, sam frontend to już za mało, aby stworzyć kompleksowe i nowoczesne aplikacje internetowe. Rok 2024 przynosi ze sobą nowe wyzwania..."
            /> */}
          </div>
          <div className={styles.right}>
            <BlogNewsletter />
          </div>
        </div>
      </section>
    </main>
  )
}

function CourseTile({ title, level, icon, available = false, url }) {

  return (
    <Link href={url} className={styles.courseTile}>
      {!available && <span className={styles.badge}>Comming Soon</span>}
      <div className={`${styles.icon} ${styles[icon]}`} />
      {title}
      {level && <span className={styles.courseLevel}>{level}</span>}
    </Link>
  )
}

function ArticleTile({ title, img, url, content }) {
  return (
    <article className={styles.articleTile}>
      <Image src={img} alt={`${title} - Wizualizacja`} width={400} height={200} className={styles.articleImg} />
      <div className={styles.articlePreview}>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <Link href={url} className={styles.articleLink}>Read more &rarr;</Link>
      </div>
    </article>
  )
}