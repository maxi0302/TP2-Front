import { supabase } from '../db/supabase';

export async function save(user, name, colors) {
    const { data, error } = await supabase.from('PalletsSaved').insert([
        { user_id: user, colors, name }
    ])

    return { data, error };
}

/* to use this:
await save(getUser(), inputName.value, colors);
*/