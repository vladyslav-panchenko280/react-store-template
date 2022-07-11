const getData = (url) => {
  return fetch(url)
    .then(result => result.json())
}

export default getData;