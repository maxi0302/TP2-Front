import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dwljipayqejqlnmxxguh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bGppcGF5cWVqcWxubXh4Z3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3Nzc5MDAsImV4cCI6MjA5MjM1MzkwMH0.ye6tPIACQAw-YgYNWRqqIJsrNk47HGaCcJoW80K9HX4';

export const supabase = createClient(supabaseUrl, supabaseKey);