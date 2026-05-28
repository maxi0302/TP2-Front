import { supabase } from '../db/supabase';

export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });     

    return { data, error };
}