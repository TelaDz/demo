async function $fetch(url, options = {}) {
  try {
    let response = await fetch(url)
    return await response.json()
  } catch (error) {
    new Error(error)
  }
}
