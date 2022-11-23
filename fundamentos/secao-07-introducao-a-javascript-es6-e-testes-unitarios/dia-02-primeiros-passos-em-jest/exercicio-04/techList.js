function techList(array, name) {
  if(array.length) {
    const orderedArray = array.sort();
    const resultArray = orderedArray.map(tech => { return { tech, name } });
    return resultArray;
  }
  return 'Vazio!'
}
module.exports = techList;