import { supabase } from '../db/supabase';
import { loadPalettes } from './loadPallettes';

export async function login(identifier, password) {
    let email = identifier;
/*
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
*/

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

  
    if (data.user && !error) {
        await loadPalettes();
        const loginButton = document.getElementById("openLoginButton");
        const signupButton = document.getElementById("openSignupButton");
        const logoutButton = document.getElementById("LogoutButton");

        loginButton?.classList.add("hidden");
        signupButton?.classList.add("hidden");

        logoutButton?.classList.remove("hidden");
    }

    return { data, error };
}