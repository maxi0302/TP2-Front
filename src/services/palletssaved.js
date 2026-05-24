import { supabase } from '../db/supabase';

export async function getUserPallets(user_id){
    const { data, error } = await supabase
      .from('PalletsSaved')
      .select('*')
      .eq('user_id', user.id)
      
    if (error) throw error;
    return data;
}