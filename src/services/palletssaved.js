import { supabase } from '../db/supabase';

export async function getUserPallets(user_id){
    const { data } = await supabase
      .from('PalletsSaved')
      .select('*')
      .eq('user_id', user.id)
}