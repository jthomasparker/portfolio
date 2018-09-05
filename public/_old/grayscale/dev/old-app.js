const card = document.querySelector('.middle')
$(document).ready(function(){

    $('body').on('click', '.top', function(){
        scrollCards(1, 0)
    })
    $('body').on('click', '.bottom', function(){
        scrollCards(-1, 0)
    })
    $('body').on('click', '.left', function(){
        scrollCards(0, -1)
    })
    $('body').on('click', '.right', function(){
        scrollCards(0, 1)
    })

  //  $('body').mousedown(function(e){
  //      alert("I was clicked")
  //  })


})

card.addEventListener('click',function(e){
    e.preventDefault();
    alert("I was clicked")
    scrollCards(0, 1)
})
    
    
function scrollCards(vertical, horizontal){

    let topCard = $('.top')
    let middleCard = $('.middle')
    let bottomCard = $('.bottom')
    let leftCard = $('.left')
    let rightCard = $('.right')
    let cardPositions = {
        topCardPos: {
            top: -75,
            bottom: 95
        },
        midCardPos: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        },
        botCardPos: {
            top: 95,
            bottom: -75
        },
        leftCardPos: {
            left: -75,
            right: 95
        },
        rightCardPos: {
            left: 95,
            right: -75
        },
    }
    let count = 0;
    let id = setInterval(move, 5)
    function move() {
            count++
            if(count <= 85){
            cardPositions.topCardPos.bottom -= vertical
            cardPositions.topCardPos.top += vertical
            cardPositions.midCardPos.bottom -= vertical
            cardPositions.midCardPos.top += vertical
            cardPositions.midCardPos.left -= horizontal
            cardPositions.midCardPos.right += horizontal
            cardPositions.botCardPos.bottom -= vertical
            cardPositions.botCardPos.top += vertical
            cardPositions.leftCardPos.left -= horizontal
            cardPositions.leftCardPos.right += horizontal
            cardPositions.rightCardPos.left -= horizontal
            cardPositions.rightCardPos.right += horizontal

            if(cardPositions.botCardPos.top === 175) {
                cardPositions.botCardPos.bottom = 100
                cardPositions.botCardPos.top = -80
            }
            if(cardPositions.topCardPos.bottom === 175){
                cardPositions.topCardPos.bottom = -80
                cardPositions.topCardPos.top = 100
            }
            if(cardPositions.rightCardPos.left === 175){
                cardPositions.rightCardPos.left = -80
                cardPositions.rightCardPos.right = 100
            }
            if(cardPositions.leftCardPos.right === 175){
                cardPositions.leftCardPos.left = 100
                cardPositions.leftCardPos.right = -80
            }

            
        } else {
            if(vertical === 1){
            topCard.removeClass('top').addClass('middle')
            middleCard.removeClass('middle').addClass('bottom')
            bottomCard.removeClass('bottom').addClass('top')
            } else if(vertical === -1){
                topCard.removeClass('top').addClass('bottom')
                middleCard.removeClass('middle').addClass('top')
                bottomCard.removeClass('bottom').addClass('middle')
            }
            if(horizontal === -1){
                leftCard.removeClass('left').addClass('middle')
                middleCard.removeClass('middle').addClass('right')
                rightCard.removeClass('right').addClass('left')
            } else if(horizontal === 1){
                leftCard.removeClass('left').addClass('right')
                middleCard.removeClass('middle').addClass('left')
                rightCard.removeClass('right').addClass('middle')

            }
            
            clearInterval(id)
        }
        topCard.css({
            top: cardPositions.topCardPos.top + '%',
            bottom: cardPositions.topCardPos.bottom + '%'
        })
        middleCard.css({
            top: cardPositions.midCardPos.top + '%',
            bottom: cardPositions.midCardPos.bottom + '%',
            left: cardPositions.midCardPos.left + '%',
            right: cardPositions.midCardPos.right + '%'
        })
        bottomCard.css({
            top: cardPositions.botCardPos.top + '%',
            bottom: cardPositions.botCardPos.bottom + '%'
        })
        leftCard.css({
            left: cardPositions.leftCardPos.left + '%',
            right: cardPositions.leftCardPos.right + '%'
        })
        rightCard.css({
            left: cardPositions.rightCardPos.left + '%',
            right: cardPositions.rightCardPos.right + '%'
        })
        
    }

}

