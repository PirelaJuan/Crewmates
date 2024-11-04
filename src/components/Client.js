import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://agkkjrrvoalaqaiemwyz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFna2tqcnJ2b2FsYXFhaWVtd3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjQ2MzAsImV4cCI6MjA0NjI0MDYzMH0.zwk8RZsY3vZiJ-JDWfRLDA5e_KEKco3JrUNU1Cww8WE'

export const supabase = createClient(supabaseUrl, supabaseKey)