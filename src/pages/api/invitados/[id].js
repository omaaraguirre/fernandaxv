import sb from '@/utils/supabase'

export const GET = async ({ params, request }) => {
  const id = params.id

  const { data: invitado, error } = await sb
    .from('invitados')
    .select('*')
    .eq('id', id)
    .single()

  if (!invitado) {
    return new Response(
      JSON.stringify({ message: 'Invitado no encontrado' }), {
      status: 404,
      statusText: 'Not Found'
    })
  }

  return new Response(
    JSON.stringify(invitado), {
    status: 200
  })
}

export const PUT = async ({ params, request }) => {
  const id = params.id
  const body = await request.json()

  if (body.confirmado === undefined || body.asistentes === undefined || !id) {
    return new Response(
      JSON.stringify({ message: 'Datos incompletos' }), {
      status: 400,
      statusText: 'Bad Request'
    })
  }

  let { data: exist, error } = await sb
    .from('invitados')
    .select('*')
    .eq('id', id)
    .single()

  if (!exist) {
    return new Response(
      JSON.stringify({ message: 'Invitado no encontrado' }), {
      status: 404,
      statusText: 'Not Found'
    })
  }

  if (body.asistentes < 0 || body.asistentes > exist.pases) {
    return new Response(
      JSON.stringify({ message: 'Cantidad de asistentes no permitida' }), {
      status: 400,
      statusText: 'Bad Request'
    })
  }

  let { data: invitado, err } = await sb
    .from('invitados')
    .update({
      confirmado: body.confirmado,
      asistentes: body.asistentes,
      updated_at: new Date()
    })
    .eq('id', id)
    .select()
    .single()

  return new Response(
    JSON.stringify(invitado), {
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
