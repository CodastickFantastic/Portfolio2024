"use client";

import { useState } from 'react';
import ServiceTile from '../microComponents/ServiceTile';
import ServicePackTile from '../microComponents/ServicePackTile';
import styles from '@/scss/components/ServiceSection.module.scss';

import wp from "@/../public/img/icons/wp.png";
import wph from "@/../public/img/icons/wph.png";
import wc from "@/../public/img/icons/wc.png";
import next from "@/../public/img/icons/next.png";
import hosting from "@/../public/img/icons/hosting.png";
import rn from "@/../public/img/icons/rn.png";
import gads from "@/../public/img/icons/gads.png";
import fb from "@/../public/img/icons/fb.png";
import pcpencil from "@/../public/img/icons/pcpencil.png";
import gmap from "@/../public/img/icons/gmap.png";
import news from "@/../public/img/icons/news.png";
import handService from "@/../public/img/icons/handService.png";
import loud from "@/../public/img/icons/loud.png";

const ServiceSection = () => {

    const [section, setSection] = useState('single')


    return (
        <section className={`${styles.serviceSection} container`}>
            <h2>Usługi</h2>
            <p>W jaki sposób mogę Ci <span className="purple">pomóc</span></p>

            <div className={styles.buttons}>
                <button className={`button ${section === "single" && "active"}`} onClick={() => { setSection("single"); console.log("test") }} >Pojedyncze Usługi</button>
                <button className={`button badge ${section === "pack" && "active"}`} onClick={() => { setSection("pack"); console.log(section) }}>Pakiety Usług</button>
            </div>
            {
                section === 'single' && <div className={styles.servicesSingle}>
                    <ServiceTile
                        tileNumber={1}
                        imageSrc={wp}
                        title='Wordpress'
                        title2='Strony Internetowe'
                        description='Optymalne rozwiązanie odpowiednie dla prostych stron firmowych, blogów oraz landing pageów.'
                        descriptionBack='Kompleksowa usługa WordPress, obejmująca projektowanie responsywnej strony internetowej, dostosowanej do indywidualnych potrzeb biznesowych. Optymalizacja SEO, szybkość ładowania oraz integracja z najnowszymi technologiami.'
                    />
                    <ServiceTile
                        tileNumber={2}
                        imageSrc={wph}
                        title='Wordpress Hosting'
                        title2='Bezpieczny Hosting'
                        description='Oddaj obsługe nad swoją stroną Wordpress w ręce specjalisty.'
                        descriptionBack='
                    Zapewniam hosting WordPress najwyższej jakości! Moje szybkie i bezpieczne serwery gwarantują nieprzerwaną dostępność Twojej strony. Dzięki dedykowanym rozwiązaniom dla WordPress, mogę zapewnić Ci optymalną wydajność i bezproblemową obsługę.'
                    />
                    <ServiceTile
                        tileNumber={3}
                        imageSrc={wc}
                        title='WooCommerce'
                        title2='Sklep Internetowy'
                        description='Intuicyjny sklep internetowy idealny do samodzielnego prowadzenia.'
                        descriptionBack='Responsywna platforma zakupowa, zoptymalizowana pod kątem konwersji. Twój sklep online zyska nie tylko estetyczny design, ale także efektywne narzędzia do zarządzania biznesem. Skutecznie rozwijaj swój biznes e-commerce z moją pomocą!'
                    />
                    <ServiceTile
                        tileNumber={4}
                        imageSrc={next}
                        title='Next.Js'
                        title2='System Informatyczny'
                        description='System oparty o framework Next.js wykorzystywany przez największe BigTechy.'
                        descriptionBack='Specjalizuję się w programowaniu z wykorzystaniem Next.js, oferując innowacyjne rozwiązania dla Twojej firmy. W przypadku tego narzędzia ogranicza nas jedynie wyobraźnia. Zainwestuj w rozwój swojej aplikacji zyskując przewagę konkurencyjną online.'
                    />
                    <ServiceTile
                        tileNumber={5}
                        imageSrc={hosting}
                        title='System Admin'
                        title2='Zarządzanie Serwerami'
                        description='Zarzadzanie serwerami opartymi na Linuxie oraz tymi które wykorzystują panele administracyjne takie jak cPanel, Plesk, DirectAdmin.'
                        descriptionBack='Kompleksowa usługa administrowania systemami informatycznymi. Optymalizuję wydajność, zabezpieczam dane i eliminuję awarie. Zaufaj mi, abyś mógł skoncentrować się na rozwoju swojej działalności, mając pewność stabilności i efektywności systemów.'
                    />
                    <ServiceTile
                        tileNumber={6}
                        imageSrc={rn}
                        title='React Native'
                        title2='Aplikacja Mobilna'
                        description='Aplikacja mobilna na urządzenia IOS oraz Android przy wykrozystaniu technologii firmy Meta'
                        descriptionBack='Tworzę responsywne, wieloplatformowe aplikacje mobilne z wykorzystaniem zaawansowanych technologii firmy Meta. Zwiększ swoją obecność online dzięki nowoczesnym i efektywnym aplikacjom mobilnym!'
                    />
                    <ServiceTile
                        tileNumber={7}
                        imageSrc={gads}
                        title='Google Ads'
                        title2='Reklama w Google'
                        description='Docieraj do klientów za pomocą reklam w Google Ads. Zwiększaj sprzedaż i zyski.'
                        descriptionBack='Optymalizuj reklamy online z moimi usługami opartymi o Google Ads. Zwiększ widoczność, konwersje i ROI. Skorzystaj z mojej wiedzy, by efektywnie docierać do swojej grupy docelowej i maksymalizować potencjał reklamowy, bez przepalania budżetu.'
                    />
                    <ServiceTile
                        tileNumber={8}
                        imageSrc={fb}
                        title='Facebook Ads'
                        title2='Reklama w meta Business'
                        description='Docieraj do klientów za pomocą reklam w Facebook Ads. Zwiększ rozpoznawalność marki.'
                        descriptionBack='Zwiększ swoją obecność online dzięki moim usługom Facebook Ads. Personalizowane kampanie, precyzyjne targetowanie i maksymalna widoczność. Osiągnij cele biznesowe, angażując swoją grupę docelową na platformie Facebook oraz Instagram.'
                    />
                    <ServiceTile
                        tileNumber={9}
                        imageSrc={pcpencil}
                        title='Projektowanie Graficzne'
                        title2='Ui/Ux Design'
                        description='Zwizualizujmy Twój pomysł. Niech Twoja inwestycja wyróżni się spośród konkurencji.'
                        descriptionBack='
                    Inspirujące projekty graficzne dostosowane do Twojej marki. Kreatywność, precyzja, efektywność. Zleć mi stworzenie unikalnej wizualnej tożsamości, przyciągnij uwagę i wyróżnij się na rynku.'
                    />
                </div>
            }
            {
                section === 'pack' && <div className={styles.servicesPack}>
                    <ServicePackTile
                        imageSrc={[wp, gmap, news, loud, hosting]}
                        title='Pakiet Saphire'
                        title2='Zaistniej w internecie'
                        description={['Wordpress', 'Wizytówka Google', 'Pozycjonowanie', 'Marketing', 'Hosting']}
                        description2={['Strona Internetowa', 'Moja Firma', 'Artykuły SEO', 'Google & Facebook', 'Administracja']}
                        color='#0F52BA'
                    />
                    <ServicePackTile
                        imageSrc={[wc, gmap, news, loud, hosting]}
                        title='Pakiet Rubin'
                        title2='Twój sklep internetowy'
                        description={['WooCommerce', 'Wizytówka Google', 'Pozycjonowanie', 'Marketing', 'Hosting']}
                        description2={['Sklep Internetowy', 'Moja Firma', 'Produktów', 'Google & Facebook', 'Administracja']}
                        color='#9F003D'
                    />
                    <ServicePackTile
                        imageSrc={[next, rn, pcpencil, handService, hosting]}
                        title='Pakiet Emerald'
                        title2='Twoja aplikacja webowa'
                        description={['Next.JS', 'React Native lub PWA', 'Projektowanie', 'Serwis', 'Hosting']}
                        description2={['System Informatyczny', 'Aplikacja Mobilna', 'Ui/Ux', 'Bieżąca Obsługa', 'Administracja']}
                        color='#50C895'
                    />
                </div>
            }

        </section >
    );
}

export default ServiceSection;