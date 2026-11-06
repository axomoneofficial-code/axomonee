// ============================================================================
// AXOM ONE — Supabase Client Module
// Reusable, secure client initialization utilizing Vite environment variables.
// Respects Row Level Security (RLS) with the public anonymous key.
// ============================================================================

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim();

/**
 * Checks whether valid Supabase configuration variables are provided.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('placeholder') &&
    supabaseAnonKey.length > 20
  );
}

/**
 * Singleton Supabase client instance.
 * Initialized only when environment variables are properly supplied.
 * In development or offline mode without keys, returns null to trigger seamless fallback.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null;
