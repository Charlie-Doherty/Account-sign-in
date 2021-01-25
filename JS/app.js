let darkmode = localStorage.getItem('darkmode');

const toggle = document.querySelector('.toggle');

function enableDarkmode(){
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');

    localStorage.setItem('name', toggle.getAttribute('name'));
    toggle.setAttribute('name', 'moon-outline');
}

function disableDarkmode(){
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);

    localStorage.setItem('name', toggle.getAttribute('name'));
    toggle.setAttribute('name', 'sunny-outline');
}
 
if (darkmode == 'enabled'){
    enableDarkmode();
}

toggle.addEventListener('click', () =>{
    darkmode = localStorage.getItem('darkmode');
  
    if (darkmode != 'enabled'){
        enableDarkmode();
    } 
    else{  
        disableDarkmode(); 
    }
});
