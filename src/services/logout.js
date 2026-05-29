import { supabase } from '../db/supabase';

export async function logout() {
    const { error } = await supabase.auth.signOut();
    const loginButton = document.getElementById("openLoginButton");
    const signupButton = document.getElementById("openSignupButton");
    const logoutButton = document.getElementById("LogoutButton");
    if (!error) {
        loginButton?.classList.remove("hidden");
        signupButton?.classList.remove("hidden");
        logoutButton?.classList.add("hidden");
        document.getElementById('palettesContainer').innerHTML = '';
    }
    return { error };
}