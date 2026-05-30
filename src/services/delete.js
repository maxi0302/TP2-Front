import { supabase } from "../db/supabase";

export async function deletePalette(id) {
    const { error } = await supabase
        .from('PalletsSaved')
        .delete()
        .eq('id', id);

    return { error };
}