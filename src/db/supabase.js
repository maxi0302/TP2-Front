import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dwljipayqejqlnmxxguh.supabase.co/rest/v1/';
const supabaseKey = 'sb_publishable_k6MUAYaa8gB-ZGw6_YI2Vw_yTTutBeR';

export const supabase = createClient(supabaseUrl, supabaseKey);