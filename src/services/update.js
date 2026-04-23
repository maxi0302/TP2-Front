import { supabase } from "../db/supabase";

export async function updatePalette(id, newData) {
    const { data, error } = await supabase
        .from('PalletsSaved')
        .update(newData)
        .eq('id', id)
        .select();

    return { data, error };
}