import styles from "@/scss/pages/blogArticle.module.scss";

import BlogHeader from "@/components/blogComponents/BlogHeader";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";

import Link from "next/link";

import Image from "next/image";
import articleHero from "@/../public/blogImgs/_index/blog_hero_img.png";
import frontend2024 from "@/../public/blogImgs/blogPreviews/frontend_placeholder.png";


export const metadata = {
  title: 'Naucz się IT - Blog o IT',
  description: 'Nazywam się Jakub i zapraszam Cię na mojego bloga poświęconego szerokopojętym zagadnieniom IT',
  alternates: {
    canonical: 'https://jakubwojtysiak.pl/blog-it',
    languages: {
      'pl-PL': 'https://jakubwojtysiak.pl/blog-it',
    }
  }
}

export default function BlogHomePage() {
  return (
    <main className={`${styles.articlePage} ${styles.blogIndexPage}`}>
      <div className={styles.articleContainer}>
        <BlogHeader
          h1="Naucz się <span class='purple'>IT</span>"
          headerImg={articleHero}
          contentsTitle="Cześć, miło mi powitać Cię na moim blogu poświęconym szerokopojętym zagadnieniom IT. Nie zwlekaj i znajdź temat swoich zainteresowań!<br/><br/>Znajdziesz tutaj artykuły oraz kursy z szerokopojetej dziedziny Web Developmentu. Nauczysz się aktualnych i bezpiecznych zasad programowania oraz hostowania aplikacji webowych. Dowiesz się o najnowszych nowinkach ze świata IT.<br/><br/>Przekonaj się na własnej skórze, że IT nie jest nudne oraz nie wymaga zaawansowanych umiejętności matematycznych.<br/><br/>Większość artykułów jest pisana z myślą o początkujących, dlatego niezależnie czy dopiero zaczynasz karierę w IT, czy masz 12 czy 60 lat, razem ze mną będziesz mógł zostać specjalistą IT!"
        />
      </div>
      {/* Kursy IT */}
      <section id="dostepne-kursy" className={styles.articleSection}>
        <div className={styles.sectionDivider}>
          <h2 className={styles.articleContainer}>Kursy IT</h2>
        </div>
        <div className={styles.articleContainer}>
          <div className={`${styles.sectionWithTiles} ${styles.sectionContent} `}>
            <div className={styles.sectionTrack}>
              <CourseTile title="Kurs DevOps" level="Junior - 6 lekcji" icon="iconDevops" url="/blog-it/kurs-devops-dla-juniorow" available />
              <CourseTile title="Kurs JavaScript" level="Junior-Mid" icon="iconJavaScript" url="/blog-it" />
              <CourseTile title="Kurs React" level="Mid" icon="iconReact" url="/blog-it" />
              <CourseTile title="Kurs Next.js" level="Mid" icon="iconNextJs" url="/blog-it" />
              <CourseTile title="Kurs WordPress" level="Mid" icon="iconWordpress" url="/blog-it" />
              <CourseTile title="Kurs Cybersecurity" level="Mid" icon="iconSecurity" url="/blog-it" />
            </div>
          </div>
        </div>
      </section>
      {/* Artykuły */}
      <section id="artykuły" className={styles.articleSection}>
        <div className={styles.sectionDivider}>
          <h2 className={styles.articleContainer}>Najnowsze artykuły</h2>
        </div>
        <div className={`${styles.sectionContent} ${styles.articleContainer} ${styles.latestArticels}`}>
          <div className={styles.left}>
            <ArticleTile
              title="Dlaczego sam Frontend to za mało w 2024 roku?"
              img={frontend2024}
              url="/blog-it"
              content="W dobie dynamicznie rozwijającej się technologii i rosnących oczekiwań użytkowników, sam frontend to już za mało, aby stworzyć kompleksowe i nowoczesne aplikacje internetowe. Rok 2024 przynosi ze sobą nowe wyzwania..."
            />
            <ArticleTile
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
            />
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
      {!available && <span className={styles.badge}>Wkrótce</span>}
      <div className={`${styles.icon} ${styles[icon]}`} />
      {title}
      {level && <span className={styles.courseLevel}>{level}</span>}
    </Link>
  )
}

function ArticleTile({ title, img, url, content }) {
  return (
    <article className={styles.articleTile}>
      <Image src={img} alt={`${title} - Wizualizacja`} width={400} height={400} className={styles.articleImg} />
      <div className={styles.articlePreview}>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <Link href={url} className={styles.articleLink}>Czytaj dalej &rarr;</Link>
      </div>
    </article>
  )
}