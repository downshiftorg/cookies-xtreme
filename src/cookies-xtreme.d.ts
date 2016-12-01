/*
 * Cookies.js (XTREME VERSION!!!) TypeScript Declaration File
 * https://github.com/netriver/cookies-xtreme
 *
 * This is free and unencumbered software released into the public domain.
 */
interface CookieOptions {
    path?: string;
    domain?: string;
    expires?: any;
    secure?: boolean;
}

interface CookiesStatic {
    (key:string, value?:any, options?:CookieOptions): any;

    get(key:string): string;
    set(key:string, value:any, options?:CookieOptions): CookiesStatic;
    expire(key:string, options?:CookieOptions): CookiesStatic;
    addListener(key:string, listener:(val:any) => void): void;
    removeListener(key:string, listener:(val:any) => void): void;
    removeAllListeners(key:string): void;
    emit(key:string, data:any): void

    defaults: CookieOptions;
    enabled: boolean;
}

declare var Cookies:CookiesStatic;

declare module "cookies" {
    export = Cookies;
}

declare module "cookies-js" {
    export = Cookies;
}
