

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name = 'Ralph') {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {

    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const r1 = cats.slice()
    r1.push(name)
    return r1
}
function prependCat(name) {
    const r1 = cats.slice()
    r1.unshift(name)
    return r1
}
function removeLastCat() {
    const r2 = cats.slice()
    r2.pop()
    return r2
}
function removeFirstCat() {
    const r3 = cats.slice()
    r3.shift()
    return r3
}