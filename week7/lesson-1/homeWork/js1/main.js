let tbody = $('tbody')
let closeBtn = $('.close11')
let lit = $('.modal11')
let api = 'https://pokeapi.co/api/v2/pokemon/'
fetch(api)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(function (item, i) {
            tbody.append(`<ul>
            <li class="pokemon">${item.name}</li>
            </ul>`)
            $('.pokemon').each(function (index) {
                $(this).on('click', (e) => {
                    e.stopPropagation()
                    e.stopImmediatePropagation()
                    fetch(item.url)
                        .then(res1 => res1.json())
                        .then(data1 => {

                            showModal()

                            $('.lit').append(`
                     <li>type name :${data1.types[0].type.name}</li>
                       <li>weight :${data1.weight}</li>
                      <li>height : ${data1.height}</li>

`);
                            $('.lit').append(`<img src="${data1.sprites.front_default}">`)

                        })


                })

            })


        });
    })
function showModal() {

    $('.modal11').fadeIn(1000)
}
closeBtn.click(() => {
    $('.lit').html('')
    $('.modal11').fadeOut(1000)

})




