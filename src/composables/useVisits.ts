import { useRequest } from 'vue-request'

export function useVisits() {
  // 开发环境下
  if (import.meta.env.DEV) {
    const visits = useStorage('visits-kv', 0)
    visits.value++
    return visits
  }

  const { data: visits } = useRequest(async () => {
    try {
      const n = await http.get('https://visits-kv.deno.dev/tov-template', {
        baseURL: ''
      })
      return Number(n) ?? 0
    }
    catch (error) {
      console.error(error)
      return 0
    }
  })
  return visits ?? 0
}
