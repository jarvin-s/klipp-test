import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dylydvvishocuhywmssp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bHlkdnZpc2hvY3VoeXdtc3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5NzU4NzAsImV4cCI6MjA0NzU1MTg3MH0.KZ8onxLWD1FR4E4Toiv9HKPCiyVms5G_4biuZk-MxPA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})