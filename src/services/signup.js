import { supabase } from '../db/supabase';

export async function signUp(email, password, name) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username: name,
            }
        }
    });

    return { data, error };
}