const carData = {
  models: ["volvo", "audi", "bentley"],
  color: ["white", "black"],
};
const randomNumber = (num) => Math.round(Math.random() * num);

module.exports = () => {
  return {
    model: carData.models[randomNumber(carData.models.length - 1)],
    color: carData.color[randomNumber(carData.color.length - 1)],
    year: 2000 + randomNumber(20),
    gearBox: randomNumber(1) ? "auto" : "manual",
    millage: randomNumber(200000) + " " + "miles",
    doors: 2 + randomNumber(3),
  };
};
