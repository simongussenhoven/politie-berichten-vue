
const getNewsItems = async () => {
  await fetch(`/.netlify/functions/getNewsItems`)
    .then((x) => x.json())
    .then(result => {
      console.log(result.data.nieuwsberichten)
      return result.data.nieuwsberichten
    })
}
console.log(getNewsItems())

export { getNewsItems }