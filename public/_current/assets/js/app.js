const init = () => {

    window.onscroll = toggleNav

// social icon effects
    const cardImages = document.querySelectorAll('img')
    const cardLinks = document.querySelectorAll('.card-click')

    for(i=0; i < cardImages.length; i++){
        cardImages[i].onmouseover = switchImg
        cardImages[i].onmouseout = switchImg
    }

    for(i=0; i < cardLinks.length; i++){
        cardLinks[i].onclick = scrollToSection
    }

}

function switchImg(e) {
    e = e || window.event;
    e.preventDefault();
    let imgSrc = this.src
    let altSrc = this.getAttribute("data-alt-src")
    if(altSrc){
        console.log("made it")
        this.src = altSrc
        this.setAttribute("data-alt-src", imgSrc)
    }
}

function scrollToSection(e) {
    e = e || window.event;
    e.preventDefault();
    let id = this.getAttribute("data-target")
    let element = document.getElementById(id)
    element.scrollIntoView();
}

function toggleNav(){
    const mainNav = document.getElementById("mainNav")
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        mainNav.style.visibility = "visible"
        mainNav.style.opacity = .75

    } else {
        mainNav.style.opacity = 0
        document.getElementById("mainNav").style.visibility = "hidden"
    }
}

