const swapEveryTwoChars = (a) => {
    const swappedArray = []
    const x = a.split('')

    for (let i = 0; i < x.length; i += 2) {
        if (x[i + 1] && x[i])
            swappedArray.push(x[i + 1], x[i])
        else
            swappedArray.push(x[i])
    }

    console.log(`${swappedArray.join('')}`)

}

const a = '1234567abcz7'

swapEveryTwoChars(a)
