
//EXPOPRT DEFUALT IN A FILE ALONE 
 const sum = (...c) => {
    return c.reduce((acc, value)=> acc+value);
}

  const maxNumber = (...c) => Math.max(...c);
     

 const minNumber = (...c) => Math.min(...c);
     


const square = (a) => {
    return a*a
}

const squareArray = a => a.map((value)=> value*value)

 export {sum, maxNumber, minNumber, square, squareArray}