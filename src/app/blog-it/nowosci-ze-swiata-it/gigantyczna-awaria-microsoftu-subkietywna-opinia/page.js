import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Image from "next/image";
import articleHero from "@/../public/blogImgs/blogPreviews/awaria_microsoft.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'Wielka Awaria Microsoftu. Czy gigantom IT nadal można ufać? Subkietywna opinia.',
  description: 'Gigantyczna awaria Microsoft. Lotniska odwołują loty, stacja Sky News nie działa, problemy w bankach...',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/blog-it/nowosci-ze-swiata-it/gigantyczna-awaria-microsoftu-subkietywna-opinia',
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
        hardCodedPreviousPage={"/blog-it"}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Wielka Awaria <span class='purple'>Microsoftu</span>.<br/>Czy gigantom IT nadal można ufać? Subkietywna opinia."
            articleInfo={{ time: "5 minut", specialization: "Nowości IT" }}
            headerImg={articleHero}
            contentsTitle="Przegląd artykułu"
            contents={[
              { text: "Co się stało 19.07.2024?", url: "#co-sie-dzis-stalo" },
              { text: "Jakie są przyczyny wielkiej awarii Microsoftu?", url: "#przyczyny-wielkiej-awarii-microsoftu" },
              { text: "Czy gigantom IT nadal można ufać?", url: "#czy-gigantom-it-nadal-mozna-ufac" }
            ]}
            style={{ marginBottom: 32 }}
          />
        </div>
        {/* Co się stało 19.07.2024? */}
        <section id="co-sie-dzis-stalo" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Co się stało 19.07.2024?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Wielka Awaria Microsoftu</h3>
            <p className={styles.sectionContentText}>Dzisiaj doszło do największej w dziejach historii awari serwrisów i usług firmy Microsoft. Awaria jest o tyle poważna, że dotknęła wiele ośrodków infrastruktury krytycznej. W teorii awaria usługi <strong className="purple">Microsoft 365</strong> na peirwszy rzut oka może wydawać się błaha, jednakże rzeczywistość jak zwykle zweryfikowała samemu obecnie stosowane rozwiązania w sektorze IT. Liczne integracje z niniejszą usługą doprowadziły do globalnego "armagedonu". Cały świat dosłownie stanął w miejscu...</p>
            <h3 className={styles.sectionContentHeader}>Kto ucierpaił na awarii?</h3>
            <p className={styles.sectionContentText}>Awaria w głównej mierze przysporzyła najwięcej problemów firmom z branży TLS (Transport Spedition Logistic). Porty lotnicze korzystające z usług Microsoftu zostały zmuszone do wstrzymania kursowania samolotów. Powagę sytuacji najlepiej obrazuje przykład linii lotniczych <strong className="purple">Frontier Airlines</strong>, które na skótek awarii zostały zmuszone do odwołania, bądź opóźnienia aż 30 procent swoich dzisiejszych lotów!<br /><br />Wśród ofiar dzisiejszej awarii znalazły się również supermarkety zlokalizowane w <strong className="purple">Australii i Wielkiej Byrtanii</strong>, które na skutek awarii nie mogły w poprawny sposób obsłógiwać swoich klientów. Systemy sklepowe po prostu odmówiły posłuszeńśtwa.<br /><br />Jedną z (najmniej oczekiwanych) ofiar awarii stała się również brytyjska stacja <strong className="purple">Sky News</strong>, która została zmuszona do zaprzestania nadawania swoich audycji.<br /><br />Wyżej wspomniane przykłądy sa tylko kroplą w ocenia awarii. Ofiar jest zdecydowanie więcej i ciągle ich przybywa. Poszkodowane zostały również <strong className="purple">Brytyjskie Koleje oraz numer alarmowy USA - 991 (SICK!)</strong>. Naszym rodzimym firmom również się oberwało, np. <strong className="purple">Baltic Hub</strong>.</p>
            <ArticleImportantInfo
              type="how"
              title="Główni poszkodowani"
              listContent="<ul><li>Lotniska na całym świecie</li><li>Koleje w Wielkiej Brytanii</li><li>Supermarkety w Wielkiej Brytanii i Australii</li><li>Stacja Sky News</li><li>Banki</li><li>Użytkownicy Microsoft 365</li><li>Użytkownicy Azure</li></ul>"
            />
          </div>
        </section>
        {/* Przyczyny wielkiej awarii Microsoftu */}
        <section id="przyczyny-wielkiej-awarii-microsoftu" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Przyczyny wielkiej awarii Microsoftu</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Jakie są główne przyczyny wielkiej awarii Microsoftu?</h3>
            <p className={styles.sectionContentText}>Na ten moment nie znamy jeszcze przyczyn które wywowały dzisiejszą awarię. Z oficjalnych komunikatów Microsoftu dowiedzieć możemy się tylko, że cała sprawa jest aktualnie szegółowo badana. W kuluarach można usłyszeć plotki o atakach hakerskich, co by w gruncie rzeczy nie było niczym zaskakującym. Podkreślam raz jeszcze, że są to tylko plotki i pozostaje nam czekać na oficjalne stanowisko firmy Microsoft w tym temacie.</p>
            <h3 className={styles.sectionContentHeader}>Aktualizacja</h3>
            <p className={styles.sectionContentText}>Zgodnie ze stanowiskiem rzecznika firmy<strong className="purple">Microsoft Polska</strong> po zbadaniu zdarzenia okazało się, że awaria wystąpiła na skutek 2 równoległych błędów. Pierwszym z nich był błąd związany z chmurą Azure. Drugi błąd natomaist związany był z awarią w aktualizacji programu Falcon firmy CrowdStrike dla systemów Windows. Żadnego ataku hakerskiego nie było!!!</p>
          </div>
        </section>
        {/* Przyczyny wielkiej awarii Microsoftu */}
        <section id="czy-gigantom-it-nadal-mozna-ufac" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Czy gigantom IT nadal można ufać?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Czy gigantom IT nadal może ufać? Subiektywne Przemyślenia</h3>
            <p className={styles.sectionContentText}>Zapewne wielu z was po dzisiejszym incydencie zadaje sobie pytanie, "Czy gigantom IT nadal można ufać?", skoro nawet tak wielka korporacja, jaką jest Microsoft nie gwarantuje 100% sprawności systemowej swoich usług. Odpowiedź na to pytanie jest jedna...<br /><br />Jak najbardziej powinniśmy mieć w dalszym ciągu zaufanie do dużych korporacji IT, pracują w nich tysiące wysoce wyspecjalizowanych specjalistów którzy dopinają wszelkich starań aby gwarantowane przez nich usługi spełniały jak najwyższe normy. Jednakże co ważne, nie powinniśmy opierać całej naszej infrastrukutry informatycznej tylko na usługach jednego providera. Dywersyfikacja jest podstawą gwarancji bezpieczeństwa naszych usług. Jak mawia stare polskie przysłowie "Nie pakuj wszystkich jajek do jednego koszyka".</p>
          </div>
        </section>
      </article>
    </main >
  )
}