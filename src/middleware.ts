import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { goToEnglish } from './helpers/translations'

export function middleware(request: NextRequest) {
    // Page Translation Middleware
    // if (request.headers.get("accept-language")?.startsWith("en") || request.nextUrl.pathname.startsWith("/en")) {
    //     // console.log(request.nextUrl.pathname)
    //     if (!request.nextUrl.pathname?.startsWith("/_next")) {
    //         console.log(request.nextUrl.pathname)
    //         return NextResponse.redirect(new URL(goToEnglish(request.nextUrl.pathname), request.url))
    //     }
    // }
}