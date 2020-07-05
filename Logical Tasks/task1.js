const countTinyPair = (a, b, k) => {
    let count = 0
    const arr = []

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            arr.push(Number(`${a[i]}${b[j]}`))
        }
    }

    arr.forEach(element => {
        if (element < k) {
            count += 1
        }
    });

    console.log(`Count : ${count}`)
}

const a = [4, 5, 6, 7]
const b = [1, 2, 3]
const k = 70

countTinyPair(a, b, k)