const showSidebar=(toggleId,sidebarId)=>{
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId)

    toggle.addEventListener('click',()=>{
        sidebar.classList.toggle('show-sidebar')
    })
}
showSidebar('header-toggle','sidebar')