import { supabase } from '../db/supabase';
import { save } from './save';

export async function getUser(){
    const { data } = await supabase.auth.getUser();
    return data.user.id;
}