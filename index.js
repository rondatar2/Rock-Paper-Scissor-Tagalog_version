const nameLabel = document.getElementById('name')
const myScore = document.getElementById('my-score')
const opponentScore = document.getElementById('opponent-score')
const batoBtn = document.getElementById('bato-btn')
const papelBtn = document.getElementById('papel-btn')
const guntingBtn = document.getElementById('gunting-btn')
const startBtn = document.getElementById('start-btn')
const myBox = document.getElementById('my-box')
const opponentBox = document.getElementById('opponent-box')
const array = []
let ranNum
let myPick = ''
let opponentPick = ''
let player = ''
let text = ''

let name = prompt('Ano ang iyong pangalan? (Limang letra lamang)')
if(name.length > 5) name = name.substring(0, 5)
else if(name.length < 1) name = "IKAW"
nameLabel.innerHTML = name
batoBtn.addEventListener('click', () => {
    myBox.innerHTML = `
    <i class="fa-solid fa-hand-back-fist fa-10x fa-rotate-90"></i>
    <h1>BATO</h1>
    `
    myPick = 'Bato'
})
papelBtn.addEventListener('click', () => {
    myBox.innerHTML = `
    <i class="fa-solid fa-hand fa-10x fa-rotate-90"></i>
    <h1>PAPEL</h1>
    `
    myPick = 'Papel'
})
guntingBtn.addEventListener('click', () => {
    myBox.innerHTML = `
    <i class="fa-solid fa-hand-scissors fa-10x fa-flip-horizontal"></i>
    <h1>Gunting</h1>
    `
    myPick = 'Gunting'
})

startBtn.addEventListener('click', () => {
    if(!myPick) alert('Pumili ka muna')
    else{
        array.push(
            {
                name: 'Bato',
                isyntax: '<i id= "opponent" class="fa-solid fa-hand-back-fist fa-10x fa-flip-horizontal"></i><h1>BATO</h1>'
            },
            {
                name: 'Papel',
                isyntax:'<i id= "opponent" class="fa-solid fa-hand fa-10x fa-flip-horizontal"></i><h1>PAPEL</h1>'
            },
            {
                name: 'Gunting',
                isyntax: '<i class="fa-solid fa-hand-scissors fa-10x"></i><h1>Gunting</h1>'
            }
        )
        ranNum = Math.floor(Math.random() * 3)
        opponentBox.innerHTML = array[ranNum].isyntax
        opponentPick = array[ranNum].name
        checkTheWinner()
        if(player == 'Win'){
            myScore.textContent++
            text = `Panalo ka!! Swerte mo naman ${name}! ` 
        }
        else if(player == 'Lose'){
            opponentScore.textContent++
            text = `Talo ka bleh!! Malas mo naman ${name}! `
        }
        else{
            text = `Tabla tayo ${name} `
        }
        setTimeout(() => {
            if(!confirm(`${text}Gusto mo pa ba ng rematch?`)){
                myScore.textContent = 0
                opponentScore.textContent = 0
                myBox.innerHTML = ''
                opponentBox.innerHTML = ''
            }
            else{
                myBox.innerHTML = ''
                opponentBox.innerHTML = ''
            }
        }, 50 )
        myPick = ''
    }
})
const checkTheWinner = () => {
    if(myPick == opponentPick) player = 'Draw'
    else if(myPick == "Bato" && opponentPick == 'Gunting') player = 'Win'
    else if(myPick == "Papel" && opponentPick == 'Bato') player = 'Win'
    else if(myPick == "Gunting" && opponentPick == 'Papel') player = 'Win'
    else player = 'Lose'
}
