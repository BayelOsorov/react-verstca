let currentPage = 1
let api = `http://localhost:5000/contacts?_page=${currentPage}&_limit=3`
let secondApi = 'http://localhost:5000/contacts'

let productName = $('#product-name')
let productPhone = $('#product-desc')
let productSurname = $('#product-image')
let btnSave = $('.btn-save')
let modal = $('.modal')

async function addProduct() {
    let name = productName.val()
    let surname = productSurname.val()
    let phone = productPhone.val()

    let contacts = {
        name,
        surname,
        phone,
    }

    try {
        let response = await axios.post(api, contacts)
        console.log(response);
        Toastify({
            text: response.statusText,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }

        }).showToast();
        productName.val('')
        productSurname.val('')
        productPhone.val('')
        modal.modal('hide')
    }
    catch (e) {
        console.log(e);
        Toastify({
            text: e.response.statusText,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            }

        }).showToast();

        modal.modal('hide')

        render(api)
    }
}
btnSave.on('click', addProduct)

//   read

let list = $('.list')
let prev = $('.prev')
let next = $('.next')

async function render(url) {
    try {
        let response = await axios(url)
        list.html('')
        response.data.forEach(item => {
            list.append(`
            <div class="card mt-3 mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h6 class="card-title">${item.surname}</h6>
                    <p class="card-text">${item.phone}</p>
                    <button id=${item.id} type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal"
                        data-bs-target="#editeModal">
                        Изменить
                    </button>
                </div>
            </div>

                       `)
        });
        // Paginagion
        let links = response.headers.link.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim)
        if (!links) {
            prev.attr('disabled', 'true')
            next.attr('disabled', 'true')
            return
        }
        if (links.length === 4) {
            prev.attr('id', links[1])
            next.attr('id', links[2])
            prev.removeAttr('disabled')
            next.removeAttr('disabled')

        } else if (links.length === 3 && currentPage === 1) {
            prev.attr('disabled', 'true')
            next.attr('id', links[1])
        } else if (links.length === 3 && currentPage !== 1) {
            next.attr('disabled', 'true')
            prev.attr('id', links[1])
        }
    }
    catch (e) {
        console.log(e);
    }
}
render(api)
next.on('click', (e) => {
    let url = (e.target.id);
    render(url)
    currentPage++
})
prev.on('click', (e) => {
    let url = (e.target.id);
    render(url)
    currentPage--
})
// search

let searchInp = $('.inp-search')
searchInp.on('input', (e) => {
    let value = e.target.value
    let url = `${api}&q=${value}`
    render(url)
})
// update

let productNameEdit = $('#product-name-edit')
let productPhoneEdit = $('#product-desc-edit')
let productSurnameEdit = $('#product-image-edit')
let btnSaveEdit = $('.btn-save-edit')
let btnDelete = $('.btn-delete')
$(document).on('click', ".edit-btn", async (e) => {
    let id = e.target.id
    try {
        let response = await axios(`${secondApi}/${id}`)
        productNameEdit.val(response.data.name)
        productSurnameEdit.val(response.data.surname)
        productPhoneEdit.val(response.data.phone)
        btnSaveEdit.attr('id', id)
        btnDelete.attr('id', id)
    }
    catch (e) {
        console.log(e);
    }
})
btnSaveEdit.on('click', async (e) => {
    let id = e.target.id
    let name = productNameEdit.val()
    let surname = productSurnameEdit.val()
    let phone = productPhoneEdit.val()
    let contacts = {
        name,
        surname,
        phone,
    }
    try {
        await axios.patch(`${secondApi}/${id}`, contacts)
        modal.modal('hide')
        let url = `http://localhost:5000/contacts?_${currentPage}&_limit=3`
        render(url)
    }
    catch (e) {
        console.log(e);
    }
})

btnDelete.on('click', async (e) => {
    let id = e.target.id
    try {
        await axios.delete(`${secondApi}/${id}`)
        modal.modal('hide')
        let url = `http://localhost:5000/contacts?_${currentPage}&_limit=3`
        render(url)
    }
    catch (e) {
        console.log(e);
    }
})