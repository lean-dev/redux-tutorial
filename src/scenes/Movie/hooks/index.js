import { useReducer, useEffect } from 'react'
import moviAPI from '../../../services/movie/api'
import axios, { getSource } from '../../../services/axios'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return {
        loading: true,
        error: null,
        data: null,
      }
    case 'success':
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      throw new Error('undefined action')
  }
}

export const useGetMovie = (id) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
    data: null,
  })

  useEffect(() => {
    dispatch({ type: 'start' })
    const source = getSource()
    const fetchData = async () => {
      try {
        const result = await moviAPI.fetchByID(id, source.token)
        dispatch({ type: 'success', payload: result })
      } catch (error) {
        if (!axios.isCancel(error)) {
          dispatch({ type: 'error', payload: error.message })
        }
      }
    }
    fetchData()

    return () => {
      source.cancel()
    }
  }, [id])

  return state
}
