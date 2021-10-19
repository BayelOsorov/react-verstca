let tbody = $('tbody')
let api = 'https://rickandmortyapi.com/api/character'

function render(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(elem => {
                gg = tbody.append(`
             <ul><h4>${elem.name}</h4>
                <li>${elem.status}</li>
                <li>${elem.species}</li>
                <li>${elem.gender}</li>
             </ul>
             <div class="img" style="background: url(${elem.image}) no-repeat"></div>
            `)

            });
            //postToJsonServer(data.results)
        })
}
render(api)

let api1 = 'http://localhost:8500/characters'

async function postToJsonServer(items) {
    for (let i = 0; i < items.length; i++) {
        await axios.post("http://localhost:8500/characters", items[i]);
    }
}

let list2 = $('.list2')

axios.get(api1)
    .then(res => {
        res.data.forEach((elem) => {
            list2.append(`
              <h4>${elem.name}</h4>
                    <li>${elem.status}</li>
                    <li>${elem.species}</li>
                    <li>${elem.gender}</li>

                 <div class="img" style="background: url(${elem.image}) no-repeat"></div>
            `)

        })
    })
