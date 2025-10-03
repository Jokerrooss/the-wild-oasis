import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ptrkcnigydknvxnuxqxx.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0cmtjbmlneWRrbnZ4bnV4cXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNTA1ODgsImV4cCI6MjA3NDYyNjU4OH0.at5AWt228seXDcYKleUnKzPW69qUj1wSfity1xl_6ms'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
