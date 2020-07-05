const combineArray = (a, b) => {

    const c = []
    const smallerLength = (a.length <= b.length) ? a.length : b.length
    const biggerLength = (a.length >= b.length) ? a.length : b.length

    for (let i = 0; i < smallerLength; i++) {
        c.push(`${a[i]}`, `${b[i]}`)
    }

    for (let i = smallerLength; i < biggerLength; i++) {
        a[i] ? c.push(`${a[i]}`) : null
        b[i] ? c.push(`${b[i]}`) : null
    }

    console.log(`Combined Array : [ ${c} ]`)
}

const a = ['a', 'b', 'c', 'd']
const b = [1, 2, 5, 9, 'z', 11]

combineArray(a, b)
