

class World {
    static PLANETS = "planets"
    static PATHS = "path"

    constructor(name, id) {
        this.name = name
        this.container = document.getElementById(id)
        this.planets = []
        this.currentPlanet = ''

        this.state = World.PLANETS
    }

    addPlanet(planet) {
        this.planets.push(planet)
    }

    displayName() {
        console.log(this.name)
    }

    clear() {
        this.container.innerHTML = ""
    }

    goBack() {
        switch(this.state) {
            case World.PLANETS:
                this.state = WORLD.MAIN_MENU
                break
            case World.PATHS:
                this.currentPlanet = ""
                this.clear()
                this.renderPlanets()
                break
            case World.PATH:
                this.clear()
                this.renderPaths()
                break

        }
    }

    renderPlanets = () => {
        world.planets.forEach(planet => {
            let element = planet.render()
        
            element.addEventListener("click", () => {
                console.log("you clicked " + planet.name)
        
                if(this.currentPlanet != planet.name) {
                    this.state = World.PATHS
                    
                    this.currentPlanet = planet.name
                    this.renderPaths(planet)
                }
            })
    
        
            this.container.appendChild(element)
        });
    }

    renderPaths = (planet) => {
        this.clear()
        planet.renderPaths(this.container)
        //planet.renderPaths(pathsDiv)
    }

    restart() {
        lives = 0
        this.renderPlanets()
    }
}