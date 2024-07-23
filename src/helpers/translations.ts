"use client"
import { usePathname } from "next/navigation"

const pages: { pl: string, en: string }[] = [
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


