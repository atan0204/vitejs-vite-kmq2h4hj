import { useEffect, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'pending':
      return { data: null, loading: true, error: null }
    case 'idle':
      return { data: null, loading: false, error: null }
    case 'success':
      return { data: action.data, loading: false, error: null }
    case 'failure':
      return { data: null, loading: false, error: action.error }
    default:
      return state
  }
}

export function useFetchData(url) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: Boolean(url),
    error: null,
  })

  useEffect(() => {
    if (!url) {
      dispatch({ type: 'idle' })
      return
    }

    let cancelled = false
    dispatch({ type: 'pending' })

    async function run() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const json = await response.json()
        if (!cancelled) dispatch({ type: 'success', data: json })
      } catch (err) {
        if (!cancelled) {
          dispatch({ type: 'failure', error: err.message || 'Something went wrong' })
        }
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [url])

  return state
}
