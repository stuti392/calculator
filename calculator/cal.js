(function(){
   
    let screen = document.querySelector('screen');
    let button = document.querySelectorAll('btn');
    let clear = document.querySelector('btn-clear');
    let equal = document.querySelector('btn-equal');
    
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })



})