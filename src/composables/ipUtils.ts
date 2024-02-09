export async function getIp() {
  const res = await fetch('https://api.ipify.org?format=json')
  const { ip } = await res.json()
  return ip as string
}
