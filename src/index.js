document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    const imgContainer = document.getElementById("dog-image-container")
    const breedList = document.getElementById("dog-breeds")
    const dropdown = document.getElementById("breed-dropdown")
    let allBreeds = []
  
    fetch(imgUrl)
      .then(res => res.json())
      .then(data => {
        data.message.forEach(img => {
          const image = document.createElement("img")
          image.src = img
          image.style.width = "200px"
          image.style.margin = "10px"
          imgContainer.appendChild(image)
        })
      })
  
    fetch(breedUrl)
      .then(res => res.json())
      .then(data => {
        allBreeds = Object.keys(data.message)
        renderBreeds(allBreeds)
      })
  
    function renderBreeds(breeds) {
      breedList.innerHTML = ""
      breeds.forEach(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        li.style.cursor = "pointer"
        li.addEventListener("click", () => {
          li.style.color = "blue"
        })
        breedList.appendChild(li)
      })
    }
  
    dropdown.addEventListener("change", () => {
      const selected = dropdown.value
      const filtered = allBreeds.filter(breed => breed.startsWith(selected))
      renderBreeds(filtered)
    })
  })

  