import API_BASE_URL from './apiConfig'

export async function sendChatMessage(message: string) {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })

  if (!response.ok) {
    throw new Error('Unable to reach the assistant right now.')
  }

  const data = await response.json()
  return data.response as string
}
