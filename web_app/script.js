var tabs = document.querySelectorAll('.tab')
var current_page = 1
var max_page = 22

var left_arrow = document.querySelector('#left_arrow')
var right_arrow = document.querySelector('#right_arrow')
var pages = document.querySelector("#pages")

left_arrow.addEventListener('click', decrease_page)
right_arrow.addEventListener('click', increase_page)

tabs.forEach(el => {
    el.addEventListener('click', function() {
        info = document.querySelector('#information_container')
        products = document.querySelector('#products_container')
        if (el.id == "tab_info") {
            tab = document.querySelector('#tab_info')
            tab.classList.add('selected')
            otherTab = document.querySelector('#tab_products')
            otherTab.classList.remove('selected')
            info.classList.remove('hidden')
            products.classList.add('hidden')
        } else {
            tab = document.querySelector('#tab_products')
            tab.classList.add('selected')
            otherTab = document.querySelector('#tab_info')
            otherTab.classList.remove('selected')
            products.classList.remove('hidden')
            info.classList.add('hidden')
        }
    })
});

var checkboxes = document.querySelectorAll('.checkbox')

checkboxes.forEach(el => {
    el.addEventListener('click', function() {
        var children = el.childNodes
        children[1].classList.toggle('hidden')
    })
})

document.querySelector('#save').addEventListener('click', function() {
    save()
})

document.querySelector('#edit_box_save').addEventListener('click', function() {
    save()
})

document.querySelector('#quit').addEventListener('click', function() {
    quit()
})

document.querySelector('#edit').addEventListener('click', function() {
    edit()
})

function save() {
    console.log('save')
}

function quit() {
    console.log('exit')
}

function edit() {
    console.log('edit')
}

function increase_page() {
    if (current_page == max_page) {
        return
    }
    current_page += 1
    change_page()
}

function decrease_page() {
    if (current_page == 1) {
        return
    }
    current_page -= 1
    change_page()
}

function change_page() {
    if (current_page == 1) {
        left_arrow.src = "./images/arrow_left_gray.svg"
    } else {
        left_arrow.src = "./images/arrow_left_blue.svg"
    }

    if (current_page == max_page) {
        right_arrow.src = "./images/arrow_right_gray.svg"
    } else {
        right_arrow.src = "./images/arrow_right_blue.svg"
    }
    console.log(pages.textContent)
    pages.textContent=current_page + "/" + max_page
}