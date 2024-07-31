import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/blogPreviews/traefik_hero.png";
import dns_config_example from "@/../public/blogImgs/img/dns_configuration_example.png";
import traefik_labels_example from "@/../public/blogImgs/img/traefik_labels_example.png";
import BlogNavigator from "@/components/blogComponents/BlogNavigator";



export const metadata = {
  title: 'Jak hostować strony internetowe Docker za pomocą Traefika?',
  description: 'Poznaj podstawy własnego hostowania stron internetowych z wykorzystaniem technologii konteneryzacji Docker w połączeniu z nardzędziem Traefik.',
  alternates: {
    canonical: 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/jak-hostowac-aplikacje-internetowe-za-pomoca-docker-traefik',
    languages: {
      'pl': 'https://jakubwojtysiak.online/blog-it/kurs-devops-dla-juniorow/jak-hostowac-aplikacje-internetowe-za-pomoca-docker-traefik',
      "en": 'https://jakubwojtysiak.online/en/blog-it/devops-course-for-juniors/how-to-securely-host-website-with-docker-and-traefik'
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <BlogNavigator
        previousLesson={{ title: "Lekcja 3", url: "/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml" }}
        nextLesson={{ title: "Lekcja 5", url: "/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml" }}
      />
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Jak hostować <span class='purple'>strony internetowe</span> Docker za pomocą <span class='purple'>Traefika</span>?"
            articleInfo={{ time: "30 minut", specialization: "DevOps/Developer", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Poznaj Docker w kilku prostych krokach"
            contents={[
              { text: "Co to jest Traefik?", url: "#co-to-jest-traefik" },
              { text: "Podstawowa konfiguracja Traefik", url: "#podstawowa-konfiguracja-traefik" },
              { text: "Bezpieczna konfiguracja Traefik", url: "#bezpieczna-konfiguracja-traefik" },
              { text: "Hosting strony internetowej Traefik", url: "#hosting-strony-internetowej" },
            ]}
          />
        </div>
        {/* Co to jest Traefik? */}
        <section id="co-to-jest-traefik" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Co to jest Traefik?</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Czym jest Traefik?</h3>
            <p className={styles.sectionContentText}>Traefik to nowoczesny reverse proxy i load balancer, który został stworzony z myślą o dynamicznym zarządzaniu ruchem sieciowym w środowiskach mikroserwisowych. W przeciwieństwie do tradycyjnych narzędzi, Traefik został zaprojektowany, aby bezproblemowo integrować się z nowoczesnymi narzędziami i platformami, takimi jak Docker czy Kubernetes.</p>
            <h3 className={styles.sectionContentHeader}>Kluczowe cechy Traefika</h3>
            <ol>
              <li><strong style={{ fontWeight: "bold" }}>Automatyczna konfiguracja</strong> - Jedną z głównych cech Traefika jest jego zdolność do automatycznego wykrywania usług i konfigurowania tras (DNS). Dzięki integracji z systemami takimi jak Kubernetes czy Docker, Traefik automatycznie aktualizuje swoje ustawienia, gdy nowe usługi są dodawane, zmieniane lub usuwane.</li>
              <li><strong style={{ fontWeight: "bold" }}>Wsparcie dla wielu protokołów</strong> - Traefik obsługuje zarówno protokoły TCP jak i UDP dzięki czemu możemy być używany w szerokim zakresie zastosowań. Dodatkowo oferuje możliwość tworzenia Middlewarów, które pozwalają na zwiększoną kontrole nad aplikacjami.</li>
              <li><strong style={{ fontWeight: "bold" }}>Łatwa konfiguracja SSL</strong> - Traefik automatycznie zarządza certyfikatami SSL, korzystając z Let's Encrypt. Dzięki temu możliwe jest łatwe i szybkie wdrożenie bezpiecznych połączeń HTTPS bez potrzeby ręcznego zarządzania certyfikatami.</li>
              <li><strong style={{ fontWeight: "bold" }}>Loadbalancer</strong> - Traefik oferuje zaawansowane funkcje balansowania obciążenia, które umożliwiają równomierne rozdzielanie ruchu sieciowego między różne instancje usług.</li>
              <li><strong style={{ fontWeight: "bold" }}>Label based routing</strong> - W celu hostowania aplikacji na naszej domenie wystarczy że dodamy odpowiedni label do kontenera w pliku <span className={styles.pathBox}>docker-compose.yml</span></li>
            </ol>
            <h3 className={styles.sectionContentHeader}>Dlaczego wybrać Traefik a nie np. Docker Reverse Proxy?</h3>
            <p className={styles.sectionContentText}>Traefik pomimo iż na pierwszy rzut oka może wydawać się ciężki w osbłudze, w rzeczywistości pozwoli nam na zarządzanie naszymi aplikacjami kontenerowymi w dużo prostrzy sposób niż przy użyciu np. Docker Reverse Proxy. W przypadku wykrozystania Traefika nie musimy samodzielnie konfigurować certyfikatów SSL, martwić się o przekierowania HTTP na HTTPS, oraz dodatkowo w szybki i prosty sposób możemy korzystać z Middlewarów. Dodatkowo sama platforma oferuje wiele rozbudowanych wtyczek, które warto rozważyć przy wybranych projektach.</p>
          </div>
        </section>
        {/* Podstawowa konfiguracja Traefik */}
        <section id="podstawowa-konfiguracja-traefik" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Podstawowa konfiguracja Traefik</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Jak skonfigurować Traefik?</h3>
            <p className={styles.sectionContentText}>Poniżej znajduje się minimalistyczny plik <span className={styles.pathBox}>compose.yml</span> zawierający podstawową konfigurację Traefik do Developmentu.</p>
            <ArticleImportantInfo
              type="warning"
              title="Traefik Dashboard (Development Only)"
              content="W poniższym przykładzie uruchamiamy kontener Traefik z aktywnym Traefik Dashbord. Podejście takie jest wysoce niebezpieczne, z uwagi na konieczność uruchomienia interfejsu API Traefik, który niezabezpieczony może prowadzić do wielu problemów z bezpieczeństwem hostowanych aplikacji.<br/><br/> Potraktuj poniższy przykład ściśle edukacyjnie, w dalszej części znajdziesz również bezpieczną implementację."
            />
            <CodeBlock
              description="Plik konfiguracyjny traefik-compose.yml (Development - Traefik Dashboard)"
              commands={[
                "services:",
                "&emsp;traefik:",
                "&emsp;&emsp;image: traefik:latest",
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "80:80"',
                '&emsp;&emsp;&emsp;- "443:443"',
                '&emsp;&emsp;command:',
                '&emsp;&emsp;&emsp;- "--api.dashboard=true"<var>Enable Traefik Dashboard</var>',
                '&emsp;&emsp;&emsp;- "--providers.docker.exposedbydefault=false"<var>Do not expose Docker containers by default</var>',
                '&emsp;&emsp;&emsp;- "--entrypoints.web.address=:80"',
                '&emsp;&emsp;&emsp;- "--entrypoints.websecure.address=:443"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.tlschallenge=true"<var>Enable ACME TLS Challenge</var>',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.email=<var>EMAIL</var>"<var>Define Email for ACME</var>',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"<var>Define Storage for ACME</var>',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "var/run/docker.sock:/var/run/docker.sock"<var>Expose Docker Socket (DANGEROUS!!!)</var>',
                '&emsp;&emsp;&emsp;- "./letsencrypt:/letsencrypt"<var>Volume for SSL Certs</var>',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true"<var>Enables Traefik Routing</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.rule=Host(`<var>example.domain</var>`)"<var>Define domain for Traefik Dashboard</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.entrypoints=websecure"<var>Host Traefik Dashbord Over HTTPS</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.service=api@internal"<var>Enable Traefik API - Need for Traefik Dashbord</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.traefik.tls.certresolver=myresolver"<var>Enable ACME TLS Challenge</var>',
              ]}
            />
            <p className={styles.sectionContentText}>W powyższym przykładzie zdefiniowaliśmy serwis Traefik z nastepującymi parametrami:</p>
            <ul>
              <li>Udostępniliśmy porty 80 i 443 dla naszego Traefik Reverse Proxy</li>
              <li>Utworzyliśmy volumen dla certyfikatów SSL</li>
              <li>Daliśmy dostęp do naszego Docker Socet dla serwisu Traefik (NIEBEZPIECZNE)</li>
              <li>W sekcji commands skonfigurowaliśmy porty oraz certyfikaty SSL, oraz dodatkowo uruchomiliśmy Traefik Dashboard</li>
              <li>W sekcji labels przypisaliśmy dostęp do naszego Traefik Dashbord pod adresem URL example.domain oraz </li>
            </ul>
            <p className={styles.sectionContentText}>W celu przetestowania powyższej konfiguracji musisz posiadać wykupioną domenę. Jeśli takową posiadasz to skieruj ją na swój serwer VPS. Poniżej przykładowa konfiguracja moich domen.</p>
            <Image className={styles.blogImg} src={dns_config_example} alt="Przykładowa konfiguracja DNS" style={{ maxWidth: 770 }} />
            <CodeBlock
              description="Uruchom Traefik Dashboard"
              commands={[
                "docker compose up",
                "lub",
                "docker compose -f <var>compose-file-name.yml</var> up"
              ]}
            />
            <p className={styles.sectionContentText}>Przejdź na wybraną przez siebie domenę, jeśli wszystko działa poprawnie to znajdziesz tutaj panel Traefik Dashboard.</p>
          </div>
        </section>
        {/* Bezpieczna konfiguracja Traefik */}
        <section id="bezpieczna-konfiguracja-traefik" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Bezpieczna konfiguracja Traefik</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Dlaczego powyższa konfiguracja nie jest bezpieczna?</h3>
            <p className={styles.sectionContentText}>Kiedy poznaliśmy już podstawową konfigurację serwisu Traefik, warto byłoby dowiedzieć się jak powinna wyglądać ona w bezpieczny sposób. Powyższe rozwiązanie niesie ze sobą kilka problemów:</p>
            <ul>
              <li>Dajemy bezpośredni dostęp do socketu Docker, czego nie powinnismy NIGDY robić, póki się na tym nie znamy</li>
              <li>Udostępniamy interfejs API Traefik, który dodatkowo nie jest w ząden sposób chroniony, w ten sposób atakujący może podejrzeć wszysktie nasze informacje</li>
              <li>Sam Traefik Dashboard również dostępny jest publicznie i nie jest chroniony hasłem.</li>
            </ul>
            <h3 className={styles.sectionContentHeader}>Bezpieczny przykład konfiguracji Traefik</h3>
            <p className={styles.sectionContentText}>Poniżej skonfigurujemy serwis Traefik, tak aby korzystał z Docer Socet za pomocą proxy, oraz całkowicie wyłączymy dostęp do Traefik Dashboard.</p>

            <CodeBlock
              description="Plik konfiguracyjny traefik-compose.yml (Development - Traefik Dashboard)"
              commands={[
                "services:",
                "&emsp;socket-proxy: <var>--New Service - Socket Proxy</var>",
                '&emsp;&emsp;image: "tecnativa/docker-socket-proxy"',
                '&emsp;&emsp;container_name: "socket-proxy"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;- CONTAINERS=1',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "/var/run/docker.sock:/var/run/docker.sock:ro"',
                "",
                "&emsp;traefik: <var>--Modified Traefik Service</var>",
                '&emsp;&emsp;image: "traefik:latest"',
                '&emsp;&emsp;depends_on:',
                '&emsp;&emsp;&emsp;- "socket-proxy"',
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "80:80"',
                '&emsp;&emsp;&emsp;- "443:443"',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"<var>--Connect to Socket Proxy</var>',
                '&emsp;&emsp;&emsp;- "traefik-external"<var>--Traefick Network</var>',
                '&emsp;&emsp;command:',
                '&emsp;&emsp;&emsp;- "--providers.docker.endpoint=tcp://socket-proxy:2375"<var>--Use Socket Proxy</var>',
                '&emsp;&emsp;&emsp;- "--providers.docker.exposedbydefault=false"',
                '&emsp;&emsp;&emsp;- "--entrypoints.web.address=:80"',
                '&emsp;&emsp;&emsp;- "--entrypoints.websecure.address=:443"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.tlschallenge=true"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.email=<var>EMAIL</var>"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "./letsencrypt:/letsencrypt"',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true"',
                "",
                "networks:",
                "&emsp;traefik-socket-proxy: <var>--Internal Network for Socket Proxy</var>",
                '&emsp;&emsp;name: "traefik-socket-proxy"',
                "&emsp;traefik-external: <var>-- Network that host External Websites</var>",
                '&emsp;&emsp;name: "traefik-external"',
              ]}
            />
            <p className={styles.sectionContentText}>Porównaj powyższy bezpieczny przykład z poprzednim. Aktualne rozwiązanie nie udostępnia Traefick Dashbord oraz wykorzystuje dodatkowy serwis jakim jest Socket-Proxy, które pozwala na ograniczoną komunikację naszego Traeficka z Socetem Dockera. W razie potrzeb za pomocą zmiennych środowiskowych można dodatkowo dokonać bardziej restrykcyjnej konfiguracji proxy.</p>
          </div>
        </section>
        {/* Bezpieczna konfiguracja Traefik */}
        <section id="hosting-strony-internetowej" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Hosting strony internetowej Traefik</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Struktura Pliku Konfiguracyjnego Traefik</h3>
            <p className={styles.sectionContentText}>Jak zauważyliśmy na powyrzszych przykładach konfiguracja Traefika nie jest niczym skoplikowanym, jednakże kiedy zaczynamy definiować nasze serwisy musimy spełnić jeden ważny wymóg. Przeanalizuj dokładnie poniższy przykład...</p>
            <Image className={styles.blogImg} src={traefik_labels_example} alt="Przykładowa konfiguracja Traefika " style={{ maxWidth: 770 }} />
            <ArticleImportantInfo
              type="warning"
              title="Service - Labels"
              content='Zwróć uwagę na zaznaczone na zółto fragmenty kodu. Zdefinjowaliśmy serwis o nazwie "testing", a następnie w sekcji "labels" użyliśmy jego nazwy tuż po frazie "routers". <br/><br/> Jest to sposób w jaki nalezy przypisywać nazwy serwisów do labeli za pomocą Traefika. Jeśli popełnisz w tym miejscu błąd Traefik nie bedzie w stanie zlokalizować Twojego kontenera. <br/><br/> Pamiętaj aby zawsze dokonywać przypisania tak jak w powyższym przykładzie, adekwatnie do nazw swoich serwisów.'
            />
            <ul>
              <li><strong style={{ fontWeight: 600 }}>image: traefik/whoami</strong> - Nasz Obraz Aplikacji</li>
              <li><strong style={{ fontWeight: 600 }}>container_name: "testing"</strong> - Nazwa Naszego Kontenera</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.enable=true"</strong> - Uruchamia Routing dla danego kontenera</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.rule=Host(`example.com`)"</strong> - Określa adres URL pod jakim znajdować ma się aplikacja</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.entrypoints=websecure"</strong> - Informuje Traefik aby hostować aplikację za pośrednictwem portu 443 (HTTPS)</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.certesolver=myresolver"</strong> - Informuje Traefik o aby korzystać z naszego agenta SSL (Let's Encrypt)</li>
              <li><strong style={{ fontWeight: 600 }}>traefik.http.routers.SERVICE_NAME.middlewares=waf@docker"</strong> - Informuje Traefik o aby dana aplikacja korzystała z podanego middleware'a</li>
              <li><strong style={{ fontWeight: 600 }}>networks:</strong> - W tej sekcji standradowo podpianmy aplikację do stworzonej przez nasz sieci Traefik-External (Sieć publiczna)</li>
            </ul>
            <h3 className={styles.sectionContentHeader}>Cały plik konfiguracyjny Traefik z podpiętą stroną HTTP</h3>
            <p className={styles.sectionContentText}>Poniżej cały plik konfiguracyjny, zawierający uruchomioną stronę internetową.</p>

            <CodeBlock
              description="Przykładowa bezpieczna konfiguracja Traefik z jedną stroną internetową"
              commands={[
                "services:",
                "&emsp;socket-proxy: <var>--Socket Proxy</var>",
                '&emsp;&emsp;image: "tecnativa/docker-socket-proxy"',
                '&emsp;&emsp;container_name: "socket-proxy"',
                '&emsp;&emsp;environment:',
                '&emsp;&emsp;&emsp;- CONTAINERS=1',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "/var/run/docker.sock:/var/run/docker.sock:ro"',
                "",
                "&emsp;traefik: <var>--Traefik Service</var>",
                '&emsp;&emsp;image: "traefik:latest"',
                '&emsp;&emsp;depends_on:',
                '&emsp;&emsp;&emsp;- "socket-proxy"',
                "&emsp;&emsp;ports:",
                '&emsp;&emsp;&emsp;- "80:80"',
                '&emsp;&emsp;&emsp;- "443:443"',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-socket-proxy"',
                '&emsp;&emsp;&emsp;- "traefik-external"',
                '&emsp;&emsp;command:',
                '&emsp;&emsp;&emsp;- "--providers.docker.endpoint=tcp://socket-proxy:2375"',
                '&emsp;&emsp;&emsp;- "--providers.docker.exposedbydefault=false"',
                '&emsp;&emsp;&emsp;- "--entrypoints.web.address=:80"',
                '&emsp;&emsp;&emsp;- "--entrypoints.websecure.address=:443"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.tlschallenge=true"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.email=<var>EMAIL</var>"',
                '&emsp;&emsp;&emsp;- "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"',
                '&emsp;&emsp;volumes:',
                '&emsp;&emsp;&emsp;- "./letsencrypt:/letsencrypt"',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true"',
                "",
                "&emsp;your-app: <var>-- Our Website</var>",
                '&emsp;&emsp;image: "traefik/whoami"',
                '&emsp;&emsp;container_name: "your-app"',
                '&emsp;&emsp;labels:',
                '&emsp;&emsp;&emsp;- "traefik.enable=true" <var>-- Enable Traefik on your app</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.your-app.rule=Host(`whoami.jakubwojtysiak.online`)" <var>-- Replace with your domain</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.your-app.entrypoints=websecure" <var>-- Host webiste on 443 (HTTPS)</var>',
                '&emsp;&emsp;&emsp;- "traefik.http.routers.your-app.tls.certresolver=myresolver" <var>-- Use Lets Encrypt Cert Resolver</var>',
                '&emsp;&emsp;networks:',
                '&emsp;&emsp;&emsp;- "traefik-external" <var>-- Attach website to external network, so Traefik can discover it (We have to use it as we decided to use Traefik Socket Proxy)</var>',
                "",
                "networks:",
                "&emsp;traefik-socket-proxy:",
                '&emsp;&emsp;name: "traefik-socket-proxy"',
                "&emsp;traefik-external:",
                '&emsp;&emsp;name: "traefik-external"',
              ]}
            />
            <CodeBlock
              description="Uruchom plik compose.yml"
              commands={[
                "docker compose up -d",
              ]}
            />
            <p className={styles.sectionContentText}>Po przejściu na wybraną przez siebie domenę powinieneś zobaczyć prostą aplikację która wyświetli informacje o Twoim zapytaniu wysłanym na serwer. Dokładnie tym samym sposobem będziesz w stanie uruchomić dowolne aplikacje webowe.</p>
          </div>
        </section>
      </article>
    </main >
  )
}