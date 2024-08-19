import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SB_URL
const supabaseKey = import.meta.env.SB_API_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
