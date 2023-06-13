export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzN2M0MTAzOC1hOTdkLTQ4YTMtODZmOC0yNTJlYmZiNGZkMjciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NjUyMzg1MSwiZXhwIjoxNjc5MTE1ODUxfQ.oZi-stg2Wy2EhNGUhsAhk3YiuemqJXsDZDfQF6FpncM'
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })

  const { roomId } = await res.json()
  return roomId
}
