import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/coursesPresentation/lesson_101.png";
import roadMapImg from "@/../public/blogImgs/coursesPresentation/devOps_roadmap.png";


export const metadata = {
  title: 'Kurs DevOps dla Juniorów - Czyli od 0 do DevOps w kilku krokach',
  description: 'Postaw pierwsze kroki w DevOps i dowiedz się jak samodzielnie hostować aplikacje na VPS.',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow',
      "en": "https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors"
    }
  }
}

export default function KursDevOpsDlaJuniorow() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator nextLesson={{ title: "Lekcja 1", url: "/blog-it/kurs-devops-dla-juniorow/jak-bezpiecznie-skonfigurowac-moj-pierwszy-serwer-vps" }} />
      <article>
        <div className={styles.articleContainer}>
          {/* Spis Treści + Hero */}
          <ArticleHeader
            h1="Kurs <span class='purple'>DevOps</span> dla Juniorów<br/>"
            underTitle="Czyli od 0 do DevOps w kilku krokach"
            articleInfo={{ time: "Spiesz się powoli", specialization: "DevOps", level: "Junior - Mid" }}
            headerImg={articleHero}
            contentsTitle="Podstawy Hostowania na Własnym Serwerze VPS"
            contents={[
              { text: "Bezpieczna konfiguracja serwera VPS ", url: "/blog-it/kurs-devops-dla-juniorow/jak-bezpiecznie-skonfigurowac-moj-pierwszy-serwer-vps", icon: "pageIcon" },
              { text: "Dokeryzacja Aplikacji - Podstawy Docker’a", url: "/blog-it/kurs-devops-dla-juniorow/dokeryzacja-aplikacji-podstawy-dockera", icon: "pageIcon" },
              { text: "Składowanie Obrazu - Github Container Registry", url: "/blog-it/kurs-devops-dla-juniorow", icon: "pageIcon", notAvailable: true },
              { text: "Docker Compose - Podstawy YAML’a", url: "/blog-it/kurs-devops-dla-juniorow", icon: "pageIcon", notAvailable: true },
              { text: "Pokaż Aplikację Światu - Traefik Reverse Proxy", url: "/blog-it/kurs-devops-dla-juniorow", icon: "pageIcon", notAvailable: true },
              { text: "CI/CD Docker x GithubActions", url: "/blog-it/kurs-devops-dla-juniorow", icon: "pageIcon", notAvailable: true }
            ]}
          />
        </div>
        {/* Kurs - Dla Kogo?*/}
        <section id="dla-kogo-kurs-devops" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Kurs DevOps dla Zielonych, czy jest on dla mnie?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <p className={styles.sectionContentText} style={{ marginTop: 24 }}>Kurs DevOps dla juniórw jest wszystkim czego potrzebujesz aby rozpocząć swoją przygodę z własnym hostowaniem aplikacji Webowych. Jest on idealnym rozwiązanie dla osób, które dopiero zaczynają swoją przygodę z DevOpsem i chcą zdobyć podstawową prkatyczną wiedzę w tej dziedzinie.<br /><br /> Dzięki temu kursowi nauczysz się, jak skutecznie hostować aplikacje Webowe na swoim własnym serwerze. Bez względu na to, czy jesteś początkującym programistą, administratorem systemów czy osobą zainteresowaną technologią, kurs DevOps dostarczy Ci niezbędnych narzędzi i wiedzy, aby zacząć karierę w tej ekscytującej dziedzinie.
            </p>
            <div className={styles.forWhoSection}>
              <ForWhoTile
                icon="studentIcon"
                title="Studenci Informatyki"
                subTitle="Technikum, Studia"
                content="Jeśli Twój kierunek jest powiązany z Frontendem, Backendem, DevOps, to na pewno Bedziesz kiedyś potrzebował dokonać samodzielnego Deploymentu aplikacji."
              />
              <ForWhoTile
                icon="adminIcon"
                title="System Admin"
                subTitle="Junior - Mid"
                content="Zaczynasz swoją przygodę z Linuxem? Może już znasz się odrobinę na DevOps’ie? Niezależnie od Twojego poziomu umiejętności możesz sprawdzić mój podstawowy sposób Deploymentu aplikacji."
              />
              <ForWhoTile
                icon="programmerIcon"
                title="Programista"
                subTitle="Mid - Senior"
                content="Jak programista aplikacji webowych nie zawsze będziesz mógł pozwolić sobie na profesjonalne usługi DevOps. Przekonaj się że samodzielny hosting stron jest prosty."
              />
            </div>
            <RoadMapSection
              title="Masz niedosyt informacji o DevOps?"
              content="Jeśli powyższe materiały zaczęły wzbudzać w Twojej głowie coraz więcej wartościowych pytań na temat pracy i działania zespołów DevOps, to gorąco zachęcam Cię do samodzielnego pogłębiania wiedzy.<br/><br/>Sprawdź stronę roadmap.sh gdzie znajdziesz dedykowaną RoadMapę w której krok po kroku będziesz mógł dowiedzieć się jakich umiejętności wymaga się od dzisiejszych inżynierów DevOps"
              img={roadMapImg}
              imgAlt="Devops Roadmap - roadmap.sh"
              imgSrc="Zródło: https://roadmap.sh/devops"
              url="https://roadmap.sh/devops"
            />

          </div>
        </section>
      </article>
    </main>
  )
}

function ForWhoTile({ icon, title, subTitle, content }) {

  return (
    <div className={styles.forWhoTile}>
      <div className={styles.forWhoHeader}>
        <div className={`${styles.icon} ${styles[icon]}`} />
        <div className={styles.title}>
          <p className={styles.mainTitle}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  )
}

function RoadMapSection({ title, content, img, imgAlt, imgSrc, url }) {

  return (
    <div className={styles.roadmapSection}>
      <div className={styles.contentSection}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        <Link href={url} className={styles.roadmapLink} target="_blank">Przejdź do mapy <span className={`${styles.icon} ${styles.arrow}`} /></Link>
      </div>
      <div className={styles.imageSection}>
        <Image src={img} alt={imgAlt} />
        <p className={styles.imgSrc}>{imgSrc}</p>
      </div>
    </div>
  )
}