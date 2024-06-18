const prevButton = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')
const API = 'https://rickandmortyapi.com/api/character/?page='
const characterList = document.getElementById('character-list')
let counter = 1;

const fetchData = (counter) => {
    fetch(`${API}${counter}`).then((response) => {
        if (!response.ok) {
            throw new Error('Error fetching data')
        } else {
            return response.json()
        }
    }).then((data) => {
        // console.log(data.results)
        let elements = data.results.map((item) => {
            return(
                `<li><img src="${item.image}" alt="${item.name}"></img><p><span>Name: </span>${item.name}</p><p><span>Species: </span>${item.species}</p></li>`)
        }).join('')
        
        characterList.innerHTML = elements
    })
}

const subtractValue = () => {
    if (counter <= 1) {
        counter = 1
        
    }
    if (counter > 1) {
        counter -= 1
        fetchData(counter)
    }
}
const addValue = () => {

    counter += 1
    fetchData(counter)
}

document.addEventListener('load', fetchData(counter))
prevButton.addEventListener('click', subtractValue)
nextPage.addEventListener('click', addValue)
