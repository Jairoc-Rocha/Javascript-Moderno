"use strict"; // O javaScript acusa mais erros

window.addEventListener('load', () => {
    doSpread();
    doRest();
    doDestructuring();
});

function doSpread() {
  const marriedMen =  people.results.filter( person => {
    return person.name.title === "Mr";
  });
  
  const marriedWomen = people.results.filter( person => {
    return person.name.title === "Ms";
  });

  const marriedPeople = [...marriedMen, ...marriedWomen];

  console.log(marriedMen);
  console.log(marriedWomen);
  console.log(marriedPeople);
}

const doRest = () => {
    console.log(infiniteSum(1, 2));
    console.log(infiniteSum(1, 2, 1000));
    console.log(infiniteSum(1000, 500, 40, 10, 55));
}
const infiniteSum = (...numbers) => {
    return numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
};

const doDestructuring = () => {
    const first = people.results[1];

    const {username, password} = first.login;

    console.log(username);
    console.log(password);
}

