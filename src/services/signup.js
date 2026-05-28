import { supabase } from '../db/supabase';
import { loadPalettes } from './loadPallettes';

export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
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