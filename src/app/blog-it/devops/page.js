import styles from "@/scss/pages/blogArticle.module.scss";

import ArticleHeader from "@/components/blogComponents/ArticleHeader";
import CodeBlock from "@/components/blogComponents/CodeBlock";
import ArticleImportantInfo from "@/components/blogComponents/ArticleImportantInfo";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/ubuntu_blog.webp";
import firewallChart from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/firewall_chart.png";
import firewallConfig from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/firewall_config.png";
import output1 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_1.png";
import output2 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_2.png";
import output3 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_3.png";
import output4 from "@/../public/blogImgs/bezpieczna-konfiguracja-vps/output_4.png";



export const metadata = {
  title: 'Jak bezpiecznie skonfigurowć mój pierwszy serwer VPS?',
  description: 'Konfiguracja Twójego pierwszego serwera VPS w bezpieczny sposób nie jest tak straszna jak Ci się wydaje...',
  alternates: {
    canonical: 'https://jakubwojtysiak.pl/nauka-it',
    languages: {
      'pl-PL': 'https://jakubwojtysiak.pl/nauka-it',
    }
  }
}

export default function ArticlePage() {
  return (
    <main className={styles.articlePage}>
      <article>
        <div className={styles.articleContainer}>
          <ArticleHeader
            h1="Jak <span class='purple'>bezpiecznie</span> skonfigurować mój pierwszy serwer VPS?"
            articleInfo={{ time: "1 godzina", specialization: "DevOps", level: "Junior" }}
            headerImg={articleHero}
            contentsTitle="Konfiguracja Serwera VPS Krok po Kroku"
            contents={[
              { text: "Wprowadzenie do VPS", url: "#wprowadzenie-do-vps", icon: "pageIcon" },
              { text: "Logowanie i Aktualizacja Linuxa", url: "#logowanie-i-aktualizacja-linuxa", icon: "pageIcon" },
              { text: "Konfiguracja Firewall'a Linux", url: "#konfiguracja-firewalla-linux", icon: "pageIcon" },
              { text: "Nowy Sudoer + SSH Key", url: "#nowy-sudoer-i-ssh-key", icon: "pageIcon" },
              { text: "Bezpieczna Konfiguracja SSH", url: "#bezpieczna-konfiguracja-ssh", icon: "pageIcon" },
              { text: "Instalacja i Konfiguracja Fail2ban", url: "#instalacja-i-konfiguracja-fail2ban", icon: "pageIcon" },
              { text: "Instalacja i Konfiguracja antywirusa", url: "#instalacja-i-konfiguracja-clamav", icon: "pageIcon" }
            ]}
          />
        </div>
        {/* Wprowadzenie Do VPS */}
        <section id="wprowadzenie-do-vps" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Wprowadzenie do VPS</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Co to jest server VPS? (Virtual Private Server)</h3>
            <p className={styles.sectionContentText}>Wirtualny serwer prywatny (VPS) to idealne rozwiązanie dla tych, którzy potrzebują większej kontroli i elastyczności niż w przypadku tradycyjnego hostingu. VPS zapewnia dedykowane zasoby, większe bezpieczeństwo(poprawnie skonfigurowany) i wydajność. To doskonały wybór dla rozwijających się firm, programistów i stron o dużym ruchu. Dzięki VPS możesz łatwo skalować swoje zasoby, zarządzać aplikacjami i cieszyć się niezależnością serwera dedykowanego w przystępnej cenie.</p>
            <h3 className={styles.sectionContentHeader}>2. Dlaczego wybrać VPS zamiast Hostingu Współdzielonego?</h3>
            <p className={styles.sectionContentText}>Wybór VPS zamiast hostingu współdzielonego zapewnia większą wydajność, bezpieczeństwo i elastyczność. VPS daje dedykowane zasoby, co eliminuje ryzyko spadku wydajności przez innych użytkowników. Oferuje także pełną kontrolę nad konfiguracją serwera i możliwość dostosowania zasobów do indywidualnych potrzeb. Idealny dla stron o większym ruchu i firm, które potrzebują stabilności oraz lepszej ochrony danych.<br /><br />Ponad to kiedy korzystamy z usług Hostingu Współdzielonego jestesmy w stanie uruchomić tylko jedną aplikację, przypisaną do danego hostingu. Jesteśmy w ten sposób ograniczeni technologicznie oraz kosztowo. Aktualnie ceny Hostingów Współdzielonych zaczynają się zazwyczaj od 100 zł za rok, natomiast taniego VPS będziemy w stanie dostać już nawet od 260 zł za rok.<br /><br />Spytacie się, gdzie pojawia się ta oszczędność VPS nad Hostingiem Współdzielonym?Otóż, tak jak wspominałem wcześniej, na Hostingu Współdzielonym jesteśmy w stanie odpalić tylko jedną stronę internetową, natomiast VPS umożliwia nam hostowanie nieograniczonej ilości stron, którą ograniczają tylko nasze zasoby systemowe.<br /><br />Warto również na sam konieć wspomnieć o bardzo ważnym aspekcie jakimi są ograniczenia technologiczne Hostingów Współdzielonych. Ponad 90% providerów Hostingów Współdzielonych w głównej mierze nastawiona jest na obsługę aplikacji typy Wordpress, przez co może się okazać niemożliwe uruchomienie na takie usłudze aplikacji opartych o technologie typu React, Laravel, Django czy .NET</p>
            <h3 className={styles.sectionContentHeader}>3. Gdzie zakupić serwer VPS?</h3>
            <p className={styles.sectionContentText}>Zakup serwera VPS warto rozważyć u renomowanych dostawców, takich jak OVH, Hetzner, Hostinger, Google czy DigitalOcean. Kluczowe kryteria to niezawodność, wydajność oraz wsparcie techniczne. Koniecznie zwróć uwagę na lokalizację serwerów, opcje skalowalności i dostępność dodatkowych usług, takich jak backupy, zewnętrzny firewall i ochrona DDoS. Porównaj oferty i zdecyduj się na rozwiązanie adekwatne do Twoich potrzeb.<br /><br />Osobiście obsługuję swoich klientów za pomocą rozwiązań firmy Hostinger (artykuł niesponsorowany, niestety...).<br /><br />Firma ta oferuje oferuje nam VPS w bardzo przystępnych cenach. Do wyboru mamy lokacje serwerów na całym świecie. Dodatkowo mamy dostęp do takich funkcjonalności jak Zewnętrzny Firewall, Tygodniowe Backupy(w cenie), Podstawowy monitoring serwera, czy podstawowego antywirusa.</p>
            <Link href="https://hostinger.pl?REFERRALCODE=1WAIROUS35G77" target="_blank" className={styles.linkBtn}>Kup serwer VPS</Link>
          </div>
        </section>
        {/* LOGOWANIE I AKTUALIZACJA LINUXA */}
        <section id="logowanie-i-aktualizacja-linuxa" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Logowanie i aktualizacja Linuxa</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Zanim zaczniesz działania z VPS</h3>
            <p className={styles.sectionContentText}>Zanim rozpoczniemy bezpieczną konfigurację naszego serwera VPS musisz mieć z tyłu głowy jedną bardzo ważną kwestię, mianowicie fakt, że Linux jako system oepracyny posiada bardzo wiele różnych dystrybucji, które różnią się nie tylko zastosowaniami, ale również i architekturą. Oznacza to, że w zależności od wybranej dystrybucji może okazać się konieczne wykorzystywanie innych komend w celu wykonania danych operacji.<br /><br />Osobiście używam systemu Ubuntu i niniejszy tutorial został napisany z myślą o użytkownikach tego systemu. Jeśli kożystasz z innej dystrybucji Linuxa nic jeszcze nie zostało stracone.<br /><br />W dalszym ciągu możesz wykrozystać niniejszy materiał jednakże samodzielnie będziesz musiał znaleźć w kilku miejscach adekwatne komendy dla twojej dystrybucji systemu operacyjnego.<br /><br />Ponadto niniejszy artykuł zakłada, że posiadasz już dokonany deployment swojego Linuxa i jesteś w stanie zalogować się do niego za pomocą SSH.<br /><br />Jeśli nie wiesz jak samodzielnie dokonać takiej czynności zapraszam Cię do niniejszego artykułu w którym razem, krok po kroku instalujemy naszego Linuxa na serwerach zewnętrznego Dystrybutora Serwerów VPS</p>
            <h3 className={styles.sectionContentHeader}>1. Jak zalogować się do Linuxa? (SSH)</h3>
            <p className={styles.sectionContentText}>SSH (Secure Shell) to protokół sieciowy zapewniający bezpieczną komunikację między komputerami. Umożliwia zdalne logowanie, zarządzanie serwerami i przesyłanie plików, chroniąc dane dzięki szyfrowaniu. SSH jest niezastąpiony dla administratorów systemów i programistów, gwarantując prywatność i integralność informacji. Jest standardowym narzędziem w zarządzaniu serwerami, stosowanym w różnych środowiskach IT.</p>
            <CodeBlock
              description="W celu pierwszego zalogowania się do swojej maszyny wykonaj komendę (Użyj terminala np. Powershell lub Terminus)"
              commands={[
                "ssh -p 22 root@<var>ip-naszego-vps</var>"
              ]}
            />
            <p className={styles.sectionContentText}>W trakcie pierwszego logowania zostaniesz poproszony o potwierdzenie utworzenia kluczy. Po akceptacji zostaniesz połączony ze swoim serwerem.</p>
            <ArticleImportantInfo
              type="warning"
              title="Logowanie jako Root"
              content="Aktualnie dokonałeś logowania do swojego serwera VPS jako Root (Super User). Praktyka taka nie jest nigdy zalecana, póki nie jesteś zaawansowanym użytkownikiem. Mimowszystko jest ona wymagana przy pierwszej konfiguracji naszego serwera.<br/><br/>W późniejszym etapie zaimplementujemy podstawowe zasady bezpieczeństwa, całkowicie blokując możliwość zalogowania się zdalnie do systemu jako Root. "
            />
            <h3 className={styles.sectionContentHeader}>2. Jak zaktualizować system Linux? (Ubuntu)</h3>
            <p className={styles.sectionContentText}>Pierwszym krokiem po zalogowaniu do nowej maszyny powinna być jej aktualizacja. Jeśli poznałeś już podstawy Linuxa poniższe komendy nie powinny być Ci obce.</p>
            <CodeBlock
              commands={[
                'sudo apt update && sudo apt upgrade -y'
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Nie znasz jeszcze komend Linuxa?"
              content="Na początku Twojej przygody z Administracją Linuxem wiele komend może być Ci obcych i niezrozumiałych.</br/>Nie obawiaj się tego, samemu jak zaczynałem również wielu rzeczy nie znałem. Na szczęście zyjemy w czasach z dostepem do internetu :)<br/>W internecie dostpenych jest wiele aplikacji typu Shell Explain! "
              cta={{ link: "https://shell.how", text: "Przejdź do serwisu shell.how &rarr;" }}
            />
          </div>
        </section>
        {/* Konfiguracja Firewall'a Linux */}
        <section id="konfiguracja-firewalla-linux" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Konfiguracja Zapory Sieciowej Linux (Firewall)</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Zanim zaczniesz działania konfigurację Firewall'a</h3>
            <p className={styles.sectionContentText}>Zapora sieciowa jest podstawowym narzędziem do kontrolowania ruchu przychodzącego i wychodzącego z Twojego serwera. Jest ona pierwszym elementem całego systemu do którego docierają wszelkie zapytania kierowane na Twój serwer VPS. Poprawnie skonfigurowana zapora sieciowa jest w stanie niemalże całkowicie zabezpieczyć nasz system, ale i również w przypadku zbyt agresywnego jej zaprogramowania możemy zablokować dostęp do naszych aplikacji sieciowych.<br /><br />Zanim przejdziemy do sedna sprawy, warto abyś wiedział, że wyróżniamy 2 typy firewall-ów:</p>
            <ul>
              <li>Firewall Zewnętrzny (np. ten od dostawcy VPS)</li>
              <li>Firewall Wewnętrzny (aktywny bezpośrednio na naszym Linuxie) </li>
            </ul>
            <Image className={styles.blogImg} src={firewallChart} alt="Konfiguracja Firewalla Zewnętrznego + Wewnętrzengo" />
            <p className={styles.sectionContentText}>Zapora sieciowa działa jako swego rodzaju filtr przez który przechodzą wszystkie zapytania kierowane na nasz serwer. To od nas zalezy na jaki ruch zezwolimy. Konfiguracja zapory w głównej mierze opiera się na dostepie do poszczególnych Portów naszego systemu.<br /><br />Gdybyś miał problemy z uruchomieniem jakieś aplikacji na serwerze produkcyjnym upewni się w pierwszej kolejności, że port na któym nadaje dana aplikacja nie jest zablokowany przez jeden z wyżej wymionych Firewall’i</p>
            <h3 className={styles.sectionContentHeader}>1. Jak skonfigurować zewnętrzny firewall?</h3>
            <p className={styles.sectionContentText}>Jeśli Twój provider serwera VPS nie posiada w swojej ofercie Zewnętrznego Firewalla możesz bez żadnych przeszkód pominąć ten etap.<br />Nie jest on konieczny, z uwagi na fakt, że wewnętrzna Linuxowa implementacja Firewall’a powinna być w 100% wystarczalna.<br /><br />Zewnętrzny Firewall pełni funkcję dodatkowego zabezpieczenia, które ułatwia pracę w głównej mierze za pomocą GUI.<br /><br />Poniżej znajduje się przykładowa konfiguracja mojego zewnętrznego firewalla u providera Hostinger.</p>
            <ul>
              <li>Blokuje ona dostępy do wszystkich dostępnych portów TCP oraz UDP</li>
              <li>Otwiera porty 80 i 443 (Aplikacje Webowe)</li>
              <li>Otwiera port 22 dla wskazanego adresu IP (SSH z filtrem IP)</li>
            </ul>
            <Image className={styles.blogImg} src={firewallConfig} alt="Konfiguracja Firewalla Wewnętrznego" style={{ maxWidth: 640 }} />
            <h3 className={styles.sectionContentHeader}>2. Jak skonfigurować firewall Linux? (UFW)</h3>
            <p className={styles.sectionContentText}>Przyszła pora na to co tygrysy lubią najbardziej, czyli powrót do starego i sprawdzonego Command Line’a.<br />Poniżej zaimplementujemy dokładnie to samo rozwiązanie co w Zewnętrznym Firewall’u.<br /><br />W tym celu wykorzystamy uproszczony interfejs zarządzania Firewall’em Linuxa zwany UFW (Uncomplicated Firewall)<br />Dokonamy następujących czynności:</p>
            <ul>
              <li>Zablokujemy wszystkie połączenia przychodzące</li>
              <li>Odblokujemy wsyzstkie połączenia wychodzące</li>
              <li>Zezwolimy na dostęp do SSH (Port 22)</li>
              <li>Zezwolimy na dostep do portów 80 i 443</li>
            </ul>
            <CodeBlock
              description="Instalacja Uncomplicated Firewall"
              commands={[
                "sudo apt install ufw"
              ]}
            />
            <CodeBlock
              description="Konfiguracja podstawowych reguł UFW"
              commands={[
                "sudo ufw default deny incoming",
                "sudo ufw default allow outgoing",
                "sudo ufw allow ssh",
                "sudo ufw allow 80/tcp",
                "sudo ufw allow 443/tcp"
              ]}
            />
            <CodeBlock
              description="Włączenie UFW"
              commands={[
                "sudo ufw enable",
                "sudo ufw status"
              ]}
            />
            <p className={styles.sectionContentText}>Tym sposobem udało nam się skonfigurować nasz wewnętrzny Firewall w bezpieczny sposób. Zablokowalismy dostęp do wszystkich portów i zezwoliliśmy tylko na dostep do SSH (Port 22) oraz portów 80, 443 na których w przyszłości będzie nasłuchiwało nasze Reverse-Proxy w celu Hostowania naszych aplikacji webowych.</p>
            <ArticleImportantInfo
              type="warning"
              title="Filtracja IP dla Portu SSH(22)"
              content="Jeśli zdecydujesz się na implementację dostępu do portu 22 tylko za pomocą wybranych IP za pomocą UFW możesz stracić dostęp do swojego serwera<br/><br/>Stać się może tak w przypadku kiedy dostawca Twójego internetu rotuje adresami IP. Zanim zdecydujesz się na taki zabieg, upewni się w 100%, że Twój adres IP jest statycznie zdefiniowany. <br/><br/>W przypadku gdyby okazało się, że Twój adres IP jestdynamiczny, zawsze możesz zaimplementować filtrację IP dla Portu SSH(22) za pomocą Zewnętrzengo Firewall'a."
            />
          </div>
        </section>
        {/* Nowy Użytkownik Sudoer + SSH Key */}
        <section id="nowy-sudoer-i-ssh-key" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Nowy Użytkownik z uprawnieniami sudo + SSH Key</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Jak utworzyć nowego użytkownika sudo Linux?</h3>
            <p className={styles.sectionContentText}>Użytkownik z uprawnieniami sudo inaczej nazywany jest Superuserem, ze względu na fakt posiadania możliwości wykonywania akcji zarezerwowanych tylko dla Roota. Konto które posiada takie uprawnienia można nazwać mianem konta administracyjnego.</p>
            <CodeBlock
              description="Utwórz nowego użytkownika"
              commands={[
                "sudo adduser <var>nazwa-użytkownika</var>"
              ]}
            />
            <CodeBlock
              description="Nadaj uprawnienia do komendy sudo nowemu użytkownikowi"
              commands={[
                "sudo usermod -aG sudo <var>nazwa-użytkownika</var>"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>2. Jak utworzyć klucze SSH dla nowego użytkownika Linux?</h3>
            <p className={styles.sectionContentText}>W następnej sekcji zwiększymy bezpieczeństwo naszego serwera zezwalając na logowanie do niego tylko za pomocą Kluczy SSH.<br />Na poczatku tego tutoriala wykorzystałeś do zalogowania się do serwera po SSH swojego hasła dla danego użytkownika.<br /><br />Podejście takie jest o tyle niebezpieczne, że w skrajnych przypadkach, kiedy Twoje hasło zostanie skompromitowane, nieuprawniona osoba otrzyma dostęp do Twojego serwera VPS, dzięki czemu będzie z nim mogła zrobić co tylko jej się spodoba.<br /><br />Rozwiązaniem tego problemu jest ograniczenie logowania SSH tylko do wykorzystania Kluczy SSH.<br />W takim przypadku, tak długo jak Twój plik z kluczem będzie bezpiecznie u Ciebie składowany, tak długo nikt nie będzie w stanie zalogować się do Twojego serwera za pomocą SSH.<br /><br />Niniejszy tutorial zakłada, że nie posiadasz na swoim Lokalnym Komputerze jeszcze żadnych kluczy SSH </p>
            <CodeBlock
              description="Na swoim lokalnym komputerze wykonaj następującą komendę w celu wygenerowania pary kluczy SSH (np. Windows, Mac)"
              commands={[
                "ssh-keygen -t rsa -b 4096"
              ]}
            />
            <p className={styles.sectionContentText}>Wykorzystanie tej komendy spowoduje utworzenie dwóch plików na Twoim Lokalnym komputerze pod następującą ścieżką <span className={styles.pathBox}>C:\Users\user-name\.ssh</span></p>
            <ul>
              <li>id_rsa - Twój prywatny klucz SSH (Umieść na VPS)</li>
              <li>id_rsa.pub - Publiczny Klucz SSH (Wykorzystaj w celu zalogowania)</li>
            </ul>
            <ArticleImportantInfo
              type="warning"
              title="Wykonaj kopię kluczy SSH"
              content="Bardzo ważne jest aby swój lokalny plik id_rsa zapisać na jakimś przenośnym dysku, gdyż w przypadku jego usunięcia lub malformacji, nie będziesz w stanie zalogować się do swojego serwera VPS!!!."
            />
            <h3 className={styles.sectionContentHeader}>3. Jak dodać klucze SSH do nowego użytkownika Linux na VPS?</h3>
            <p className={styles.sectionContentText}>Kolejnym krokiem jest odpowiednie przygotowanie konta użytkownika Linux, które stworzyłeś w pierwszym podpunkcie ninijeszego etapu.<br /><br />Do wykonania mamy następujące kroki:</p>
            <ol>
              <li>Skopiowanie Klucza Publicznego z komputera Lokalnego na nasz Server VPS</li>
              <li>Dodanie Klucza Publicznego do konta naszego nowego Użytkownika Linux</li>
              <li>Przetestowanie konfiguracji (Koniecznie)</li>
            </ol>
            <CodeBlock
              description="Na serwerze VPS musisz wykonać nastepujące komendy w celu utworzenia katalogu SSH dla nowego Uzytkownika"
              commands={[
                "mkdir /home/<var>nazwa-nowego-użytkownika</var>/.ssh"
              ]}
            />
            <CodeBlock
              description="Zmień przynależność nowego katalogu z Roota na Nowego Uzytkownika"
              commands={[
                "sudo chown -R <var>n-n-użytkownika</var>:<var>n-n-użytkownika</var> /home/<var>n-n-użytkownika</var>/.ssh"
              ]}
            />
            <CodeBlock
              description="Na swoim lokalnym komputerze wykonaj następującą komendę w celu skopiowania Klucza Publicznego na Serwer VPS"
              commands={[
                "scp C:/Users/<var>nazwa-użytkonika</var>/.ssh/id_rsa.pub <var>nazwa-nowego-użytkownika</var>@<var>ip-servera-vps</var>:~/.ssh"
              ]}
            />
            <p className={styles.sectionContentText}>Zostaniesz poproszony o wprowadzenie hasła dla stworzonego przez Ciebie nowego użytkownika.<br />Kiedy wszystko przejdzie pomyślnie, powinineś posiadać plik id_rsa.pub w folderze .ssh swojego nowego użytkownika Linux.</p>
            <CodeBlock
              description="Ostatnim krokiem jest dodanie Klucza SSH do Autoryzowanych Kluczy na Serwerze VPS"
              commands={[
                "cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys",
                "rm ~/.ssh/id_rsa.pub"
              ]}
            />
            <p className={styles.sectionContentText}>Tym sposobem poprawnie dodałeś swój Klucz SSH do Autoryzowanych kluczy na serwerze.<br />W kolejnych etapach poradnika dowiesz się jak aktywować możliwość logowania za pomocą Kluczy SSH</p>
          </div>
        </section>
        {/* Bezpieczna Konfiguracja SSH */}
        <section id="bezpieczna-konfiguracja-ssh" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Bezpieczna Konfiguracja SSH (Secure Shell)</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Jak zmienić domyślny port SSH?</h3>
            <p className={styles.sectionContentText}>SSH (Secure Shell) to protokół używany do zdalnego zarządzania serwerem. Domyślne ustawienia SSH mogą być potencjalnie niebezpieczne, dlatego warto je odpowiednio skonfigurować.<br /><br />Domyślny port SSH (22) jest często celem ataków. Zmiana portu na inny może utrudnić potencjalnym hakerom dostęp do serwera.</p>
            <ArticleImportantInfo
              type="hint"
              title="Podpowiedź !"
              content="Pamiętaj że nie jest to krok konieczny, możesz również dokonać fitlracji akceptowalnych IP na port 22 za pomocą Firewall’a<br/>Jeśli jesteś bardziej zaawansowanym użytkownikiem możesz również rozważyć zastosowanie metody Port Knock.<br/>Pamiętaj że ilość możliwych rozwiązań jest niegoraniczona a jedynymi ograniczeniami mogą być te związane z brakiem doświadczenia."
            />
            <CodeBlock
              description="Wykonaj kopię zapasową pliku sshd_config (na wszelki wypadek)"
              commands={[
                "sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup"
              ]}
            />
            <CodeBlock
              description="Otwórz dokument sshd_config za pomocą wybranego edytora tekstu Linux (np. nano)"
              commands={[
                "sudo nano /etc/ssh/sshd_config"
              ]}
            />
            <CodeBlock
              description="Odnajdź linijkę zawierającą tekst  #Port 22"
              commands={[
                "port 2200 <-- Usuń znak # i wprowadź nowy port SSH (np. 2200)"
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Podpowiedź !"
              content="Jeśli tak jak ja używasz edytora tekstu nano możesz użyć następujących skrótów:<br/><br/>CTRL + W <-- Wyszukaj<br/>CTRL + S <-- Zapisz Plik<br/>CTRL + X <-- Wyjdz z edytora<br/><br/>Większość przydatnych skrótów powinna być widoczna na dole ekranu po otworzeniu edytora."
            />
            <p className={styles.sectionContentText}>Zapisz zmiany</p>
            <ArticleImportantInfo
              type="warning"
              title="Ostrzeżenie !"
              content="Pamiętaj aby przed dokonaniem zmian wprowadzić odpowiednie poprawki do swojego Zewnętrznego i Wewnętrznego Firewalla tak aby zezwalał na połączenia do nowego portu SSH. W innym wypadku zostaniesz bez dostępu do serwera...<br/><br/>Pamiętaj aby po wprowadzeniu nowych regół zrestartować UFW w celu implementacji nowej konfiguracji !!! (Komenda w kolejnym kroku)"
            />
            <h3 className={styles.sectionContentHeader}>2. Jak wyłączyć logowanie do root'a Linux?</h3>
            <p className={styles.sectionContentText}>Logowanie się jako root bezpośrednio przez SSH jest niebezpieczne. Lepszym rozwiązaniem jest użycie konta użytkownika z uprawnieniami sudo.</p>
            <CodeBlock
              description="W celu dokonania blokady ponownie otwórz plik sshd_config i dodaj na końcu pliku następującą informację"
              commands={[
                "PermitRootLogin no <-- Dodaj na końcu pliku lub znajdź w pliku"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. Jak włączyć logowanie za pomocą kluczy SSH w Linuxie?</h3>
            <p className={styles.sectionContentText}>Dlaczego powinnismy stosować klucze SSH zostało wyjaśnione w poprzednim rozdziale. Jednakże nadal nie wiemy jak pozwolić na ich wykorzystanie.</p>
            <CodeBlock
              description="Ponownie otwórz plik sshd_config i upewni się że podana opcja jest włączona"
              commands={[
                "PubkeyAuthentication yes <--  Nie może być przed nią znaku #"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>4. Jak zrestartować serwis SSH w Linuxie?</h3>
            <p className={styles.sectionContentText}>W celu wprowadzenia dokonanych przez nas zmian konieczny będzie restart serwisu SSH</p>
            <CodeBlock
              description="Wykonaj następującą komendę na swoim VPS Linux"
              commands={[
                "sudo systemctl restart ssh"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>5. Jak wykorzystać klucz SSH do zalogowania się do Linuxa?</h3>
            <p className={styles.sectionContentText}>Zanim przejdziemy dalej upewnij się, że Twoje klucze SSH zostały pomyślnie skonfigurowane.</p>
            <CodeBlock
              description="Otwórz nowy Terminal na swoim Lokalnym Komputerze i wykonaj następującą komendę"
              commands={[
                "ssh -p <var>nowy-port-ssh</var> <var>n-n-użytkownika</var>@<var>ip-vps</var> -i <var>ścieżka-do-id_rsa</var>"
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Gdzie znajduje się plik id_rsa ?"
              content='Twój plik id_rsa odnajdziesz po wpisaniu w terminal komendy “ ~/.ssh” (Komputer Lokalny)'
            />
            <ArticleImportantInfo
              type="how"
              title="Czy klucze SSH działają poprawnie?"
              content='Jeśli wszystko zostało poprawnie skonfigurowane w trakcie logowania do SSH z Kluczem nie powinieneś zostać poproszony o hasło.<br/>Jeśli mimowszystko zostałeś poproszony o hasło użytkownika, oznacza to, że w któymś miejscu popełniłeś błąd.<br/><br/>Pamiętaj aby nie pomylić prośby o hasło użytkownika z prośbą o hasło do klucza id_rsa<br/>Jeśli tworząc klucze wprowadziłeś “phasphrase” zostaniesz wtedy poproszony o podanie hasłą do swojego Klucza id_rsa, co jest normalnym zachowaniem.'
            />
            <p className={styles.sectionContentText}>Kiedy jesteś już w 100% pewny że Twoje klucze SSH działają poprawnie możesz przejść do kolejnego podpunktu.</p>
            <h3 className={styles.sectionContentHeader}>6. Jak zablokować logowanie SSH do Linuxa z wykorzystaniem hasła?</h3>
            <p className={styles.sectionContentText}>Niniejsza operacja jest opcjonalna, jednakże jej implementacja w znaczny sposób podwyższa bezpieczeństwo Twojego serwera VPS.<br /><br />Ponownie otwórz plik sshd_config i sprawdź jaki katalog zawiera w pierwszej linijce.<br />W moim przypadku jest to <span className={styles.pathBox}>/etc/ssh/sshd_config.d</span></p>
            <Image className={styles.blogImg} src={output1} alt="Poczatek pliku sshd_config" style={{ maxWidth: 360 }} />
            <p className={styles.sectionContentText}>Przejdz do powyższego katalogu i sprawdź jakie pliki zawiera </p>
            <CodeBlock
              description="Przejdź do katalogu"
              commands={[
                "cd <var>/scieżka/do/twojego/katalogu</var>"
              ]}
            />
            <CodeBlock
              description="Wylistuj katalog"
              commands={[
                "ls -la"
              ]}
            />
            <p className={styles.sectionContentText}>W moim przypadku otrzymałem następujące rezulataty</p>
            <Image className={styles.blogImg} src={output2} alt="Katalog /etc/ssh/sshd_config.d" style={{ maxWidth: 600 }} />
            <p className={styles.sectionContentText}>Wskazane pliki są dodatkowymi plikami konfiguracyjnymi SSH utworzonymi zazwyczaj przez Twojego dostawcę serwerów VPS.<br />Sprawdź jakie informacje zawierają Twoje pliki.<br />W moim przypadku plik który wymaga zmiany wygląda w sposób następujący</p>
            <Image className={styles.blogImg} src={output3} alt="Katalog /etc/ssh/sshd_config.d" style={{ maxWidth: 600 }} />
            <p className={styles.sectionContentText}>Edytuj każdy z plików, który zawiera powyższą linijkę tekstu zmieniając opcję “yes” na “no”</p>
            <CodeBlock
              description="Edytuj pliki"
              commands={[
                "sudo nano <var>nazwa-pliku</var>"
              ]}
            />
            <CodeBlock
              description='Podmień opcję “yes” na “no”'
              commands={[
                "PasswordAuthentication no"
              ]}
            />
            <ArticleImportantInfo
              type="warning"
              title="Zanim zrestartujesz serwis SSH"
              content='Przed dokonaniem powyższej operacji upewnij się, że Twoje Klucze SSH działają poprawnie.<br/>W innym wypadku na stałe utracisz dostęp do swojego VPS oraz danych w nim zawartych.<br/><br/>Jeśli jest to serwer testowy nic straconego, wystarczy go ponownie zdeployowa.<br/>Pamiętaj aby nie wykonywać takich działań na serwerze produkcyjnym, jeśli nie czujesz się jeszcze na siłach !!!'
            />
            <CodeBlock
              description="Zerstartuj serwis SSH"
              commands={[
                "sudo systemctl restart ssh"
              ]}
            />
            <p className={styles.sectionContentText}>W tym momencie powinniśmy wylogować się już z powłoki roota i zacząć korzystać z naszego nowo utworzonego konta Administratora.</p>
          </div>
        </section>
        {/* Konfiguracja Fail2Ban */}
        <section id="instalacja-i-konfiguracja-fail2ban" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Instalacja i Konfiguracja Fail2Ban</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Co to jest Fail2Ban?</h3>
            <p className={styles.sectionContentText}>Fail2Ban to narzędzie zabezpieczające serwery przed nieautoryzowanym dostępem. Monitoruje logi systemowe, wykrywając podejrzane aktywności, takie jak wielokrotne nieudane próby logowania. W przypadku wykrycia takiego zachowania, Fail2Ban blokuje adres IP źródła na określony czas, zmniejszając ryzyko ataków brute-force. Działa z różnymi usługami, jak SSH, Apache, czy Postfix, zapewniając elastyczną i skuteczną ochronę.<br /><br />W poniższej części tego kursu poznasz podstaswy konfiguracji oraz wykrozystania niniejszego narzędzia.</p>
            <ArticleImportantInfo
              type="how"
              title="Jak działa Fail2Ban?"
              content="Fail2Ban to narzędzie które w głównej mierze opiera się na zarządzaniu Twoim Wewnętrznym Firewallem. File2Ban stale monitoruje Twoje logi systemowe w celu wykrywania niechcianych zachowań. Kiedy dane zdarzenie z konkretnego adresu IP zostanie wykonane zbyt wiele razy Fail2Ban automatycznie doda nową regułę do Twojego Firewalla blokującą dany adres IP na okresloną ilość czasu. Kiedy okres banowania zostanie zakończony, dana reguła zostanie autoamtycznie usunięta z Wewnętrznego Firewalla."
            />
            <h3 className={styles.sectionContentHeader}>2. Jak zainstalować Fail2Ban?</h3>
            <CodeBlock
              description="W celu instalacji wykonaj komendę (jako Sudoer)"
              commands={[
                "sudo apt install fail2ban"
              ]}
            />
            <CodeBlock
              description="Zweryfikuj poprawność instalacji srpawdzając logi F2B, upewnij się że nie występują żadne błędy"
              commands={[
                "cat /var/log/fail2ban.log"
              ]}
            />
            <CodeBlock
              description="Sprwadź status serwisu F2B"
              commands={[
                "systemctl status fail2ban",
                "sudo fail2ban-client status"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. Jak skonfigurować Fail2Ban?</h3>
            <p className={styles.sectionContentText}>Usługa Fail2Ban przechowuje swoje dane konfiguracyjne w pliku jail.conf, który można znaleźć w katalogu /etc/fail2ban.<br />Zanim przejdziemy dalej sprawdźmy co kryje się w pierwszych 20 linijkach tego pliku.</p>
            <CodeBlock
              description="Sprawdź początek pliku /etc/fail2ban/jail.conf"
              commands={[
                "head -20 /etc/fail2ban/jail.conf"
              ]}
            />
            <Image className={styles.blogImg} src={output4} alt="Katalog /etc/ssh/sshd_config.d" style={{ maxWidth: 750 }} />
            <p className={styles.sectionContentText}>Łatwo zauważyć, że na poczatku pliku wszystkie pola  oznaczone są jako komentarze, o czym świadczy znak # na początku każdej lini.<br />Dane te służą jak wstępna instrukcja obsługi narzędzia Fail2Ban.<br /><br />Najważniejszą informacją jest fakt, aby bezpośrednio NIE zmieniać pliku jail.conf, a wszelkich zmian dokonywać za pomocą pliku jail.local</p>
            <ArticleImportantInfo
              type="hint"
              title="Porównanie plików - jail.conf vs jail.local"
              content="Plik jail.conf należy do pakietu instalacyjnego narzędzia Fail2Ban i jest plikiem który zostaje autoamtycznie nadpisany z każdą aktualizacją narzędzia.<br/>Jesli postanowiłbyś dokonac konfiguracji F2B w pliku jail.conf, z kolejną aktualizacją narzędzia utracił byś swój set up."
            />
            <p className={styles.sectionContentText}>Kiedy podstawy mamy już za sobą, pora dowiedzieć się jak skonfigurować fail2ban.</p>
            <CodeBlock
              description="Przejdź do folderu Fail2Ban"
              commands={[
                "cd /etc/fail2ban"
              ]}
            />
            <CodeBlock
              description="Skopiuj plik jail.conf do jail.local"
              commands={[
                "sudo cp jail.conf jail.local"
              ]}
            />
            <CodeBlock
              description="Otwórz plik jail.local i rozpocznij jego lekturę"
              commands={[
                "sudo nano -l jail.local"
              ]}
            />
            <p className={styles.sectionContentText}>Przeglądając plik jail.local możemy zauważyć, że w lini  41 znajduje się początek podstawowej konfiguracji Fail2Ban.<br /><br />Jeśli zejdziemy nieconiżej możemy dowiedzieć się, że:</p>
            <ul>
              <li>Maksymalna próba niudanych prób logowania może wyniesc max 5 (Linia 108)</li>
              <li>Okno czasowe wykrywania nieudanych prób logowania wynosi 10m (Linia 105)</li>
              <li>Czas banowania IP wynosi 10m (Linia 101)</li>
            </ul>
            <p className={styles.sectionContentText}>Powyższe parametry mówią nam, że jeżeli klient wykona 5 niepoprawnych prób logowania w przeciągu 10 minut to jego IP zostanie zbanowane na 10 minut. Po tym czasie jego adres IP zostanie ponownie odblokowany.</p>
            <h3 className={styles.sectionContentHeader}>4. Jak odczytać logi Fail2Ban?</h3>
            <p className={styles.sectionContentText}>Fail2Ban posiada również własny system logów który jest zkorelowany z innymi najwazniejszymi logami systemowymi.<br />Za jego pomocą możemy sprawdzić wszystkie najwazniejsze zdzarzenia jakie zostały zarejestrowane przez nasz system.</p>
            <CodeBlock
              description="Jak otworzyć log Fail2Ban ?"
              commands={[
                "sudo cat /var/log/fail2ban.log"
              ]}
            />
            <CodeBlock
              description="Jak otworzyć log SSH ?"
              commands={[
                "sudo cat /var/log/auth.log"
              ]}
            />
            <p className={styles.sectionContentText}>Poświęć 15 minut na samodzielną analize powyższych logów aby dogłębnie zrozumieć ich naturę.<br />Pamiętaj, że nawięcej wiedzy zdobywasz poprzez samodzielną naukę oraz zaparte zgłębianie tematów Twoich zaineresowań.<br />Najwazniejsze jest umiejętne zadawanie sobie samemu pytań: Jak?, Czemu?, Po Co? Kiedy?<br /><br />Przykładowe pytania:</p>
            <ul>
              <li>Jak sprawdzić adres IP osóby która ostatnio podjęła próbę logowania SSH na mój VPS?</li>
              <li>W jaki sposób dana osoba dokonała autoryzacji z moim Serwerem VPS?</li>
              <li>Czy dany adres IP został poprawnie zbanowany przez Fail2Ban?</li>
            </ul>
            <h3 className={styles.sectionContentHeader}>5. Jak zweryfikować, czy Fail2Ban działa poprawnie?</h3>
            <p className={styles.sectionContentText}>Do tej pory udało już nam się posiąść naprawdę duzy i wartościowy kawałek wiedzy. Jednakże wiedza teorytyczna a wiedza praktyczna, zwłaszcza w dziedzinach IT bardzo lubi mijać się z prawdą. Po każdym zaimplementowaniu nowego rozwiązania na swoim serwerze powinieneś być w stanie przetestować, czy dane rozwiązanie działa prawidłowo. Sama umiejętność zainstalowania danego serwisu nie jest niczym trudnym. Najważniejsza jest odpowiednia konfiguracja danego rozwiązania oraz jego stałe testowanie i ulepszanie adekwatnie do wykorzystywanych przez nas technologii.<br /><br />W celu dokonania podstawowych testów Fail2Ban wykonamy kilka prób logowania do naszego Servera VPS za pomocą SSH.<br />W tym celu otwórz nowy terminal, takbyś jednocześnie miał dostep do terminalu w którym jesteś połączony ze swoim VPS, oraz pustego nowego okna.</p>
            <ArticleImportantInfo
              type="how"
              title="Podpowiedź"
              content="Jeśli w podrożdziale “Bezpieczna Konfiguracja SSH” zablokowałeś możliwość logowania się za pomocą hasła możesz:<br /><br/>1. Odblokować na czas testów możliwość logowania się hasłem<br/>2. Stworzyć backup swojego klucza id_rsa, a następnie zedytować swój klucz tak aby  różnił się od oryginalnego.<br/><br/>Jesli zdecydujesz się na drugą opcję, koniecznie po skaończeniu testów przywróć swój klucz id_rsa do wersji z backupu, inaczej na stałe utracisz możliwość logowania się do swojego serwera<br/><br/>Raz jeszcze przypominam o tym jak ważne jest aby posiadać przynajmniej kilka kopii Twoich kluczy SSH w różnych miejscach."
            />
            <CodeBlock
              description="Wykonaj nowe połączenie SSH (Nowy Terminal)"
              commands={[
                "ssh -p <var>port-ssh</var> <var>n-n-użytkownika</var>@<var>ip-vps</var>"
              ]}
            />
            <p className={styles.sectionContentText}>Jeśli wybrałeś drugą metodę zakłądającą malformację klucza id_rsa powinieneś w tym momencie zostać poproszony o hasło.<br />Wprowadź maksymalnie 3 razy niepoprawne hasło.</p>
            <CodeBlock
              description="Sprawdź logi (Terminal Zalogowany do VPS)"
              commands={[
                "sudo cat /var/log/fail2ban.log",
                "sudo cat /var/log/auth.log"
              ]}
            />
            <p className={styles.sectionContentText}>W logach powinnia widnieć informacja o Twoim adresie IP oraz nieudanych próbach zalogowania.<br />Przeczytaj te logi i upewni się, że rozumiesz ich przekaz. </p>
            <CodeBlock
              description="Wykonaj kolejne 2 próby logowania (Nowy Terminal)"
              commands={[
                "ssh -p <var>port-ssh</var> <var>n-n-użytkownika</var>@<var>ip-vps</var>"
              ]}
            />
            <p className={styles.sectionContentText}>W tym momencie jeśli wszystko poprawnie działa Twój adres IP powinien zostać zablokowany na 10 minut. Niestety, jeśli nie dysponujesz drugim adresem IP musisz odczekać ten czas, dopiero wtedy będziesz w stanie ponownie zalogować się do swojego serwera VPS. Pamiętaj tylko aby tym razem przywrócić kopię swojego pliku id_rsa.</p>
            <ArticleImportantInfo
              type="hint"
              title="Jak odblokować IP w Fail2Ban Linux?"
              content='Jeśli nie masz ochoty czekać na odblokowanie Twojego IP, zawsze możesz udostępnić sobie swój internete z telefonu, który będzie posiadać inne IP<br/>Wykonaj komendę "sudo fail2ban-client set sshd unbanip <twój-ip>"'
            />
            <h3 className={styles.sectionContentHeader}>6. Podsumowanie Fail2Ban</h3>
            <p className={styles.sectionContentText}>W niniejszym rozdziale nauczyliśmy się minimalnej i podstawowej konfiguracji oraz działania serwisu Fail2Ban. Z faktu iż ten pordanik ma na celu wprowadzenie Ciebie do świata samodzielnej konfiguracji VPS nie jestem w stanie opisać tutaj szczegółów tego narzędzia.<br /><br />Zachęcam Ciebie do samodzielnej eksploracji. Pamiętaj, że dzięki Google i Chat-GPT będziesz w stanie samodzielnie zgłebić wszelkie tajniki tego narzędzia. Wiedza którą pozyskasz w ten sposób utrwali się w zdecydowanie lepszy sposób, gdyż samemu krok po kroku będziesz musiał poznawać kolejne etapy działania danego rozwiązania.<br /><br />Nie zapomnij również stale sprawdzać mojej strony, prawdopodobnie w przyszłości pojawi się tutaj bardziej obszerny i kompleksowy artykuł na temat zaawansowanej konfiguracji usługi Fail2Ban </p>
          </div>
        </section>
        {/* Konfiguracja ClamAV */}
        <section id="instalacja-i-konfiguracja-clamav" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Antywirus ClamAV</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>1. Co to jest ClamAV?</h3>
            <p className={styles.sectionContentText}>ClamAV, czyli Clam AntiVirus, to jedno z najpopularniejszych i najbardziej wszechstronnych narzędzi do wykrywania wirusów w systemach Linux. Jego otwartoźródłowy charakter, regularne aktualizacje i możliwość integracji z różnorodnymi systemami sprawiają, że jest on idealnym wyborem dla administratorów dbających o bezpieczeństwo swoich serwerów.<br /><br />ClamAV zostało pierwotnie zaprojektowane głównie z myślą o systemach Linux, choć dostępne jest również na inne platformy, takie jak Windows i macOS. Oferuje ono szereg funkcji, które pomagają w wykrywaniu i usuwaniu złośliwego oprogramowania, w tym wirusów, trojanów, malware i innych zagrożeń. Składa się z 3 podstawowych elementów:</p>
            <ul>
              <li>ClamD: Daemon, który odpowiada za skanowanie w tle.</li>
              <li>ClamScan: Narzędzie wiersza poleceń, które umożliwia ręczne skanowanie plików.</li>
              <li>FreshClam: Usługa odpowiedzialna za automatyczne aktualizacje bazy danych wirusów.</li>
            </ul>
            <ArticleImportantInfo
              type="how"
              title="Jak działa ClamAV?"
              content="ClamAV działa na zasadzie porównywania plików z bazą danych sygnatur wirusów. Baza ta jest regularnie aktualizowana przez społeczność oraz deweloperów, co zapewnia ochronę przed najnowszymi zagrożeniami.."
            />
            <h3 className={styles.sectionContentHeader}>2. Jak zainstalować ClamAV?</h3>
            <CodeBlock
              description="W celu instalacji wykonaj komendę (jako Sudoer)"
              commands={[
                "sudo apt install clamav clamav-daemon"
              ]}
            />
            <CodeBlock
              description="Zrestartuj swój serwer VPS"
              commands={[
                "sudo reboot"
              ]}
            />
            <CodeBlock
              description="Zaktualizuj bazę wirusów"
              commands={[
                "sudo freshclam"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>3. Jak skonfigurować ClamAV?</h3>
            <p className={styles.sectionContentText}>Domyślna konfiguracja ClamAV powinna być odpowiednia dla większości użytkowników.<br />Mimo wszystko edytować plik konfiguracyjny ClamAV, aby dostosować ustawienia do swoich potrzeb.</p>
            <CodeBlock
              description="Otwórz plik konfiguracyjny i zapoznaj się z jego zawartością"
              commands={[
                "sudo nano /etc/clamav/clamd.conf",
                "sudo nano /etc/clamav/freshclam.conf"
              ]}
            />
            <CodeBlock
              description="Jeśli dokonałeś jakiś zmian w konfiguracji nie zapomnij zrestartować serwisu ClamAV"
              commands={[
                "sudo systemctl restart clamav-daemon",
                "sudo systemctl restart clamav-freshclam"
              ]}
            />
            <h3 className={styles.sectionContentHeader}>4. Jak przeskanować system Linux za pomocą ClamAV?</h3>
            <CodeBlock
              description="Skanowanie Katalogu"
              commands={[
                "sudo clamscan -r /ścieżka/do/katalogu"
              ]}
            />
            <CodeBlock
              description="Skanowanie Całego Systemu"
              commands={[
                "sudo clamscan -r /"
              ]}
            />
            <CodeBlock
              description="Skanowanie Całego Systemu (Pokaż tylko zawirusowane pliki)"
              commands={[
                "sudo clamscan -r --infected /"
              ]}
            />
            <CodeBlock
              description="Skanowanie Całego Systemu (Zapisz wynik skanowania)"
              commands={[
                "sudo clamscan -r --infected / > ~/clamav_output.txt"
              ]}
            />
            <CodeBlock
              description="Skanowanie Całego Systemu (Automatyczne Usuwanie Wirusów)"
              commands={[
                "sudo clamscan -r --infected --remove /"
              ]}
            />
            <ArticleImportantInfo
              type="hint"
              title="Jak anulować działanie komendy w terminalu?"
              content="Jeśli Twój terminal jest zablokowany przez aktualnie działającą komendę możesz ją anulować za pomocą CTRL + C"
            />
          </div>
        </section>
        {/* Podsumowanie */}
        <section id="instalacja-i-konfiguracja-clamav" className={styles.articleSection}>
          <div className={styles.sectionDivider}>
            <h2 className={styles.articleContainer}>Podsumowanie</h2>
          </div>
          <div className={`${styles.sectionContent} ${styles.articleContainer}`}>
            <h3 className={styles.sectionContentHeader}>Kilka słów na zakończenie</h3>
            <p className={styles.sectionContentText}>Na samym poczatku chciałbym podziękować Ci za cierpliwość i pogratulować wytrwałości. Mam nadzięję, że niniejszy artykuł był dla Ciebie zrozumiały. W razie gdybyś miał jakieś problemy zawsze możesz odezwać się do mnie prywatnie w celu otrzymania pomocy.<br /><br />Jak sam widzisz, bezpieczna konfiguracja Twojego nowego serwera VPS wcale nie jest taka trudna jakby się to wydawało. Działanie to tak na prawdę, w głównej mierze opiera się na pewnych powielanych schamatach, które wraz z upływem czasu są aktualizowane o bezpieczniejsze rozwiązania. Serwer który dzisiaj przygotowaliśmy możesz wykorzystać do hostowania swoich pierwszych aplikacji. Jest on bezpiecznie skonfigurowany i nie powinien pozwolić na włam.<br /><br />Niniejszy artykuł jest pierwszym z serii kursu "Od zera do DevOps'era". Pamiętaj że jest to dopiero pierwszy etap, w którym wspólnie przygotowaliśmy podłoże pod postawienie naszej aplikacji webowej. Skupiliśmy się przede wszystkich na podstawach, czyli na tym aby nasza infrastruktura serwerowa była bezpieczna już od pierwszego jej uruchomienia.<br /><br />W kolejnych cześćiach kursu poznamy kolejne kroki mające na celu kompletny deployment aplikacji webowej za pomocą technologii Docker. Poznamy podstawy bezpiecznego Tworzenia obrazów Dockera, poznamy szczegóły komendy Docker Compose oraz finalnie udostepnimy naszą aplikację światu za pomocą narzędzia jakim jest Traefik. Przed nami masa dobrej zabawy. Nie zapomnij obserwować mojej strony aby być na bieżąco z najnowszymi kursami.</p>
          </div>
        </section>
      </article>
    </main>
  )
}