"use client"

import { goToEnglish } from "@/helpers/translations";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLinkComponent({
    className, href, onClick, plText, enText, children
}: {
    className?: string, href: string, onClick?: () => void, plText?: string, enText?: string, children?: React.ReactNode
}): JSX.Element {
    const pathname = usePathname()
    const language = pathname.startsWith("/en") ? "en" : "pl"

    return (
        <>
            {
                language === "pl" && plText ? <Link href={href} className={className} onClick={onClick}>{plText}</Link>
                    : language === "en" && enText ? <Link href={goToEnglish(href)} className={className} onClick={onClick}>{enText}</Link>
                        : language === "pl" && !plText && !enText ? <Link href={href}>{children}</Link>
                            : language === "en" && !plText && !enText && <Link href={goToEnglish(href)}>{children}</Link>
            }
        </>
    )
}