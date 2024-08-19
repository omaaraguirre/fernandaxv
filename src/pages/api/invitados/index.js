import sb from '@/utils/supabase'

export const GET = async ({ params, request }) => {
  const { data: invitados, error } = await sb
    .from('invitados')
    .select()
  
  return new Response(
    JSON.stringify(invitados), {
    status: 200
  })
}

export const ALL = async ({ params, request }) => {
  return new Response(
    JSON.stringify({ message: 'Method not allowed' }), {
    status: 405,
    statusText: 'Method Not Allowed'
  })
}
