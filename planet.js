class Path {

    static EMPTY = "empty"
    static DANGER = "danger"
    static WALDO = "waldo"

    constructor(name, type) {
        this.name = name
        this.type = type
    }
}

class Planet {
    constructor(name, img, radius, position) {
        this.name = name
        this.img = img
        this.radius = radius
        this.position = position
        this.paths = []
    }

    addPath(path) {
        this.paths.push(path)
    }

    render() {
        let element = document.createElement("div") 
        element.innerHTML = `<img src="${this.img}" width="${this.radius}px" id=${this.name}>`
        return element
    }

    renderPaths(container) {
        container.appendChild(this.render())

        console.log("Planet renderPaths")
        this.paths.forEach(path => {
            let element = document.createElement("div")

            console.log("path " + path.name)

            //element.innerHTML = `<img src="${this.img}" width="${this.radius}px" id=${this.name}>`
            element.innerHTML = `<h2>${path.name}</h2>`


            element.addEventListener("click", () => {
                console.log("you clicked " + path.name)
                console.log("path type " + path.type)
                const callback = ("Good job") 
    
                if(path.type == Path.DANGER) {
                    showDialog("You clicked a gangerous path. You lost a life!", "Alrighty Then", callback)
                    console.log("oh no")

                    decreaseLife()
                    //lifeDiv.innerHTML = `Life: ${life}`
                } else if(path.type == Path.WALDO) {
                    showDialog("You won!", callback)
                    console.log("You won!")
                } else {
                    showDialog("There's nothing here", "Alrighty Then", callback)
                    console.log("There's nothing here")
                } if (life === 0) {
                    showDialog("Game Over!", callBack)
                    console.log("game Over")
                    element.life.reload()
                }
                    
    
                console.log("life = " + life)
    
                
                    
            })
    
            container.appendChild(element)
        })
    }
}



