import EventEmitter from 'EventEmitter'

let xStart = undefined
let xEnd = undefined
let lastDiff = 0

export const EM = new EventEmitter()

export function startHandler(e) {
    xStart = e.changedTouches[0].clientX
}

export function handleTouches(e) {
    if(!xStart) {
        return
    }
    const diff = e.changedTouches[0].clientX - xStart
    if(diff-lastDiff >= 0.3) {
        EM.emit("menu-move", diff)
        lastDiff = diff
    }
    //EM.emit("menu-move", diff)
}

export function endHandler(e) {
    xEnd = e.changedTouches[0].clientX

    if(xEnd > xStart && xEnd - xStart>10) {
        EM.emit("menu-open")
    }
    else if (xEnd<xStart && xStart - xEnd > 10) {
        EM.emit("menu-close")
    }

    xStart = undefined
    xEnd = undefined
    lastDiff = 0
}