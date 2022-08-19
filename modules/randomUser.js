const randomName = require(`random-animal-name`);
const id = require(`nid`);
const color = require(`../assets/colors.json`);

function userCard() {
  const randomNumber = (num) => Math.round(Math.random() * num);

  return {
    username: randomName(),
    id: id(3),
    color: color[randomNumber(color.length)].name,
    gender: randomNumber(1) ? `male` : `female`,
    tall: 150 + randomNumber(50) + `cm`,
    yearsOld: randomNumber(100) + ` ` + `years old`,
  };
}
module.exports = (times) => {
  const usersArr = [];

  for (let i = 0; i < times; i++) {
    usersArr.push(userCard());
  }
  console.log(usersArr);
};
