const checkbox = document.querySelector('#switch');
const label = document.querySelector('.switch-label')


checkbox.addEventListener('change', ()=>{
    if(checkbox.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        
    } else{
        document.documentElement.setAttribute('data-theme', 'light')
    }
})