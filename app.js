let Number=document.getElementById('Number')
let Slider=document.getElementById('Range')
let InputShow=document.getElementById('CreatePass')
let refresh=document.querySelector('.refreshButton')
let copy=document.querySelector('.copyButton')
// radio 
let Say=document.getElementById('SAY')
let read=document.getElementById('read')
let character=document.getElementById('char')
character.checked=true
let radio=document.querySelectorAll('.radio')
// Checkbox
const upperCase=document.getElementById('uppercase')
const lowerCase=document.getElementById('Lowercase')
const Numbers=document.getElementById('Numbers')
const Symbols=document.getElementById('Symbols')
const button=document.getElementById('button')
let finelPass=''
let writePass=''
// Get Slidder value
Slider.addEventListener('input',(e)=>{
    Number.value = Slider.value
})
Number.addEventListener('click',()=>{
     Slider.value = Number.value 
})
Number.addEventListener('keydown',()=>{
    Slider.value = Number.value 
})

const TypePass=()=>{


if (Say.checked) 
{
    upperCase.checked=true
    lowerCase.checked=true
    Symbols.checked=false
    Numbers.checked=false
}
if(read.checked)
{
    upperCase.checked=true
    lowerCase.checked=true
    Symbols.checked=false
    Numbers.checked=false
}
if(character.checked)
{
    upperCase.checked=true
    lowerCase.checked=true
    Symbols.checked=true
    Numbers.checked=true
}
}
upperCase.checked=true
lowerCase.checked=true
Symbols.checked=true
Numbers.checked=true
radio.forEach((rd)=>{
    rd.addEventListener('click',TypePass)
})

const ChosePass = () =>{
    let showPass=''
    for(let i = 0 ; i < Slider.value ; i++)
    {
        showPass += finelPass.charAt(Math.floor(Math.random() * finelPass.length))
    }
    return showPass
}



// Get random pass
const RandomPass = ()=>{
    finelPass=''
    const upperAlpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerAlpha='abcdefghijklmnopqrstuvwxyz'
    const Num='0123456789'
    const symbols='<>!#$%&^*/+-'

    if (upperCase.checked) {
        finelPass += upperAlpha
    }
    if (lowerCase.checked) {
        finelPass += lowerAlpha
    }
    if (Numbers.checked) {
        finelPass += Num
    }
    if (Symbols.checked) {
        finelPass += symbols
    }
    writePass=ChosePass();
    InputShow.value=`${writePass}`
}

button.addEventListener('click',RandomPass)
refresh.addEventListener('click',RandomPass)
copy.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(writePass)
})
