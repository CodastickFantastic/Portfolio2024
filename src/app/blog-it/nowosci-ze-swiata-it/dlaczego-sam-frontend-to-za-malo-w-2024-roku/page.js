import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import articleHero from "@/../public/blogImgs/blogPreviews/frontend_placeholder.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'Dlaczego sam frontend to za mało w 2024 roku?',
  description: 'Dzisiejszy rynek pracy wymaga od programistów nie tylko umiejętności tworzenia atrakcyjnych i funkcjonalnych interfejsów użytkownika, ale również zrozumienia całego ekosystemu aplikacji, w tym Backend-u, DevOps oraz Cybersecurity.',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/blog-it/nowosci-ze-swiata-it/dlaczego-sam-frontend-to-za-malo-w-2024-roku',
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
        hardCodedPreviousPage={"/blog-it"}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Dlaczego sam <span class='purple'>Frontend</span>.<br/> to za mało w <span class='purple'>2024</span> roku?"
            articleInfo={{ time: "10 minut", specialization: "Nowości z IT" }}
            headerImg={articleHero}
            contentsTitle="Przegląd artykułu"
            contents={[
              { text: "Wprowadzenie", url: "#wprowadzenie" },
              { text: "Wzrost złożoności aplikacji webowych", url: "#rozwój-aplikacji-webowych" },
              { text: "Integracja z backendem", url: "#integracja-z-backendem" },
              { text: "Bezpieczeństwo aplikacji", url: "#bezpieczenstwo-aplikacji" },
              { text: "Wymagania rynku pracy", url: "#wymagania-rynku-pracy" },
              { text: "Umiejętności miękkie", url: "#umiejetnosci-miekkie" },
            ]}
            style={{ marginBottom: 32 }}
          />
        </div>
        {/* Czy warto uczyć się Frontendu w 2024 roku? */}
        <section id="wprowadzenie" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Czy warto uczyć się Frontendu w 2024 roku?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Frontend - Kilka słów wstępu...</h3>
            <p className={styles.sectionContentText}>W dynamicznie rozwijającym się świecie technologii informacyjnych, wymagania dotyczące umiejętności programistów ewoluują w zawrotnym tempie. Jeszcze kilka lat temu znajomość HTML, CSS i JavaScript mogła wystarczyć, aby zbudować solidną karierę jako frontend developer. <br /><br />Jednakże w 2024 roku sam Frontend może okazać się już niewystarczający. Pracodawcy oczekują od programistów bardziej wszechstronnych kompetencji, obejmujących zarówno Backend, DevOps, Cybersecurity, jak i inne kluczowe obszary. <br /><br />W tym artykule postaramy się zrozumieć, dlaczego nauka tylko samego Frontendu w 2024 roku może okazać się niewystarczająca.</p>
            <ArticleImportantInfo
              type="how"
              title="Czym jest Frontend?"
              content="Frontend to część aplikacji, którą widzi i z której interaktywnie korzysta użytkownik. Obejmuje wszystkie elementy, które są wyświetlane na ekranie i z którymi użytkownik wchodzi w interakcje, takie jak przyciski, formularze, teksty, obrazy i nawigacja. Głównymi technologiami używanymi do tworzenia frontendów są HTML, CSS i JavaScript. Standarem stało się aby do budowy interfejsów używać frameworków takich jak React, Angular, czy Vue.<br/><br/> Warto również na tym etapie zaznaczyć, że Frontend obejmuje również działania mające na celu optymalizację wydajności, responsywności, czy dostosowanie aplikacji dla osób z różnymi dysfunkjcami (a11y) oraz korzystające z różnych języków (i16n)."
            />
          </div>
        </section>
        {/* Ewolucja Frameworków Webowych */}
        <section id="rozwój-aplikacji-webowych" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Wzrost złożoności aplikacji webowych</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Ewolucja Frameworków Webowych <br />NextJS, Laravel, Hydrogen i inne SPA...</h3>
            <p className={styles.sectionContentText}>Z roku na rok aplikacje webowe stają się coraz bardziej złożone i interaktywne, wymagając od programistów coraz to bardziej rozbudowaneje wiedzy technicznej. Świetnym przykłdaem mogą być ostatnio bardzo popularne frameworki Fullstack-owe takie jak Next.js, Remix czy Laravel. Za ich pomocą w szybki i prosty sposób jestesmy w stanie nie tylko napisać Frontend ale i równie efektywnie dodać kod Backendowy. Nie ma konieczności utrzymywania dwóch aplikacji osobno, a granice miedzy Frontem a Backiem są w nich bardzo zatarte.<br /><br />Twórcy dużych Frameworków w znaczący sposób zmniejszyli próg nauki Backendu. Na przykładzie NextJS nie ma konieczności tworzenia swojego własnego Routingu w Expressie, wystarczy stworzyć tylko jeden nodpowiedni plik abyśmy mogli cieszyć się np. pełnoprawną scieżką API. Ponadto w dalszym ciągu jestesmy w tym momencie pozostać przy jednym języku programowania jakim jest JavaScript, za pomocą którego bez problemu efektywnie obsłużymy aplikacje.<br /><br />Pozostając jeszcze w obrębie aplikacji typu SPA warto zaznaczyć, że na programistach Frontend ze względu na specyfikę budowy tychże aplikacji zaczęły spoczywać dodatkowe obowiązaki. Aby stworzyć SPA, programista musi już nie tylko znać frontendowe technologie, ale również sposoby komunikacji z serwerem, zarządzanie stanami aplikacji, autoryzację i wiele innych aspektów backendowych.</p>
            <h3 className={styles.sectionContentHeader}>Wykorzystanie nowych technologii</h3>
            <p className={styles.sectionContentText}>Z roku technologia ewoluuje i wymaga od nas, adaptacji do nowego otoczenia. Dzisiejszy profesjonalni programiści Frontendu powinni znać również technologie konteneryzacji, z uwagi na szerokie jej wykorzystanie w całym łańcuchu CI/CD. Podstawowa znajomość technologii Docker może okazać się konieczna, chociazby w celu uruchomienia środowiska deweloperskiego.</p>
          </div>
        </section>
        {/* Integracja z Backendem */}
        <section id="integracja-z-backendem" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Integracja z Backendem</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>REST API i GraphQL</h3>
            <p className={styles.sectionContentText}>Nowoczesne aplikacje webowe często komunikują się z serwerem za pomocą REST API lub GraphQL. Znajomość tych technologii jest niezbędna, aby móc efektywnie pobierać, przesyłać i zarządzać danymi. Programiści muszą rozumieć, jak działa protokół HTTP, jak obsługiwać autoryzację i autentykację API, oraz jak zarządzać błędami i wyjątkami.</p>
            <h3 className={styles.sectionContentHeader}>Obsługa danych i zarządzanie stanem</h3>
            <p className={styles.sectionContentText}>Współczesne aplikacje muszą radzić sobie z dużymi ilościami danych, które często muszą być w dynamiczny sposób synchronizowane między różnymi częściami aplikacji. Narzędzia takie jak Redux, MobX czy Vuex pomagają zarządzać stanem aplikacji, ale wymagają od programistów głębokiego zrozumienia architektury aplikacji i najlepszych praktyk programistycznych.<br /><br /> Ponadto w dzisiejszych czasach coraz częściej odchodzi się od "lokalnego" zarządzania stanem aplikacji na rzecz składowania tychże danych w ciasteczkach. Podejście takie w przypadku wielu aplikacji w znaczący sposób wpływa na poprawę ich bezpieczeństwa. Dla programistów Frontendu stanowi to kolejny wspólny element z Backendem.</p>
          </div>
        </section>
        {/* Bezpieczeństwo Aplikacji */}
        <section id="bezpieczenstwo-aplikacji" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Bezpieczeństwo Aplikacji</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Cybersecurity podstawą w 2024 roku.</h3>
            <p className={styles.sectionContentText}>Bezpieczeństwo aplikacji webowych to jeden z najważniejszych aspektów programowania w 2024 roku, na który programiści muszą zwracać uwagę. Sam Frontend nie wystarczy, aby zapewnić pełne bezpieczeństwo aplikacji. Programiści Frontendu muszą znać najlepsze praktyki z zakresu bezpieczeństwa, takie jak ochrona przed atakami XSS, CSRF czy SQL Injection.</p>
            <h3 className={styles.sectionContentHeader}>OWASP Top 10</h3>
            <p className={styles.sectionContentText}>OWASP Top 10 to lista najczęstszych zagrożeń bezpieczeństwa, takich jak Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) czy SQL Injection. Programiści muszą znać te zagrożenia i wiedzieć, jak się przed nimi bronić. Brak znajomości tak podstawowych praktyk może prowadzić do wielu niebezpiecznych sytuacji, tym bardziej że niektóre ataki można wykluczyć już poprzez odpowiednio napisany kod Frontendowy.</p>
            <h3 className={styles.sectionContentHeader}>Autoryzacja i autentykacja</h3>
            <p className={styles.sectionContentText}>Zarządzanie tożsamością użytkowników, autoryzacją i autentykacją to kluczowe elementy nowoczesnych aplikacji. Programiści muszą znać protokoły takie jak OAuth, JWT czy SAML oraz umieć implementować je w swoich aplikacjach. Oczywiście za implementację tych rozwiązań w głównej mierze odpowiada Backend, jednakże programiści Frontend'u również muszą wiedzieć, jak w bezpieczny sposób przechowywać krytyczne dane, tak aby potencjalni atakujący nie mieli do nich dostepu.</p>
          </div>
        </section>
        {/* Wymagania Rynku Pracy */}
        <section id="wymagania-rynku-pracy" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Wymagania rynku pracy</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Full-Stack Development</h3>
            <p className={styles.sectionContentText}>W 2024 roku pracodawcy coraz częściej poszukują programistów full-stack, którzy potrafią pracować zarówno nad frontendem, jak i backendem. Full-stack developerzy mogą zrozumieć i zarządzać całym cyklem życia aplikacji, co czyni ich niezwykle wartościowymi dla firm.</p>
            <h3 className={styles.sectionContentHeader}>DevOps i CI/CD</h3>
            <p className={styles.sectionContentText}>Praktyki DevOps oraz Continuous Integration/Continuous Deployment (CI/CD) stały się standardem w branży IT. Programiści muszą znać narzędzia takie jak Docker, Kubernetes, Jenkins, GitLab CI/CD i potrafić zintegrować je w swoich projektach. Umożliwia to automatyczne testowanie, budowanie i wdrażanie aplikacji, co skraca czas wprowadzania nowych funkcji i poprawia jakość oprogramowania.</p>
            <h3 className={styles.sectionContentHeader}>Chmura obliczeniowa</h3>
            <p className={styles.sectionContentText}>Znajomość usług chmurowych, takich jak AWS, Azure czy Google Cloud Platform, jest coraz bardziej pożądana. Programiści muszą umieć tworzyć, konfigurować i zarządzać zasobami chmurowymi, aby móc efektywnie skalować swoje aplikacje i zarządzać nimi w sposób bardziej elastyczny i ekonomiczny.</p>
            <h3 className={styles.sectionContentHeader}>Integracje</h3>
            <p className={styles.sectionContentText}>Zastosowanie coraz to nowszych rozwiązań wymaga zastosowoania odpowiednich integratorów. Wolny rynek kieruje się swoimi prawami oraz wymaga od nas znania wielu bliźniaczych technologii. Konieczne jest już nie tylko umiejętne zakodowanie interfeju aplikacji, ale i również jego odpowiednie zintegrowanie z źródłem danych.</p>
            <h3 className={styles.sectionContentHeader}>Monitoring i logowanie</h3>
            <p className={styles.sectionContentText}>Efektywne monitorowanie i logowanie to kluczowe aspekty utrzymania aplikacji w produkcji. Programiści muszą znać narzędzia takie jak Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana) i umieć je integrować w swoich aplikacjach, aby móc szybko diagnozować i rozwiązywać problemy.</p>
            <h3 className={styles.sectionContentHeader}>Analityka i optymalizacja wydajności</h3>
            <p className={styles.sectionContentText}>Narzędzia takie jak Google Lighthouse i Web Vitals pomagają analizować wydajność aplikacji webowych i identyfikować obszary wymagające optymalizacji. Programiści muszą umieć interpretować wyniki tych narzędzi i wdrażać odpowiednie poprawki, aby zapewnić płynne działanie aplikacji. Ponadto konieczna jest również znajomość narzędzi takich jak Google Search Console czy Google Analitics w celu poprawnej implementacji rozwiązań SEO.</p>
          </div>
        </section>
        {/* Wymagania Rynku Pracy */}
        <section id="umiejetnosci-miekkie" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Umiejetnosci miękkie</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Komunikacja i współpraca zespołowa</h3>
            <p className={styles.sectionContentText}>Współczesny rynek pracy wymaga od programistów nie tylko umiejętności technicznych, ale również umiejętności miękkich, takich jak komunikacja, współpraca zespołowa, zarządzanie czasem i zdolność do adaptacji. Programiści muszą umieć efektywnie komunikować się z innymi członkami zespołu, klientami i interesariuszami projektu.</p>
            <h3 className={styles.sectionContentHeader}>Praca zdalna i zwinne metodyki</h3>
            <p className={styles.sectionContentText}>Praca zdalna stała się normą w wielu firmach, a zwinne metodyki pracy, takie jak Scrum czy Kanban, są powszechnie stosowane. Programiści muszą być elastyczni i potrafić dostosować się do zmieniających się warunków, a także umieć pracować w zespole zdalnym, organizować swoją pracę oraz efektywnie komunikować się online.</p>
            <h3 className={styles.sectionContentHeader}>Udział w społeczności i branżowych wydarzeniach</h3>
            <p className={styles.sectionContentText}>Udział w społeczności programistycznej, konferencjach, warsztatach i meet-upach jest kluczowy dla ciągłego rozwoju. Dzięki temu programiści mogą wymieniać się doświadczeniami, uczyć się od innych, nawiązywać kontakty i być na bieżąco z najnowszymi trendami i najlepszymi praktykami w branży.</p>
            <h3 className={styles.sectionContentHeader}>Umiejętność prezentacji i argumentacji</h3>
            <p className={styles.sectionContentText}>Programiści często muszą przedstawiać swoje pomysły i rozwiązania innym członkom zespołu, klientom lub interesariuszom projektu. Umiejętność prezentacji i argumentacji jest kluczowa, aby skutecznie komunikować swoje idee i przekonywać innych do ich wartości.</p>
          </div>
        </section>
        <section id="podsumwoanie" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Podsumowanie</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <p className={styles.sectionContentText}>W 2024 roku sam Frontend to zdecydowanie za mało, aby odnieść sukces w branży IT. Wymagania rynku pracy rosną, a programiści muszą posiadać szeroki zakres umiejętności, obejmujący Backend, DevOps, bezpieczeństwo, analitykę, umiejętności miękkie oraz ciągłe doskonalenie i naukę nowych technologii. Zrozumienie i opanowanie tych wszystkich aspektów pozwoli programistom na tworzenie bardziej złożonych, bezpiecznych i wydajnych aplikacji, a także na lepsze dostosowanie się do potrzeb współczesnych pracodawców. Aby sprostać wymaganiom rynku pracy w 2024 roku, programiści muszą być wszechstronni, elastyczni i gotowi do ciągłego rozwoju.</p>
          </div>
        </section>
      </article>
    </main >
  )
}