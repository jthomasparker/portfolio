const contactCard = document.getElementById('contact')
const mainCard = document.getElementById('main')
const portCardOne = document.getElementById('portfolio-one')
const portCardTwo = document.getElementById('portfolio-two')
const aboutCard = document.getElementById('about')
const card = document.querySelector('body')
let xCards = [portCardOne, mainCard, portCardTwo]
let yCards = [aboutCard, mainCard, contactCard]

/*document.addEventListener('click', function(e){
    e.preventDefault()
    let id = e.target.id || e.srcElement.id
    console.log(e.target)
}, true)*/

const getElemCoordinates = elem => {
    let box = elem.getBoundingClientRect()
    return {
        left: box.left + pageXOffset,
        top: box.top + pageYOffset,
    }
}

const getMouseCoordinates = e => {
    e.preventDefault()
   // console.log(e.clientX)
    return {
        mouseX: e.clientX,
        mouseY: e.clientY
    }
}

const setElementCoordinates = elem => {
       // elem.style.left = elem.offsetLeft - getMouseCoordinates.mouseX
       let coordinates = getMouseCoordinates
       elem.style.left = (elem.offsetLeft - coordinates.mouseX) + "px"
       elem.style.top = (elem.offsetTop - coordinates.mouseY) + "px"
}

//const release = () => 

//document.onmousemove = getMouseCoordinates
document.addEventListener('mousedown', function(e){
    e.preventDefault()
    let element = e.target
    let elemStartPos = getElemCoordinates(element)
    let mouseStartPos = getMouseCoordinates(e)
    document.onmousemove = setElementCoordinates(element) //getMouseCoordinates
    console.log(elemStartPos, mouseStartPos)
    
    //console.log(getCoordinates(e.target))
})

document.addEventListener('touchstart', function(e){
    e.preventDefault()
    alert("I was touched")
})
