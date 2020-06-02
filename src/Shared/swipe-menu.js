import EventEmitter from 'EventEmitter'

let xStart = undefined
let xEnd = undefined
let lastDiff = 0
let count = 0

export const EM = new EventEmitter()

export function startHandler(e) {
    xStart = Math.round(e.changedTouches[0].clientX)
}

export function handleTouches(e) {
    if(!xStart) {
        return
    }
    const diff = e.changedTouches[0].clientX - xStart
    if(diff-lastDiff >= 1 / window.devicePixelRatio) {
        EM.emit("menu-move", diff)
        count++
        lastDiff = diff
    }
    //EM.emit("menu-move", diff)
}

export function endHandler(e) {
    if(!e.changedTouches[0]) return
    xEnd = Math.round(e.changedTouches[0].clientX)
    console.log(e.changedTouches[0])
    if(xEnd > xStart && xEnd - xStart>10) {
        EM.emit("menu-open")
    }
    else if (xEnd<xStart && xStart - xEnd > 10) {
        EM.emit("menu-close")
    }
    console.log(count)
    xStart = undefined
    xEnd = undefined
    lastDiff = 0
    count = 0
}