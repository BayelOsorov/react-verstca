let tbody = $('tbody')
let api = 'https://rickandmortyapi.com/api/character'

function render(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(elem => {
                tbody.append(`
             <ul><li>${elem.name}</li>

             </ul>
             <div class="img" style="background: url(${elem.image}) no-repeat"></div>
            `)

            });
        })
}
render(api)

function postNewInfo(info) {
    fetch('http://localhost:8000/todos', {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })

}
postNewInfo(tbody)