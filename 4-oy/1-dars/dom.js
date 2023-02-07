//js-DOM
let checkbox = document.querySelector('#check')
let button = document.querySelector('#click')

console.log(checkbox);
console.log(button);

checkbox.onchange=function(){
    console.log('Checkbox changed: ', checkbox.checked);

    if(checkbox.chacked){
        button.disabled = false
    }else{
        button.disabled = true
    }
}
