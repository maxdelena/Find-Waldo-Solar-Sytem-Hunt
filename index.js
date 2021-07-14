let life = 5

const updateLife = (newLife) => {
    life = newLife

    let lifeDiv = document.getElementById("life")
    lifeDiv.innerHTML = `Life: ${life}`
}

const decreaseLife = () => {    

    updateLife(life - 1)

    if(life === 0) {
        showDialog("There's nothing here", "Restart", callback)
        console.log("Game Over")
    }
}

const resetLife = () => {    
    updateLife(5)
}


let planet1 = new Planet("Mercury", "planets/Mercury.svg", 150) 

let path1 = new Path("Crater", Path.EMPTY)
let path2 = new Path("Big Crater", Path.EMPTY)
let path3 = new Path("Small Crater", Path.Empty);

planet1.addPath(path1)
planet1.addPath(path2)
planet1.addPath(path3) 


let planet2 = new Planet("Venus", "planets/Venus.svg", 350 )

let pathV1 = new Path("Acid Cloud", Path.DANGER)
let pathV2 = new Path("Volcano", Path.DANGER)
let pathV3 = new Path("Terrestrial River", Path.DANGER)
let pathV4 = new Path("Coronae", Path.EMPTY);

planet2.addPath(pathV1)
planet2.addPath(pathV2)
planet2.addPath(pathV3)
planet2.addPath(pathV4)

let planet3 = new Planet("Earth", "planets/Earth.svg", 400)

let pathE1 = new Path("Gate", Path.DANGER)
let pathE2 = new Path("Cave", Path.EMPTY)
let pathE3 = new Path("Lost Island", Path.EMPTY)
let pathE4 = new Path("Desert", Path.WALDO)


planet3.addPath(pathE1)
planet3.addPath(pathE2)
planet3.addPath(pathE3)
planet3.addPath(pathE4)

let planet4 = new Planet("Mars", "planets/Mars.svg", 200)

path1 = new Path("Elon Musk", Path.DANGER)
path2 = new Path("Crater", Path.EMPTY)
path3 = new Path("Ancient Ocean", Path.DANGER)
path4 = new Path("Rover", Path.EMPTY)

planet4.addPath(path1)
planet4.addPath(path2)
planet4.addPath(path3)
planet4.addPath(path4)

let planet5 = new Planet("Jupiter", "planets/Jupiter.svg", 500)

path1 = new Path("Gas", Path.DANGER)
path2 = new Path("Eternal Storm", Path.DANGER)

planet5.addPath(path1)
planet5.addPath(path2)

let planet6 = new Planet("Saturn", "planets/Saturn.svg", 420)

path1 = new Path("Rings", Path.DANGER)
path2 = new Path("Rocky Debris", Path.DANGER)
path2 = new Path("Ice", Path.DANGER)

planet6.addPath(path1)
planet6.addPath(path2)

let planet7 = new Planet("Neptune", "planets/Neptune.svg", 300)

path1 = new Path("Glaicer", Path.Empty)
path2 = new Path("Ice Cave", Path.Empty)

planet7.addPath(path1)
planet7.addPath(path2)


let world = new World("Solar System", "world")

world.addPlanet(planet1)
world.addPlanet(planet2)
world.addPlanet(planet3)
world.addPlanet(planet4)
world.addPlanet(planet5)
world.addPlanet(planet6)
world.addPlanet(planet7)


console.log(planet1.name)

let pathsDiv = document.getElementById("paths")

const back = document.getElementById("go-back")
back.addEventListener("click", () => {
    console.log("go back")
    world.goBack()
})

const showDialog = (message, buttonText, callback) => {
    let dialog = document.getElementById("dialog")

    document.getElementById("dialog-message").innerHTML = message

    dialog.className = "visible"

    let button = document.getElementById("dialog-confirm")
    button.innerHTML = buttonText
    button.addEventListener("click", () => {
        dialog.className = "hidden"
        callback()
    })
}

world.renderPlanets()