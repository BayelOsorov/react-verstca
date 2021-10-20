let currentPage = 1
const API = `http://localhost:8000/products?_page=${currentPage}&_limit=3`
const SECOND_API = 'http://localhost:8000/products'
let productName = $('#product-name')
let productPrice = $('#product-price')
let productDesc = $('#product-desc')
let productImage = $('#product-image')
let btnSave = $('.btn-save')
let modal = $('.modal')
// Create
async function addProduct() {
    let name = productName.val()
    let price = productPrice.val()
    let desc = productDesc.val()
    let image = productImage.val()

    let product = {
        name,
        price,
        desc,
        image,
    }
    try {
        const response = await axios.post(API, product)
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
        modal.modal('hide')
    }
    catch (e) {

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
        render(API)
    }
}

btnSave.on('click', addProduct)
//  ! Read
let list = $('.list')
let prev = $('.prev')
let next = $('.next')

async function render(url) {
    try {
        const response = await axios(url)
        console.log(response.headers.link);
        list.html('')
        response.data.forEach(item => {
            list.append(`
          <div class="card mt-3 mb-3" style="width: 18rem;">
     <img style ="width:100%; height: 190px; object-fit: contain; " src=${item.image} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.desc}</p>
    <a href="#">${item.price}</a>
    <button id=${item.id} type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal"
                            data-bs-target="#editeModal">
                            Изменить
                        </button>
    </div>
</div>
            `)
        });
        // ! Pagination
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
render(API)

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

// ! Search

let searchInp = $('.inp-search')
searchInp.on('input', (e) => {
    let value = e.target.value
    let url = `${API}&q=${value}`
    render(url)
})

// ! Update
let productNameEdit = $('#product-name-edit')
let productPriceEdit = $('#product-price-edit')
let productDescEdit = $('#product-desc-edit')
let productImageEdit = $('#product-image-edit')
let btnSaveEdit = $('.btn-save-edit')
$(document).on('click', ".edit-btn", async (e) => {
    let id = e.target.id
    try {
        const response = await axios(`${SECOND_API}/${id}`)
        productNameEdit.val(response.data.name)
        productPriceEdit.val(response.data.price)
        productDescEdit.val(response.data.desc)
        productImageEdit.val(response.data.image)
        btnSaveEdit.attr('id', id)
    }
    catch (e) {
        console.log(e);
    }
})
btnSaveEdit.on('click', async (e) => {
    let id = (e.target.id);
    let name = productNameEdit.val()
    let price = productPriceEdit.val()
    let desc = productDescEdit.val()
    let image = productImageEdit.val()
    let product = {
        name,
        price,
        desc,
        image
    }
    try {
        await axios.patch(`${SECOND_API}/${id}`, product)
        modal.modal('hide')
        let url = `http://localhost:8000/products?_page=${currentPage}&_limit=3`
        render(url)
    }
    catch (e) {
        console.log(e);
    }
})