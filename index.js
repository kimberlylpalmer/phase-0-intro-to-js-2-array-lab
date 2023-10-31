const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
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
    //cats.splice(2, 0, (name))
    const newCats = [...cats, (name)]
    return newCats
}

function prependCat(name) {
    const copyOfCats = [(name), ...cats]
    return copyOfCats
}

function removeLastCat() {
    const copyOfCats = [...cats]
    copyOfCats.splice(copyOfCats.length - 1)
    return copyOfCats
}

function removeFirstCat() {
    const copyOfCats = [...cats]
    copyOfCats.splice(0,1)
    return copyOfCats;
}












// const cats = ["Milo", "Otis", "Garfield"];
// function destructivelyAppendCat(name) {
//     cats.push(name)
// };
// function destructivelyPrependCat(name) {
//     cats.unshift(name)
// }
// function destructivelyRemoveLastCat() {
//     cats.pop()
// }
// function destructivelyRemoveFirstCat() {
//     cats.shift()
// }
// function appendCat(name) {
//     // cats.splice(2, 0, (name))
//     const copyOfCats = [...cats, (name)]
// return copyOfCats}

// function prependCat(name) {
//     const copyOfCats = [(name), ...cats]
//     return copyOfCats
// }

// function removeLastCat() {
//     const copyOfCats = [...cats]
//     copyOfCats.splice(2)
//     return copyOfCats
// }

// function removeFirstCat() {
//     const copyOfCats = [...cats]
//     copyOfCats.splice(0, 1)
//     return copyOfCats
// }