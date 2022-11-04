class CustomisableCanvas {

    _canvas;
    _ctx;
    _objects = [];
    _selectedObject = null;
    _lastMousePosition = null;

    constructor(canvas, customisationCb = undefined) {
        this._canvas = canvas
        this._ctx = canvas.getContext("2d")
        this._ctx.font = "30px Arial";

        this._canvas.addEventListener("mousedown", (event) => {

            const rect = this._canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            console.log(x, y)
            for (const object of this._objects) {
                if (x >= object.rect.x && x <= object.rect.x + object.rect.width &&
                    y >= object.rect.y && y <= object.rect.y + object.rect.height) {
                    this._selectedObject = object
                    this._lastMousePosition = {x, y}
                }
            }
            console.log(this._selectedObject)
        })

        this._canvas.addEventListener("mousemove", (event) => {
            if (this._selectedObject == null)
                return

            console.log(this._selectedObject)

            const rect = this._canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            this.moveObject(this._selectedObject, this._selectedObject.rect.x + x - this._lastMousePosition.x, this._selectedObject.rect.y + y - this._lastMousePosition.y)
            this._lastMousePosition = {x, y}
            this.render()
        })

        this._canvas.addEventListener("contextmenu", (event) => {
            event.preventDefault()
            if (this._selectedObject == null)
                return
            this._objects.splice(this._objects.indexOf(this._selectedObject), 1)
            this._selectedObject = null
            this.render()
        })

        this._canvas.addEventListener("mouseup", (event) => {
            this._selectedObject = null
            if (customisationCb !== undefined)
                customisationCb(this)
        })

        this._canvas.addEventListener("mouseleave", (event) => {
            this._selectedObject = null
        })
    }


    addImage(image) {
        this._objects.push({
            image,
            rect: {
                x: 0,
                y: 0,
                width: image.width,
                height: image.height
            }
        })
    }

    addText(text, color = "#000000") {
        // noinspection JSSuspiciousNameCombination - it's not a mistake, https://stackoverflow.com/a/13318387
        const height = this._ctx.measureText('M').width;
        const {width} = this._ctx.measureText(text)

        this._objects.push({
            text,
            color,
            rect: {
                x: 0,
                y: 0,
                width,
                height
            }
        })
    }

    moveObject(object, x, y) {
        object.rect.x = x
        object.rect.y = y
    }

    saveCustomizations() {
        return JSON.stringify(this._objects)
    }

    loadCustomizations(customizations) {
        this._objects = JSON.parse(customizations)
        this.render()
    }

    render() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
        for (const object of this._objects) {
            if (object.image) {
                this._ctx.drawImage(object.image, object.rect.x, object.rect.y)
            } else if (object.text) {
                console.log(object)
                this._ctx.fillStyle = object.color
                this._ctx.fillText(object.text, object.rect.x, object.rect.y + object.rect.height)
            }
        }
    }

}