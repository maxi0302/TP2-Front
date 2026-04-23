import { supabase } from '../db/supabase';

export async function deleteAccount() {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
        return { error: "No hay usuario autenticado" };
    }

    const userId = data.user.id;
    const { error: palettesError } = await supabase
        .from('PalletsSaved')
        .delete()
        .eq('user_id', userId);

    if (palettesError) {
        return { error: palettesError.message };
    }

    const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

    if (profileError) {
        return { error: profileError.message };
    }

    const { error: logoutError } = await supabase.auth.signOut();
    if (logoutError) {
        return { error: logoutError.message };
    }

    return { success: "Cuenta eliminada." };
}