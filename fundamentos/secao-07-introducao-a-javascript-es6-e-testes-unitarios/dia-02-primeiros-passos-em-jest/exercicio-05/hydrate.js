function hydrate(string) {
  const wordString = string.split('');
  const totalWater = wordString.reduce((previousValue, word) => {
    const num = Number(word);
    if(Number.isNaN(num)) {
      return previousValue
    }
    return previousValue + num
  }, 0)
  const result = `${totalWater} copo${(totalWater === 1)?'':'s'} de água`
  return result;
}

module.exports = hydrate;