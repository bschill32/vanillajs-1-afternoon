// console.log("It's working!")
let position = []
function play(val){
    let player = document.getElementById('player')
    let square = document.getElementById(val)

    if(square.innerText === ''){
        square.innerText = player.innerText
    if(player.innerText === 'X'){
        player.innerText = 'O'
        square.innerText = 'X'
        position[val] = 'X'
    }else{
        player.innerText = 'X'
        square.innerText = 'O'
        position[val] = 'O'
    }
    }

    let box1 = position[0]
    let box2 = position[1]
    let box3 = position[2]
    let box4 = position[3]
    let box5 = position[4]
    let box6 = position[5]
    let box7 = position[6]
    let box8 = position[7]
    let box9 = position[8]

    if(box1 !== undefined && box4 === box1 && box7 === box1){
        window.alert(`Winner Winner Chicken Dinner ${box1}!`)
    }else if(box2 !== undefined && box5 === box2 && box8 === box2){
        window.alert(`Winner Winner Chicken Dinner ${box2}!`)
    }else if(box3 !== undefined && box6 === box3 && box9 === box3){
        window.alert(`Winner Winner Chicken Dinner ${box3}!`)
    }else if(box1 !== undefined && box2 === box1 && box3 === box1){
        window.alert(`Winner Winner Chicken Dinner ${box1}!`)
    }else if(box4 !== undefined && box5 === box4 && box6 === box4){
        window.alert(`Winner Winner Chicken Dinner ${box4}!`)
    }else if(box7 !== undefined && box8 === box7 && box9 === box7){
        window.alert(`Winner Winner Chicken Dinner ${box7}!`)
    }else if(box1 !== undefined && box5 === box1 && box9 === box1){
        window.alert(`Winner Winner Chicken Dinner ${box1}!`)
    }else if(box7 !== undefined && box5 === box7 && box3 === box7){
        window.alert(`Winner Winner Chicken Dinner ${box7}!`)
    }

    let draw = true
    for (let i = 0; i <= 8; i++) {
        if(position[i] === undefined){
            draw = false
        }
    }
    if(draw === true){
        window.alert(`You both suck...`)
    }

    console.log(position)
}