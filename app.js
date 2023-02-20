/**
 * Fonction qui calcule des puissances de 2 selon un nombre n donné
 *
 * Cette fonction, c'est une tuerie de sa mèreuh
 * Ca défonce grave!
 *
 * @param {Number} n Le nombre de puissances
 * @returns Tableau de puissances de 2
 *
 * @example
 * calculatePowersofTwo(3) // [1,2,4]
 */
function calculatePowersOfTwo(n) {
  const powersOfTwo = [];

  for (let i = 0; i < n; i += 1) {
    const power = 2 ** i;
    // alternative: let power = 2 ** i;
    powersOfTwo.push(power);
  }

  return powersOfTwo;
}

/**
 * Une fonction qui tue
 * @param {*} powers
 */
function printPowersOfTwo(powers) {
  powers.forEach((power, index) => {
    console.log(`2 à la puissance ${index}: ${power}`);
  });
}

const n = 10;

const powers = calculatePowersOfTwo(n);
printPowersOfTwo(powers);

// TODO
