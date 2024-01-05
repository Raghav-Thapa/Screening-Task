function boxy(n) {
    let result = ''
    let print = ''
    for(i = 1; i <= n; i++){
        result += `|${i}|`
        print += ' - '
    }
    console.log(print)
    console.log(result)
    console.log(print)
}

// boxy(1)

boxy(3)




