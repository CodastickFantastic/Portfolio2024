import styles from "@/scss/pages/blogArticle.module.scss";

import BlogHeader from "@/components/blogComponents/BlogHeader";

import Link from "next/link";
import Image from "next/image";
import articleHero from "@/../public/blogImgs/_index/blog_hero_img.png";



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
    <main className={styles.articlePage}>
      <div className={styles.articleContainer}>
        <BlogHeader
          h1="Naucz się <span class='purple'>IT</span>"
          headerImg={articleHero}
          contentsTitle="Cześć, miło mi powitać Cię na moim blogu poświęconym szerokopojętym zagadnieniom IT. Nie wstydź się i znajdź temat swoich zainteresowań!<br/><br/>Znajdziesz tutaj artykuły oraz kursy z szerokopojetej dziedziny Web Developmentu. Nauczysz się aktualnych i bezpiecznych zasad programowania oraz hostowania aplikacji webowych. Dowiesz się o najnowszych nowinkach ze świata IT.<br/><br/>Przekonaj się na własnej skórze, że IT nie jest nudne oraz nie wymaga zaawansowanych umiejętności matematycznych.<br/><br/>Większość artykułów jest pisana z myślą o początkujących, dlatego niezależnie czy dopiero zaczynasz karierę w IT, czy masz 12 czy 60 lat, razem ze mną będziesz mógł zostać specjalistą IT!"
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
    </main>
  )
}