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
import { determineLanguage } from '@/helpers/translations';

const ServiceSection = () => {
    const language = determineLanguage()
    const [section, setSection] = useState('single')


    return (
        <section className={`${styles.serviceSection} container`}>
            <h2>{language === "pl" ? "Usługi" : "Services"}</h2>
            <p dangerouslySetInnerHTML={{ __html: language === "pl" ? 'W jaki sposób mogę Ci <span class="purple">pomóc</span>' : 'How can I <span class="purple">help you</span>' }} />

            <div className={styles.buttons}>
                <button className={`button ${section === "single" && "active"}`} onClick={() => { setSection("single") }} >{language === "pl" ? "Pojedyncze Usługi" : "Simple Services"}</button>
                <button className={`button badge ${section === "pack" && "active"}`} onClick={() => { setSection("pack") }}>{language === "pl" ? "Pakiety Usług" : "Service Packs"}</button>
            </div>
            {
                language === "pl" && section === 'single' ?
                    <div className={styles.servicesSingle}>
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
                    : language === "en" && section === 'single' && <div className={styles.servicesSingle}>
                        <ServiceTile
                            tileNumber={1}
                            imageSrc={wp}
                            title='Wordpress'
                            title2='Websites'
                            description='Optimal solution suitable for simple company websites, blogs and landing pages.'
                            descriptionBack='Comprehensive WordPress service, including the design of a responsive website, tailored to individual business needs. SEO optimization, loading speed and integration with the latest technologies.'
                        />
                        <ServiceTile
                            tileNumber={2}
                            imageSrc={wph}
                            title='Wordpress Hosting'
                            title2='Secure Hosting'
                            description='Put the management of your Wordpress website in the hands of a specialist.'
                            descriptionBack='
 I provide WordPress hosting of the highest quality! My fast and secure servers guarantee uninterrupted availability of your website. With dedicated WordPress solutions, I can provide you with optimal performance and hassle-free service.'
                        />
                        <ServiceTile
                            tileNumber={3}
                            imageSrc={wc}
                            title='WooCommerce'
                            title2='Online Store'
                            description='Intuitive online store, perfect for running on your own.'
                            descriptionBack='Responsive shopping platform, optimized for conversions. Your online store will gain not only an aesthetic design, but also effective business management tools. Effectively develop your e-commerce business with my help!'
                        />
                        <ServiceTile
                            tileNumber={4}
                            imageSrc={next}
                            title='Next.Js'
                            title2='IT System'
                            description='System based on the Next.js framework used by the largest BigTechs.'
                            descriptionBack='I specialize in programming using Next.js, offering innovative solutions for your company. In the case of this tool, we are only limited by our imagination. Invest in the development of your application and gain a competitive advantage online.'
                        />
                        <ServiceTile
                            tileNumber={5}
                            imageSrc={hosting}
                            title='System Admin'
                            title2='Server Management'
                            description='Managing Linux-based servers and those that use administration panels such as cPanel, Plesk, DirectAdmin.'
                            descriptionBack='Comprehensive IT systems administration service. I optimize performance, secure data and eliminate failures. Trust me, so you can focus on growing your business, confident in the stability and efficiency of your systems.'
                        />
                        <ServiceTile
                            tileNumber={6}
                            imageSrc={rn}
                            title='React Native'
                            title2='Mobile Application'
                            description='Mobile application for IOS and Android devices using Meta technology'
                            descriptionBack='I create responsive, cross-platform mobile applications using advanced technologies from Meta. Increase your online presence with modern and effective mobile applications!'
                        />
                        <ServiceTile
                            tileNumber={7}
                            imageSrc={gads}
                            title='Google Ads'
                            title2='Advertising on Google'
                            description='Reach customers with ads in Google Ads. Increase sales and profits.'
                            descriptionBack='Optimize your online ads with my services based on Google Ads. Increase visibility, conversions and ROI. Use my knowledge to effectively reach your target group and maximize your advertising potential, without burning your budget.'
                        />
                        <ServiceTile
                            tileNumber={8}
                            imageSrc={fb}
                            title='Facebook Ads'
                            title2='Advertising in meta business'
                            description='Reach customers using Facebook Ads. Increase brand recognition.'
                            descriptionBack='Increase your online presence with my Facebook Ads services. Personalized campaigns, precise targeting and maximum visibility. Achieve your business goalsowls, engaging your target group on Facebook and Instagram.'
                        />
                        <ServiceTile
                            tileNumber={9}
                            imageSrc={pcpencil}
                            title='Graphic Design'
                            title2='Ui/Ux Design'
                            description="Let' s visualize your idea. Let your investment stand out from the competition."
                            descriptionBack='Inspiring graphic designs tailored to your brand. Creativity, precision, efficiency. Let me create a unique visual identity, attract attention and stand out on the market.'
                        />
                    </div>
            }
            {
                language === "pl" && section === 'pack' ?
                    <div className={styles.servicesPack}>
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
                    : language === "en" && section === 'pack' &&
                    <div className={styles.servicesPack}>
                        <ServicePackTile
                            imageSrc={[wp, gmap, news, loud, hosting]}
                            title='Saphire Package'
                            title2='Get a presence on the Internet'
                            description={['Wordpress', 'Google Business Card', 'Positioning', 'Marketing', 'Hosting']}
                            description2={['Website', 'My Company', 'SEO Articles', 'Google & Facebook', 'Administration']}
                            color='#0F52BA'
                        />
                        <ServicePackTile
                            imageSrc={[wc, gmap, news, loud, hosting]}
                            title='Ruby Package'
                            title2='Your online store'
                            description={['WooCommerce', 'Google Business Card', 'Positioning', 'Marketing', 'Hosting']}
                            description2={['Online Store', 'My Company', 'Products', 'Google & Facebook', 'Administration']}
                            color='#9F003D'
                        />
                        <ServicePackTile
                            imageSrc={[next, rn, pcpencil, handService, hosting]}
                            title='Emerald Pack'
                            title2='Your web application'
                            description={['Next.JS', 'React Native or PWA', 'Design', 'Website', 'Hosting']}
                            description2={['IT System', 'Mobile Application', 'Ui/Ux', 'Current Service', 'Administration']}
                            color='#50C895'
                        />
                    </div>
            }

        </section >
    );
}

export default ServiceSection;