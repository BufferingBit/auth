import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { createBrowserClient, isBrowser, parseCookieHeader } from "@supabase/ssr";
import type { LayoutLoad } from "./$types";

interface PageData {
    supabase: any;
    session: any | null;
}

export const ssr = false;
export const load: LayoutLoad = async ({ fetch, data, depends }: { fetch: any, data: PageData | null, depends: any }) => {
    depends('supabase:auth');
    
    interface CookieConfig {
        get(key: string): string | null;
        set(key: string, value: string): void;
        remove(key: string): void;
    }

    interface SupabaseConfig {
        global: {
            fetch: typeof fetch;
        };
        cookies: CookieConfig;
    }

    const supabase = createBrowserClient(
        PUBLIC_SUPABASE_URL,
        PUBLIC_SUPABASE_ANON_KEY,
        {
            global: { fetch },
            cookies: {
                get(key: string): string | null {
                    if (!isBrowser) return data?.session ? JSON.stringify(data.session) : null;
                    const cookie = parseCookieHeader(document.cookie);
                    return cookie?.find(c => c.name === key)?.value ?? null;
                },
                set(key: string, value: string): void {
                    document.cookie = `${key}=${value}; path=/`;
                },
                remove(key: string): void {
                    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
                }
            }
        } satisfies SupabaseConfig
    );

    try {
        const { data: { session } } = await supabase.auth.getSession();
        return { supabase, session };
    } catch (error) {
        console.error('Session error:', error);
        return { supabase, session: null };
    }
};