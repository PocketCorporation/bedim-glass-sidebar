const showSidebar=(toggleId,sidebarId)=>{
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId)

    toggle.addEventListener('click',()=>{
        sidebar.classList.toggle('show-sidebar')
    })
}
showSidebar('header-toggle','sidebar')


// DROPDOWN 
const drop = document.querySelectorAll('.drop')

drop.forEach(item=>{
    const dropBtn =item.querySelector('.drop__button')
    const dropList = item.querySelector('.drop__list')
    dropBtn.addEventListener('click', ()=>{
        // 2. Close any other drop lists that are open
        const openItem = document.querySelector('.show-drop')
        // Check if there is an open drop list
        if(openItem && openItem !== item){
            const openList = openItem.querySelector('.drop__list')
            openList.removeAttribute('style')
            openItem.classList.remove('show-drop')
        }

        // 1. Show drop list 
        if(item.classList.contains('show-drop')){
            dropList.removeAttribute('style')
            item.classList.remove('show-drop')
        } else {
            dropList.style.height = dropList.scrollHeight + 'px'
            item.classList.add('show-drop')
        }
    })
})