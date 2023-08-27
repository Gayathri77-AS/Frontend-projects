
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eocpgzilbhighxgvnyrm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvY3BnemlsYmhpZ2h4Z3ZueXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0ODU1NjIsImV4cCI6MjAwNTA2MTU2Mn0.X-2IXMs2NXc4vdQmlF3g3_Czc-kCxS6OiEhHW2C3qYY";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;