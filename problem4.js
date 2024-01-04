function boxy(n) {
    let result = ' '
    for(i = 1; i <= n; i++){
        result += `|${i}|`
    }
    console.log(result)
}

boxy(1)
boxy(3)