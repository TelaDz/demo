import { useState, useEffect } from 'react'
import { baseUrl } from '../config/config_url.js'
import axios from 'axios'
export function useText(text) {
  const [newText, setText] = useState('')

  useEffect(() => {
    setText(text + 'abced')
  }, [])
  console.log('a')
  return newText
}
