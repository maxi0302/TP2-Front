import { supabase } from '../db/supabase';

export async function login(identifier, password) {
    let email = identifier;

    if (!identifier.includes('@')) {
        const { data, error } = await supabase
            .from('profiles')
            .select('email')
            .eq('username', identifier)
            .single();

        if (error || !data) {
            return { error: "Usuario no encontrado" };
        }

        email = data.email;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}