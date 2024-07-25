import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import articleHero from "@/../public/blogImgs/blogPreviews/docker_hero.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: "Docker Compose, czyli podstawy YAML'a",
  description: "Naucz się podstaw YAML'a na przykładzie użycia go z Docker Compose. Dzisiaj stworzymy aplikację Wordpres z bazą MySql, która bedzie zachowywać swoje stany...",
  alternates: {
    canonical: 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml',
      "en": 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics'
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Lekcja 2", url: "/blog-it/kurs-devops-dla-juniorow/dokeryzacja-aplikacji-podstawy-dockera" }}
        nextLesson={{ title: "Lekcja 4", url: "/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Docker <span class='purple'>Compose</span>, <br/>czyli podstawy <span class='purple'>YAML'a</span>"
            articleInfo={{ time: "20 minut", specialization: "DevOps/Developer", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Docker Compose w kilku prostych krokach"
            contents={[
              { text: "Wprowadzenie do Docker Compose", url: "#wprowadzenie-do-docker-compose" },
              { text: "Docker Compose - Podstawowy Przykład", url: "#docker-compose-podstawowy-przyklad" },
              { text: "Podsumowanie", url: "#podsumowanie" }
            ]}
          />
        </div>
        {/* Wprowadzenie Do Docker Compose */}
        <section id="wprowadzenie-do-docker-compose" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Wprowadzenie do Docker Compose</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <p className={styles.sectionContentText}>Docker Compose to narzędzie, które umożliwia definiowanie i uruchamianie aplikacji wielokontenerowych za pomocą pliku YAML. W skrócie mówiąc, za pomocą jednego pliku jesteśmy w stanie uruchomić całe niezbędne środowisko do obsługi naszej aplikacji. W dzisiejszym przykładzie przejdziemy przez proces uruchamiania najbardziej popularnego CMS'a na świecie jakim jest Wordpres.<br /><br />Zapewne zadajesz sobie pytanie dlaczego musimy użyć Docker Compose, a nie tylko podstawowej komendy Docker?<br /><br />Odpowiedź na to pytanie jest prostsza niż Ci się wydaje. W celu urchomienia jakiejkolwiek aplikacji Wordpress konieczne jest posiadanie zarówno Panelu CMS Wordpres jak i bazy danych MySql. W przypadku podstawowej komendy Docker konieczne byłoby osobne uruchomienie panelu CMS oraz bazy MySql. Dzięki Docker Compose za pomocą jednej komendy będziemy w stanie w szybki sposób uruchomić całą aplikację Wordpress, niezależnie od systemu Hosta.</p>
            <h3 className={styles.sectionContentHeader}>1. Co to jest Docker Compose?</h3>
            <p className={styles.sectionContentText}>Docker Compose to narzędzie, które pozwala na uruchamianie aplikacji składających się z wielu kontenerów Docker. Umożliwia definiowanie usług, sieci i wolumenów w pliku YAML, co upraszcza zarządzanie i uruchamianie skomplikowanych aplikacji. Dzięki Docker Compose możemy w łatwy sposób zdefiniować, uruchomić i zarządzać środowiskami testowymi i produkcyjnymi.<br /><br /> Docker Compose jest podstawowym narzędziem o charakterze zarówno produkcyjnym jak i testowym, jednakże nie jest tak zaawansowane jak np. Docker Swarm lub Kubernetes. Mimowszystko, jego znajomość jest konieczna w celu dalszego kompleksowego poznawania środowisk kontenerowych.</p>
            <h3 className={styles.sectionContentHeader}>2. Co to jest YAML?</h3>
            <p className={styles.sectionContentText}>YAML jest formatem plików tekstowych, który jest łatwy do pisania oraz czytania. Jest często używany do konfiguracji aplikacji, ze względu na swoją prostotę. Pliki YAML składają się z kluczy i wartości, które są zorganizowane w strukturę hierarchiczną. Możesz postrzegać go jako pliki typu JSON, tylko takie na sterydach.<br /><br />W zależności od programu interpretacyjnego struktura pliku YAML może się różnić, jednakże ogólne założenia pozostają zawsze takie same. Cała różnica bedzie opierać się jedynie na wykorzystaniu innych poleceń.</p>
            <ArticleImportantInfo
              type="warning"
              title="Co znaczy, że YAML jest Indent Sensitive?"
              content="YAML podobnie jak np. Python jest bardzo wyczulony na wszelkiego rodzaju znaki białe (np. spacja, tab). Niepoprawne stosowanie spacji oraz tabulatorów sprawi, że plik nie będzie mógł zostać poprawnie odczytany. Zwróć uwagę na strukturę wcięć w poniższym przykładzie."
            />
            <CodeBlock
              description="Przykładowy plik YAML - Docker Compose"
              commands={[
                "version: '3.8'",
                "services:",
                "&emsp;app:",
                "&emsp;&emsp;image: my_app_image",
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "8080:80"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;- APP_ENV=production'
              ]}
            />
          </div>
        </section>
        {/* Docker Compose Przykład */}
        <section id="docker-compose-podstawowy-przyklad" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Docker Compose - Przykład</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Zanim rozpoczniesz...</h3>
            <p className={styles.sectionContentText}>Niniejszy tutorial zaprezentuje Ci podstawowy przykład konfiguracji pliku <span className={styles.pathBox}>docker-compose.yaml</span>, w którym to skonfigurujemy Wordpress wraz z bazą danych MySql. Pamiętaj że musisz posiadać zainstalowany i uruchomiony Docker Engine.<br /><br />Kontenery możesz uruchomić zarówno na swojej maszynie lokalnej, maszynie wirtualnej lub na VPS. Jeśli zdecydujesz się na ostatnią opcję(tzn. VPS) konieczne będzie zastosowanie tunelowania SSH w celu uzyskania dostępu do kontenera przez przeglądarkę internetową. Tunelowanie w takim wypadku będzie konieczne z uwagi na fakt, że nie bedziemy jeszcze na tym etapie podpinać domeny pod nasz kontener.</p>
            <ArticleImportantInfo
              type="hint"
              title="Jak dokonać tunelowania SSH?"
              content="Tunelowanie poprzez SSH pozwala nam na przekierowanie ruchu z naszego lokalnego portu na docelowy port na naszym serwerze VPS. W celu dokonania takiej czynności wykonaj następującą komendę: <br/><br/>Składnia:<br/>ssh -N -p 22 {user}@{vps_ip} -L {local_port}:{vps_internal_ip}:{vps_internal_port}<br/><br/>Dla przykładu: <br/>ssh -N -p 22 noob@123.123.12.12 -L 8080:127.0.0.1:8080 <br/><br/>Powyższa komenda spróbuje dokonać łączenia za pomocą SSH do użytkownika 'noob' pod adresem '123.123.12.12' a nastepnie dokona przekierowania ruchu z Twojego lokalnego portu 8080 na wewnętrzny adres Twojego VPS 127.0.0.1:8080. <br/><br/>Tym sposobem bedziesz w stanie ze swojej lokalnej przeglądarki internetowej połączyć sie z Twoim kontenerem.<br/>Jeśli powyższe informacje na ten moment są dla Ciebie zbyt skomplikowane, uruchom Docker Compose na swoim lokalnym komputerze."
            />
            <h3 className={styles.sectionContentHeader}>1.Jak uruchomić Wordpress z MySQL za pomocą Docker Compose?</h3>
            <p className={styles.sectionContentText}>W pierwszej kolejności przejdź do katalogu docelowego w którym zamierzasz utwożyć plik <span className={styles.pathBox}>docker-compose.yaml</span>.</p>
            <CodeBlock
              description="Utwórz plik w docelowym katalogu"
              commands={[
                "touch docker-compose.yaml",
              ]}
            />
            <CodeBlock
              description="Uzupełnij plik w następujący sposób"
              commands={[
                "version: '3.8'",
                "services:",
                "&emsp;wordpress:",
                "&emsp;&emsp;image: wordpress:latest",
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "8080:80"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_HOST: db',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_USER: wordpress',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_PASSWORD: wordpress',
                '&emsp;&emsp;&emsp;WORDPRESS_DB_NAME: wordpress',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- wordpress_data:/var/www/html',
                '',
                "&emsp;db:",
                "&emsp;&emsp;image: mysql:5.7",
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;MYSQL_ROOT_PASSWORD: rootpassword',
                '&emsp;&emsp;&emsp;MYSQL_DATABASE: wordpress',
                '&emsp;&emsp;&emsp;MYSQL_USER: wordpress',
                '&emsp;&emsp;&emsp;MYSQL_PASSWORD: wordpress',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- db_data:/var/lib/mysql',
                '',
                "volumes:",
                "&emsp;wordpress_data:",
                "&emsp;db_data:",
              ]}
            />
            <h3 className={styles.sectionContentHeader}>2. Wyjaśnienie pliku docker-compose.yaml dla Wordpress + MySQL</h3>
            <p className={styles.sectionContentText}>Przepisująć zawartość powyższego pliku pewnie łapałeś się za głowę i pytałeś siebie samego "o co tu chodzi?". Na pierwszy rzut oka struktura powyższego pliku <span className={styles.pathBox}>docker-compose.yaml</span> może wydawać się zawiła i niezrozumiała, jednakże już zachwilę wyjasnimy kod linijka po linijce.<br /><br /><strong style={{ fontWeight: "bold" }}>Sekcja "version"</strong><br />Określa wersję składni z której korzystać będzie Docker Compose. W tym przypadku używamy wersji '3.8'. Zawsze używaj najnowszej wersji, chyba że dany projekt wymaga użycia starszej. Na ten moment możliwe jest również pominięcie tej informacji w pliku co będzie skutować autoamtycznie wykorzystaniem najnowszej wersji Docker Compose.<br /><br /><strong style={{ fontWeight: "bold" }}>Sekcja "services"</strong><br />Definiuje dwa serwisy (kontenery): "wordpress" oraz "db" (możesz użyć dowolnych nazw, byleby były one unikalne)</p>
            <br />
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Kontener Wordpress</strong><br />
                <ul>
                  <li>"image" - Używamy oficjalnej najnowszej wersji obrazu WordPress</li>
                  <li>"ports" - Przekierowujemy port 8080 hosta na port 80 kontenera</li>
                  <li>"environment" - Definiujemy zmienne środowiskowe dla kontenera WordPress</li>
                  <li>"volumes" - Tworzymy wolument "wordpress_data" do przechowywanie danych WordPress</li>
                </ul>
              </li>
              <li><strong style={{ fontWeight: "bold" }}>Kontener DB</strong><br />
                <ul>
                  <li>"image" - Używamy oficjalnego obrazu MySQL w wersji 5.7</li>
                  <li>"environment" - Definiujemy zmienne środowiskowe dla kontenera hostującego bazę MySQL</li>
                  <li>"volumes" - Tworzymy wolument "db_data" do przechowywanie danych MySQL</li>
                </ul>
              </li>
            </ol>
            <p className={styles.sectionContentText}><strong style={{ fontWeight: "bold" }}>Sekcja "volumes"</strong><br />Definiuje wolumeny używane przez oba nasze kontenery/serwisy.</p>
            <ArticleImportantInfo
              type="how"
              title="Dlaczego używamy Volumenów?"
              content='Jeśli dokładnie przeczytałeś poprzednią lekcję z serii kursu "Kurs DevOps dla Juniorów" to na pewno utkiwł Ci w pamięci fakt, że kontenery Dockera z natury są niczym protokół HTTP, czyli "stateless".<br/><br/> Co to oznacza w praktyce?<br/><br/>Oznacza to, że dany kontener będzie przechowywał w sobie dane informacje tak długo póki nie zostanie usunięty lub upgradeowany do wyższej wersji obrazu. W przypadku wykorzystania technologii Wordpress z bazą MySQL jest to sytuacja nie do zaakceptowania!<br/><br/>Poprzez utworzenie Volumenów pozwalamy naszym kontenerom Docker na zapisywanie danych na systemie hosta, a nie w pamięci RAM. Dzięki temu zabiegowi Twoje dane nie zostaną utracone po ponownym deploymencie obrazu. <br/><br/> Gdybyś zapomniał dokonać tego zabiegu, wszelkie konfiguracje dokonane w Wordpresie, takie jak tworzenie stron, aktualizacje, itp. byłyby nietrwałe.'
            />
            <ArticleImportantInfo
              type="warning"
              title="Nie podawaj wrażliwych danych w plikach Compose !"
              content='W powyższym przykładzie wrażliwe informacje takie jak dane logowania do MySQL zostały zapisane bezpośrednio w pliku docker-compose.yaml w celu klaryfikacji przykładu.<br/><br/>Podejście takie jest NIEAKCEPTOWALNE, w środowisku produkcyjnym wykorzystaj np. Docker Secrets.'
            />
            <h3 className={styles.sectionContentHeader}>3. Jak uruchomić/zatrzymać kontenery za pomocą Docker Compose?</h3>
            <p className={styles.sectionContentText}>W celu uruchomienia/zatrzymania kontenerów konieczne jest przejscie w terminalu do folderu w którym składowany jest nasz plik <span className={styles.pathBox}>docker-compose.yaml</span>.</p>
            <CodeBlock
              description="W celu uruchomienia kontenerów z pliku docker-compose.yaml wykonaj komendę (deatached mode)"
              commands={[
                "docker compose up -d",
              ]}
            />
            <CodeBlock
              description="Upewnij się, ze Twoje kontenery funkcjonują poprawnie"
              commands={[
                "docker ps",
              ]}
            />
            <p className={styles.sectionContentText}>Jeśli wszystko przebiegło pomyślnie powinieneś być w stanie uruchomić panel administracyjny Wordpress ze swojej przeglądarki internetowej. W tym celu przejdz pod adres <span className={styles.pathBox}>http://localhost:8080</span>.</p>
            <CodeBlock
              description="W celu zatrzymania kontenerów z pliku docker-compose.yaml wykonaj komendę (deatached mode)"
              commands={[
                "docker compose down",
              ]}
            />
          </div>
        </section>
        {/* Podsumowanie */}
        <section id="podsumowanie" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Docker Compose - Przykład</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Dobra robota !</h3>
            <p className={styles.sectionContentText}>Gratulacje, udało Ci się uruchomić swój pierwszy pełnowartościowy klaster kontenerów Docker. Jak widzisz, na powyższym przykładzie nie jest to wcale takie trudne jakby się mogło wydawać. W tym momencie wystarczy tylko przenieść powyższy plik <span className={styles.pathBox}>docker-compose.yaml</span> na inny serwer lub maszynę aby móc cieszyć się nową instancją aplikacji Wordpress ze skonfigurowaną bazą MySQL. Nie ma konieczności samodzielnego pobierania plików Wordpress, tudzież samodzielnego konfigurowania bazy danych MySQL. Wszystko jest robione w "locie" przez Docker Compose.<br /><br /> Pomimo faktu, iż w tym momencie możesz czuć się dumny/dumna, z faktu, że udało Ci się samodzielnie uruchomić swój pierwszy system nie możesz osiąść na laurach. Wordpress jest najpopularniejszym systemem CMS na świecie co niesie ze sobą zarówno plusy jak i minusy. Wystawienie kontenera w świat w takim stanie w jakim się on teraz znajduje może okazać się zaproszeniem hakera na nasz serwer, z uwagi na niezliczoną ilość złośliwych crawlerów poszukujących niezabezpieczonych instancji Wordpress. W kolejnych lekcjach dogłębniej przyjżym się temu problemowi i zanim wystawimy naszą aplikację w świat wykrozystamy podstawowy WAF (Web Application Firewall), jakim jest Modsecurity.</p>
          </div>
        </section>
      </article>
    </main >
  )
}