import { supabase } from '../db/supabase';

export async function logout() {
    const { error } = await supabase.auth.signOut();
    return { error };
}