// What logic we want to run every time we send a request
// to the Lens GraphQL server?

// Lens graphql server endpoint
const endpoint = "https://api.lens.dev/"

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options
        // TODO: Add authentication headers here.
      },
      body: JSON.stringify({
        query,
        variables
      })
    })
 
    const json = await res.json()
 
    if (json.errors) {
      const { message } = json.errors[0] || {}
      throw new Error(message || 'Error…')
    }
 
    return json.data
  }
}