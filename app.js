const blur = document.querySelectorAll('.blur')

//dropdown 

document.addEventListener('click', e =>{
    
    const isDropdownBtn = e.target.matches('[data-dropdown-btn]');
    if(!isDropdownBtn && e.target.closest('[data-dropdown]') !=null) return

    let currentDropdown;
    if(isDropdownBtn){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
       
    }
    
  // blur effect in the background

    blur.forEach((blu)=>{
        if(isDropdownBtn && currentDropdown.classList.contains('active')){
            blu.classList.add('active')
        } else {
            blu.classList.remove('active')
        }
    })

        document.querySelectorAll('[data-dropdown].active').forEach((dropdown)=>{
    if(dropdown === currentDropdown) return
        dropdown.classList.remove('active')
       
        }) 

     
});




// Close Dropdown

const closeDropdown = document.querySelectorAll('.close-fa')

closeDropdown.forEach((close)=>{
    close.addEventListener('click', e =>{
        
        document.querySelectorAll('[data-dropdown].active').forEach((dropdown)=>{
            if(close){
                dropdown.classList.remove('active')
            } 
            
        })

        blur.forEach((blu)=>{

            if(close){
                blu.classList.remove('active')
            } 
    
        })
        
    })
})



