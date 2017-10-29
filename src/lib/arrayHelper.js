export const uniqeMerge = (arrayOne, arrayTwo, fieldName) => {
  const result = [...arrayOne];
  const arrayOneFileds = arrayOne.map(item => item[fieldName]);
  arrayTwo.forEach(item => {
    if(!arrayOneFileds.includes(item[fieldName])){
      result.push(item)
    }
  }) ;
  return result;
};

export const minObjectByField = (inputArray, fieldName) => {
 return inputArray.sort((prev, next) => {
   return prev[fieldName] - next[fieldName]
 })[0];
};



