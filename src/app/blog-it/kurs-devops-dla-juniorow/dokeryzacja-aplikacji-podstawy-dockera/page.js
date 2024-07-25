import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/blogPreviews/docker_hero.png";
import dockerfile_example from "@/../public/blogImgs/img/dockerfile_example.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'Konteneryzacja aplikacji, czyli podstawy Dockera',
  description: 'Zapoznaj się Dockerem w kilku prostych krokach i już dziś zacznij z niego korzystać!',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/dokeryzacja-aplikacji-podstawy-dockera',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/dokeryzacja-aplikacji-podstawy-dockera',
      "en": 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics'
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Lekcja 1", url: "/blog-it/kurs-devops-dla-juniorow/jak-bezpiecznie-skonfigurowac-moj-pierwszy-serwer-vps" }}
        nextLesson={{ title: "Lekcja 3", url: "/blog-it/kurs-devops-dla-juniorow" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Konteneryzacja <span class='purple'>aplikacji</span>, czyli podstawy <span class='purple'>Dockera</span>"
            articleInfo={{ time: "20 minut", specialization: "DevOps/Developer", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Poznaj Docker w kilku prostych krokach"
            contents={[
              { text: "Wprowadzenie do Dockera", url: "#wprowadzenie-do-dockera" },
              { text: "Docker - Podstawowe Pojęcia", url: "#docker-podstawowe-pojecia" },
              { text: "Instalacja Dockera", url: "#docker-instalacja" },
              { text: "Podstawowe Komendy Docker", url: "#podstawowe-komendy-docker" },
              { text: "Jak tworzyć bezpieczne obrazy Docker?", url: "#bezpieczny-obraz-docker" },
              { text: "Pierwszy Dockerfile - Bezpieczny Przykład", url: "#pierwszy-dockerfile-bezpieczny-przyklad" }
            ]}
          />
        </div>
        {/* Wprowadzenie Do Docker'a */}
        <section id="wprowadzenie-do-dockera" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Wprowadzenie do Docker'a</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Co to jest Docker?</h3>
            <p className={styles.sectionContentText}>Docker to technologia konteneryzacji, która pozwala na tworzenie, zarządzanie i uruchamianie aplikacji w izolowanych środowiskach zwanych kontenerami. Konteneryzacja natomiast to metoda pakowania aplikacji i jej zależności w jedno przenośne środowisko, które można uruchomić na dowolnym systemie wspierającym Dockera. Dzięki temu aplikacje stają się bardziej przenośne, skalowalne i łatwe w zarządzaniu.</p>
            <h3 className={styles.sectionContentHeader}>2. Jakie są kluczowe cechy Docker'a?</h3>
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Izolacja</strong> - Każdy kontener działa w izolowanym środowisku, co zapewnia, że aplikacje nie będą się ze sobą komunikować, póki im na to nie pozwolimy. Ponadto nie dojdzie do kolizji z innymi aplikacj. (np. kolizja mapowania portów)</li>
              <li><strong style={{ fontWeight: "bold" }}>Przenośność</strong> - Kontenery mogą być uruchamiane na różnych platformach i systemach operacyjnych bez konieczności zmiany kodu. Sama migracja aplikacji jest niemalże autoamtyczna.</li>
              <li><strong style={{ fontWeight: "bold" }}>Wydajności</strong> - Kontenery Docker'a w porównaniu do maszyn wirtualnych są lekkie i wydajne z uwagi na fakt, że wykorzystują Kernel Hosta.</li>
              <li><strong style={{ fontWeight: "bold" }}>Skalowalność</strong> - Docker ułatwia skalowanie aplikacji zarówno w pionie (większa moc obliczeniowa) jak i w poziomie (więcej instancji aplikacji).</li>
            </ol>
            <ArticleImportantInfo
              type="how"
              title="Jak działa Docker?"
              content="Docker używa technologii kontenerów, które wykorzystują wirtualizację na poziomie systemu operacyjnego, aby uruchamiać wiele izolowanych aplikacji na jednej maszynie fizycznej. Kontenery są lekkie, ponieważ współdzielą jądro systemu operacyjnego hosta, co różni je od tradycyjnych maszyn wirtualnych, które wymagają pełnych systemów operacyjnych."
            />
            <h3 className={styles.sectionContentHeader}>3. Zalety używania Docker'a</h3>
            <p className={styles.sectionContentText}>Docker zrewolucjonizował sposób, w jaki tworzymy, wdrażamy i zarządzamy aplikacjami, oferując przenośność, skalowalność i wydajność, które wcześniej były trudne do osiągnięcia. Dzięki Dockerowi programiści mogą skupić się na pisaniu kodu, a nie na zarządzaniu infrastrukturą. Do jego głównych zalet możemy zaliczyć:</p>
            <ul>
              <li><strong style={{ fontWeight: "bold" }}>Szybkie Wdrażanie</strong> - Dzięki Dockerowi aplikacje mogą być szybko pakowane i uruchamiane w różnych środowiskach, co skraca czas wdrażania.</li>
              <li><strong style={{ fontWeight: "bold" }}>Zarządzanie zależnościami</strong> - Docker zapewnia, że wszystkie zależności aplikacji są zawarte w kontenerze, co eliminuje problemy związane z różnicami w środowiskach.</li>
              <li><strong style={{ fontWeight: "bold" }}>Wydajności</strong> - Kontenery Docker'a w porównaniu do maszyn wirtualnych są lekkie i wydajne z uwagi na fakt, że wykorzystują Kernel Hosta.</li>
              <li><strong style={{ fontWeight: "bold" }}>Lepsze wykorzystanie zasobów</strong> - Kontenery są bardziej efektywne pod względem zasobów niż tradycyjne maszyny wirtualne, co pozwala na lepsze wykorzystanie dostępnej mocy obliczeniowej.</li>
            </ul>
          </div>
        </section>
        {/* Podstawowe pojęcia w Dockerze */}
        <section id="docker-podstawowe-pojecia" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Docker Podstawowe Pojęcia</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Czym to jest Obraz (Image) Docker?</h3>
            <p className={styles.sectionContentText}>Sztywny szablon, który zawiera wszystko, co jest potrzebne do uruchomienia aplikacji: kod, środowisko wykonawcze, biblioteki i narzędzia systemowe. Obrazy są wersjonowane i mogą być pobierane z repozytoriów takich jak <span className="purple">Docker Hub</span> czy <span className="purple">Github Container Registry.</span>Pierwszym etapem uruchamiania aplikacji w Dockerze jest tworzenie lub pobieranie obrazu.</p>
            <h3 className={styles.sectionContentHeader}>2. Czym jest Kontener (Container) Docker?</h3>
            <p className={styles.sectionContentText}>Kontener to uruchomiony instancja obrazu Dockera. Jest to izolowane środowisko, które może być uruchamiane, zatrzymywane, kopiowane i usuwane. Każdy kontener jest niezależną aplikacją. Co ważne kontenery Dockera nie przechowują stanów aplikacji (np. baz danych). Jeśli usuniesz konkretny kontener który nie posiada Volumenów, to stracisz wszystkie dane z kontenera.</p>
            <h3 className={styles.sectionContentHeader}>3. Czym jest Volumen (Volume) Docker?</h3>
            <p className={styles.sectionContentText}>Volumen Docker (ang. Docker Volume) to mechanizm używany do trwałego przechowywania danych generowanych i używanych przez kontenery Dockera. Volumeny są zarządzane przez Dockera i umożliwiają oddzielenie danych od cyklu życia kontenera. Dzięki temu dane mogą być zachowane nawet po usunięciu kontenera, co jest kluczowe dla trwałości i niezawodności aplikacji.<br /><br />Wyróżniamy 3 rodzaje Volumenów:</p>
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Volumeny zarządzane przez Docker (Managed Volumes)</strong><br />Są to volumeny tworzone i zarządzane przez Dockera. Są one przechowywane w specjalnym miejscu na systemie plików hosta<br />(najczęściej w katalogu <span className={styles.pathBox}>/var/lib/docker/volumes</span>).</li>
              <li><strong style={{ fontWeight: "bold" }}>Bind Mounts</strong><br />Używając bind mounts użytkownik ręcznie określa lokalizację na systemie plików hosta, która ma być udostępniona do kontenera. Umożliwia to dostęp do plików i katalogów hosta z poziomu kontenera.</li>
              <li><strong style={{ fontWeight: "bold" }}>TMPFS Mounts</strong><br />Są to wolumeny tworzone w pamięci RAM. Są one bardzo szybkie, ale nie trwałe. Dane w tmpfs mounts są tracone po ponownym uruchomieniu kontenera lub systemu.</li>
            </ol>
            <h3 className={styles.sectionContentHeader}>4. Czym jest Dockerfile?</h3>
            <p className={styles.sectionContentText}>Plik tekstowy zawierający zestaw instrukcji, które Docker używa do zbudowania obrazu. Instrukcje te określają, jakie bazy danych, biblioteki i ustawienia konfiguracyjne mają być zawarte w obrazie. Jest to swego rodzaju "Przepis na Obraz", stworzony przez Developera aplikacji.</p>
            <h3 className={styles.sectionContentHeader}>5. Czym jest Docker Hub?</h3>
            <p className={styles.sectionContentText}> Publiczne repozytorium, gdzie można przechowywać i udostępniać obrazy Dockera. Użytkownicy mogą pobierać gotowe obrazy lub przesyłać własne. Darmowa wersja niestety nie pozwala na składowanie prywatnych obrazów w odróżnieniu od Github Container Registry.</p>
          </div>
        </section>
        {/* Jak Zainstalować Docker'a */}
        <section id="docker-instalacja" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Jak zainstalować Docker'a?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Zanim rozpoczniesz instalację platformy Docker</h3>
            <p className={styles.sectionContentText}>W zależności od posiadanego systemu operacyjnego instalacja platformy Docker wymaga innych kroków oraz elementów składowych. Dla przykładu, w systemie Linux wymagany jest tylko Docker Engine, natomiast na Windowsach wymagane jest również doinstalowanie Docker Desktop.<br /><br />Szczegóły dotyczące instalacji środowiska Docker znajdziesz w linku poniżej.</p>
            <Link className={styles.linkBtn} href="https://docs.docker.com/engine/install/">Docker Dokumentacja</Link>
            <h3 className={styles.sectionContentHeader}>Jak zainstalować Docker na Ubuntu?</h3>
            <p className={styles.sectionContentText}>Poniżej znajduje się przykładowa isntalacja platformy Docker na Ubuntu.</p>
            <CodeBlock
              description="Odinstaluj stare wersje Docker'a"
              commands={[
                "for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done"
              ]}
            />
            <CodeBlock
              description="Dodaj oficjalne klucze GPG Docker'a"
              commands={[
                "sudo apt-get update",
                "sudo apt-get install ca-certificates curl",
                "sudo install -m 0755 -d /etc/apt/keyrings",
                "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc",
                "sudo chmod a+r /etc/apt/keyrings/docker.asc",
              ]}
            />
            <CodeBlock
              description="Dodaj Repozytorium Docker do źródeł apt"
              commands={[
                'echo \ "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \ $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \ sudo tee /etc/apt/sources.list.d/docker.list > /dev/null',
                "sudo apt-get update",
              ]}
            />
            <CodeBlock
              description="Instalacja Docker'a"
              commands={[
                'sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin'
              ]}
            />
            <CodeBlock
              description="Zweryfikuj poprawność instalacji"
              commands={[
                'sudo docker run hello-world'
              ]}
            />
            <p className={styles.sectionContentText}>Powyższa komenda pobiera obraz Hello-World a nastepnie go uruchamia. Powinieneś zobaczyć pozytywny output z aplikacji jeśli instalacja przebiegła prawidłowo.</p>
          </div>
        </section>
        {/* Podstawowe Komendy Docker*/}
        <section id="podstawowe-komendy-docker" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Podstawowe Komendy Docker</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Docker Cheat Sheet</h3>
            <p className={styles.sectionContentText}>Poniżej znajdują się podstawowe komendy, którę pozwolą Ci na niemalże całkowitą obsłógę Docker'a</p>
            <CodeBlock
              description="Komendy Systemowe Docker"
              commands={[
                "docker --help <var>Wyświetla instrukcję</var>",
                "docker version <var>Wyświetla wesję Docker'a</var>",
                "docker info <var>Wyświetla informacje o instalacji Docker'a</var>"
              ]}
            />
            <CodeBlock
              description="Zarządzanie Obrazami Docker"
              commands={[
                "docker pull [nazwa_obrazu] <var>Pobiera obraz z repozytorium Docker Hub</var>",
                "docker images -a <var>Pokaż wszystkie dostępne obrazy w systemie</var>",
                "docker build . -t [nazwa_obrazu:tag] <var>Zbuduj obraz i nadaj mu nazwę oraz tag</var>",
                "docker push [repozytorium/nazwa_obrazu:tag] <var>Prześlij obraz do wybranego rezpoytorium</var>",
                "docker rmi [id_obrazu] <var>Usuń obraz z systemu</var>"
              ]}
            />
            <CodeBlock
              description="Zarządzanie Kontenerami Docker"
              commands={[
                "docker run [nazwa_obrazu] <var>Uruchamia nowy kontener z określonego obrazu.</var>",
                "docker run [nazwa_obrazu] -d <var>Uruchamia nowy kontener z określonego obrazu. (Tryb detached)</var>",
                "docker ps <var>Wyświetla listę uruchomionych kontenerów</var>",
                "docker ps -a <var>Wyświetla listę wszystkich kontenerów</var>",
                "docker stop [id_kontenera] <var>Zatrzymaj Kontener</var>",
                "docker rm [id_kontenera] <var>Usuń Kontener</var>",
                "docker exec -it [id_kontenera] /bin/bash <var>Uruchomienie powłoki systemowej Kontenera</var>",
                "docker exec -it [id_kontenera] /bin/sh <var>Uruchomienie powłoki systemowej Kontenera (środowisko bez Bash'a)</var>"
              ]}
            />
          </div>
        </section>
        {/* Bezpieczna Konfiguracja Docker*/}
        <section id="bezpieczny-obraz-docker" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Jak bezpiecznie skonfigurować obraz Docker'a?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Dlaczego bezpieczna konfiguracja obrazu Docker jest tak ważna?</h3>
            <p className={styles.sectionContentText}>Bezpieczna konfiguracja obrazu Docker jest kluczowa z kilku powodów, które mają bezpośredni wpływ na integralność, poufność i dostępność aplikacji oraz danych w niej zawartych. Oto najważniejsze powody, dla których warto dbać o bezpieczeństwo obrazów Docker:</p>
            <ol style={{ marginTop: 24 }}>
              <li><strong style={{ fontWeight: "bold" }}>Ochrona przed hakerami</strong><br />
                Obrazy Docker nie różnią się w obsłudze w żaden sposób od zwykłych aplikacji. Mogą być one narażone na różne typy ataków, takie jak złośliwe oprogramowanie, ataki typu man-in-the-middle czy wykorzystanie luk w zabezpieczeniach systemów operacyjnych i aplikacji. Bezpieczna konfiguracja minimalizuje ryzyko takich ataków, zapewniając aktualne i sprawdzone wersje oprogramowania.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Izolacja aplikacji</strong><br />
                Głównym benefitem korzystania z technologii Docker jest izolacja aplikacji. Kontenery Docker mają na celu izolowanie aplikacji od systemu hosta oraz innych kontenerów. Niewłaściwie skonfigurowane obrazy mogą prowadzić do wycieków danych między kontenerami lub pozwolić na eskalację uprawnień na hosta, co może zagrozić całemu systemowi, a w skrajnych wypadkach nawet klastrowi.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Zapewnienie Integralności Danych</strong><br />
                Dane przechowywane i przetwarzane przez aplikacje muszą być chronione przed nieautoryzowanym dostępem i modyfikacjami. Bezpieczne konfiguracje obrazów pomagają zapobiegać naruszeniom danych i zapewniają, że dane pozostaną nienaruszone.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Minimalizacja powierzchni ataku</strong><br />
                Minimalizacja obrazu Docker polega na usunięciu niepotrzebnych pakietów i zależności, co zmniejsza powierzchnię ataku. Im mniej komponentów w obrazie, tym mniejsza szansa, że jakiś z nich będzie miał luki w zabezpieczeniach. Zawsze staraj się opierać swój obraz produkcyjny na minimalnych obrazach systemowych.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Zgodność z przepisami i regulacjami</strong><br />
                Wiele branż podlega rygorystycznym przepisom dotyczącym ochrony danych i prywatności, takim jak RODO czy HIPAA. Bezpieczna konfiguracja obrazów Docker pomaga w spełnianiu tych wymagań, co jest kluczowe dla uniknięcia kar finansowych i utraty reputacji.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Ułatwienie zarządzania i skalowalności</strong><br />
                Bezpieczne obrazy są łatwiejsze w utrzymaniu i monitorowaniu. Automatyzacja aktualizacji, patchowania oraz audytów bezpieczeństwa jest prostsza, co umożliwia efektywne skalowanie aplikacji w środowiskach produkcyjnych. Warto również wykrozystywać wszelkiego rodzaju testy automatyczne w naszym CI/CD z poziomu samego Docker'a w celu wykluczenia wszelkich niedociągnięć.
              </li>
            </ol>
            <h3 className={styles.sectionContentHeader}>Praktyki tworzenia bezpiecznych obrazów Docker</h3>
            <p className={styles.sectionContentText}>Przejdzmy teraz do podstawowych i minimalnych praktych zabezpieczania aplikacji hosotwanych w środowisku Docker. Implementacja poniższych rozwiązań powinna w dużym stopniu ograniczyć wektory ataków na naszą aplikację. Należy pamiętać, że poniższe kroki tyczą się tylko bezpieczeństwa obrazu Docker a nie całej aplikacji. W celu maksymalizacji bezpieczeństwa naszych systemów warto wykorzystać narzędzia monitorujące oraz proxy typu WAF(Web Application Firewall), które autoamtycznie będą wycinały znane im ataki.</p>
            <ArticleImportantInfo
              type="hint"
              title="Jaki WAF wybrać?"
              content="W zależności od aplikacji którą chcesz hostować istnieje wiele otwarto źródłowych, jak i komercyjnych rozwiązań typu Web Applcation Firewall. Najważniejsze jest dobrać odpowiednie narzędzie do danej aplikacji. Dla przykładu aplikacje oparte o PHP będą miały inne wektory ataków niż te oparte na Node.js. Do hostowania np. Wordpress'a warto będzie rozwazyć Modsecurity WAF (via Nginx), natomiast do aplikacji typu Next.js warto rozważyć wykorzystanie Arcjet (via NPM). Oczywiscie nic nie stoi na przeszkodzie w użyciu kilku WAF'ów naraz, ale nieodpowiedni jego dobór może prowadzić do wielu false-positive."
            />
            <ol style={{ marginTop: 24 }}>
              <li><strong style={{ fontWeight: "bold" }}>Używanie oficjalnych i zaufanych źródeł</strong><br />
                Korzystaj tylko z oficjalnych obrazów dostępnych na Docker Hub lub innych zaufanych rejestrach. Oficjalne obrazy są regularnie aktualizowane i sprawdzane pod kątem luk w zabezpieczeniach. Pamiętaj również aby w samej swojej aplikacji korzystać z oficjalnych pakietów i bibliotek.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Aktualizacja oprogramowania</strong><br />
                Regularnie aktualizuj wszystkie biblioteki i obrazy systemów operacyjny w Docker. Upewnij się, że obrazy są odbudowywane z najnowszymi wersjami pakietów i poprawkami bezpieczeństwa. Staraj się dokonywać te operacje w miarę regularnie.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Minimalizacja obrazu</strong><br />
                Twórz obrazy zawierające tylko niezbędne komponenty do uruchomienia aplikacji. Korzystaj z lekkich bazowych systemów operacyjnych, takich jak np. Alpine Linux, czy wersje Slim. Pamiętaj, że przed doborem obrazu możesz zweryfikować jego bezpieczeńśtwo w Docer Hub. Każdy obraz posiada swoją włąsną bazę podatności o której możesz przeczytać na podstronie danego wydawcy.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Zarządzanie tajnymi danymi</strong><br />
                Obrazy Docker'a umożliwiają podgląd ich "deploymentu". Unikaj umieszczania tajnych danych, takich jak hasła, klucze API czy certyfikaty, bezpośrednio w obrazie Docker. Używaj zmiennych środowiskowych lub narzędzi do zarządzania sekretami, takich jak Docker Secrets.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Ustawienie odpowiednich uprawnień - Blokada Roota</strong><br />
                Stosuj polityki bezpieczeństwa, takie jak SELinux lub AppArmor, aby dodatkowo zabezpieczyć kontenery i ograniczyć ich dostęp do zasobów systemowych.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Skonfigurowanie odpowiednich polityk bezpieczeństwa</strong><br />
                Bezpieczne obrazy są łatwiejsze w utrzymaniu i monitorowaniu. Automatyzacja aktualizacji, patchowania oraz audytów bezpieczeństwa jest prostsza, co umożliwia efektywne skalowanie aplikacji w środowiskach produkcyjnych. Warto również wykrozystywać wszelkiego rodzaju testy automatyczne w naszym CI/CD z poziomu samego Docker'a w celu wykluczenia wszelkich niedociągnięć.
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Regularne audyty bezpieczeństwa</strong><br />
                Regularnie przeprowadzaj manualne lub autoamtyczne audyty bezpieczeństwa swoich obrazów Docker, aby wykrywać i naprawiać potencjalne luki w zabezpieczeniach. Korzystaj z narzędzi do skanowania bezpieczeństwa, takich jak Docker Bench for Security czy Docker Scout.
              </li>
            </ol>
            <h3 className={styles.sectionContentHeader}>Podsumowanie</h3>
            <p className={styles.sectionContentText}>Bezpieczna konfiguracja obrazu Docker jest kluczowa dla ochrony aplikacji i danych przed różnorodnymi zagrożeniami. Dbałość o bezpieczeństwo pozwala nie tylko uniknąć problemów z naruszeniami danych, ale także zapewnia stabilność i niezawodność aplikacji w środowiskach produkcyjnych. Poprzez stosowanie dobrych praktyk, takich jak minimalizacja obrazów, regularne aktualizacje, zarządzanie tajnymi danymi oraz audyty bezpieczeństwa, można znacząco zmniejszyć ryzyko związane z wykorzystaniem technologii Docker.</p>
          </div>
        </section>
        {/* Pierwszy Dockerfile - Bezpieczny Przykład */}
        <section id="pierwszy-dockerfile-bezpieczny-przyklad" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Jak stworzyć swój pierwszy bezpieczny Dockerfile?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Struktura pliku Dockerfile</h3>
            <p className={styles.sectionContentText}>Plik Dockerfile to skrypt zawierający zestaw instrukcji i poleceń, które Docker używa do budowania obrazu. Każda instrukcja w Dockerfile wykonuje określoną operację, taką jak instalacja pakietu, ustawienie zmiennej środowiskowej lub skopiowanie plików. Poniżej szczegółowy opis podstawowej strutkury Dockerfile.</p>
            <Image className={styles.blogImg} src={dockerfile_example} alt="Opis struktury pliku Dockerfile" style={{ maxWidth: 770 }} />
            <p className={styles.sectionContentText}>Powyższe informacje prezentują minimalną wiedzę konieczną do utworzenia swojego pierwszego własnego obrazu Docker. Oczywiście sam plik Dockerfile przyjmuje zdecydowanie więcej instrukcji oraz opcji które można znaleźć w dokumentacji Docker'a.</p>
            <ArticleImportantInfo
              type="hint"
              title="Dockerfile w skrócie..."
              content="Wyobraź sobie, że za każdym razem kiedy chcesz dokonać deploymentu aplikacji na nowym serwerze musisz wykonać szereg czynności mający na celu przygotowanie środowiska dla Twojej aplikacji. Musisz w pierwszej kolejności pobrać potrzebne pliki, nastepnie zainstalować biblioteki, skonfigurować bazy danych a nastepnie uruchomić aplikację tak aby nasłuchiwała na danym porcie.<br/><br/>Wykonywanie tych czynności ręcznie jest monotonnym i mało rozwijającym zajęciem, jako że w kółko powtarzamy te same czynności. Z pomocą przychodzi nam Docker, który wykona te wszystkie operacje za nas.<br/><br/>Potraktuj plik Dockerfile jako instrukcję dla samego siebie w której krok po kroku wykonujesz wszystkie czynnosci mające na celu uruchomienie Twojej aplikacji. Jeśli w toku deploymentu musisz wykonać jakąś czynność to powinna być ona również zawarta w pliku Dockerfile.<br/><br/>Poprawnie skonstruowany plik Dockerfile odwdzięczy Ci się czasem który byś musiał poświęcić na jednorazowy samodzielny deployment aplikacji. Ponadto Twoja aplikacja stanie się bajecznie prosta do przenoszenia pomiędzy serwerami."
            />
          </div>
        </section>
        {/* Podsumowanie */}
        {/* <section id="instalacja-i-konfiguracja-clamav" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Podsumowanie</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Kilka słów na zakończenie</h3>
            <p className={styles.sectionContentText}>Na samym poczatku chciałbym podziękować Ci za cierpliwość i pogratulować wytrwałości. Mam nadzięję, że niniejszy artykuł był dla Ciebie zrozumiały. W razie gdybyś miał jakieś problemy zawsze możesz odezwać się do mnie prywatnie w celu otrzymania pomocy.<br /><br />Jak sam widzisz, bezpieczna konfiguracja Twojego nowego serwera VPS wcale nie jest taka trudna jakby się to wydawało. Działanie to tak na prawdę, w głównej mierze opiera się na pewnych powielanych schamatach, które wraz z upływem czasu są aktualizowane o bezpieczniejsze rozwiązania. Serwer który dzisiaj przygotowaliśmy możesz wykorzystać do hostowania swoich pierwszych aplikacji. Jest on bezpiecznie skonfigurowany i nie powinien pozwolić na włam.<br /><br />Niniejszy artykuł jest pierwszym z serii kursu "Od zera do DevOps'era". Pamiętaj że jest to dopiero pierwszy etap, w którym wspólnie przygotowaliśmy podłoże pod postawienie naszej aplikacji webowej. Skupiliśmy się przede wszystkich na podstawach, czyli na tym aby nasza infrastruktura serwerowa była bezpieczna już od pierwszego jej uruchomienia.<br /><br />W kolejnych cześćiach kursu poznamy kolejne kroki mające na celu kompletny deployment aplikacji webowej za pomocą technologii Docker. Poznamy podstawy bezpiecznego Tworzenia obrazów Dockera, poznamy szczegóły komendy Docker Compose oraz finalnie udostepnimy naszą aplikację światu za pomocą narzędzia jakim jest Traefik. Przed nami masa dobrej zabawy. Nie zapomnij obserwować mojej strony aby być na bieżąco z najnowszymi kursami.</p>
          </div>
        </section> */}
      </article>
    </main >
  )
}