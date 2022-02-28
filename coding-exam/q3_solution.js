function substring(a,b) {
    const string = 'Hello World 2022';
    const array1 = [...string];
    const stringLength = 0;
    
    if (a > b) {
        let m = a;
        a = b;
        b = m;
    }
    if (b > array1.length) {
        b = array1.length-1;
    }
    if (a < 0) a = 0;

    let newString = '';

    for (let i = a; i <= b; i++) {
        newString += array1[i]
        // console.log(array1[i])
    }
    console.log(newString);
}

substring(2,200);