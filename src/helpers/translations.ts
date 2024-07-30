"use client"
import { usePathname } from "next/navigation"

export const pages: { pl: string, en: string }[] = [
    {
        pl: "/",
        en: "/en"
    },
    {
        pl: "/#kontakt",
        en: "/en#contact"
    },
    {
        pl: "/#uslugi",
        en: "/en#services"
    },
    {
        pl: "/o-mnie",
        en: "/en/about-me"
    },
    {
        pl: "/polityka-prywatnosci",
        en: "/en/privacy-policy"
    },
    {
        pl: "/portfolio",
        en: "/en/portfolio"
    },
    {
        pl: "/portfolio/landingpage-p1",
        en: "/en/portfolio/landingpage-p1"
    },
    {
        pl: "/portfolio/pollin",
        en: "/en/portfolio/pollin"
    },
    {
        pl: "/portfolio/kredyteo",
        en: "/en/portfolio/kredyteo"
    },
    {
        pl: "/portfolio/system-logistyczny-crm",
        en: "/en/portfolio/logistics-system-crm"
    },
    {
        pl: "/portfolio/stalomat",
        en: "/en/portfolio/stalomat"
    },
    {
        pl: "/portfolio/czysty-kamien",
        en: "/en/portfolio/czysty-kamien"
    },
    {
        pl: "/portfolio/system-archiwalno-biblioteczny",
        en: "/en/portfolio/archive-library-system"
    },
    {
        pl: "/portfolio/jazba",
        en: "/en/portfolio/jazba"
    },
    {
        pl: "/portfolio/skanowanie",
        en: "/en/portfolio/scanning"
    },
    {
        pl: "/blog-it",
        en: "/en/blog-it"
    },
    {
        pl: "/blog-it/nowosci-ze-swiata-it/gigantyczna-awaria-microsoftu-subkietywna-opinia",
        en: "/en/blog-it/it-news/giant-microsoft-crash-subjective-opinion"
    },
    {
        pl: "/blog-it/kurs-devops-dla-juniorow",
        en: "/en/blog-it/devops-course-for-juniors"
    },
    {
        pl: "/blog-it/kurs-devops-dla-juniorow/jak-bezpiecznie-skonfigurowac-moj-pierwszy-serwer-vps",
        en: "/en/blog-it/devops-course-for-juniors/how-to-securely-configure-my-first-vps"
    },
    {
        pl: "/blog-it/kurs-devops-dla-juniorow/dokeryzacja-aplikacji-podstawy-dockera",
        en: "/en/blog-it/devops-course-for-juniors/application-containerization-docker-basics"
    },
    {
        pl: "/blog-it/kurs-devops-dla-juniorow/docker-compose-podstawy-yaml",
        en: "/en/blog-it/devops-course-for-juniors/docker-compose-yaml-basics"
    },
    {
        pl: "/blog-it/nowosci-ze-swiata-it/dlaczego-sam-frontend-to-za-malo-w-2024-roku",
        en: "/en/blog-it/it-news/why-frontend-is-not-enough-in-2024"
    }
]

export function goToEnglish(slug: string): string {
    let page = pages.find(page => page.pl === slug)
    return page?.en as string || slug
}

export function goToPolish(slug: string): string {
    let page = pages.find(page => page.en === slug)
    return page?.pl as string || slug
}

export function determineLanguage(): string {
    let pathname = usePathname()
    return pathname.startsWith("/en") ? "en" : "pl"
}


