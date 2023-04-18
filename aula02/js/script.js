"use strict"; // O javaScript acusa mais erros

window.addEventListener('load', () => {
    doMap();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
});

//Transformar array e objeto com nome e email
const doMap = () => {
   const nameEmailArray = people.results.map(person => {
    return {
        name: person.name,
        email: person.email
    };
   });
   console.log(nameEmailArray);

   return nameEmailArray;
}

// Filtrar maiores do que 50
const doFilter = () => {
    const olderThan50 = people.results.filter(person => {
        return person.dob.age > 50;
    })
    console.log(olderThan50)
}

// Incluir nova propriedade no objeto
const doForEach = () => {
    const mappedPeople = doMap();

    mappedPeople.forEach(person => {
        person.nameSize = 
            person.name.title.length + 
            person.name.first.length +
            person.name.last.length;
    });
    console.log(mappedPeople);
}

// Somar as idades
const doReduce = () => {
    const totalAges = people.results.reduce((acc, cur) => {
        return acc + cur.dob.age;
    }, 0);
    console.log(totalAges);
}

// Primeiro usuário de Minas Gerais
const doFind = () => {
   const found = people.results.find(person => {
    return person.location.state === "Minas Gerais";
   });
   console.log(found); 
}

// usuários de Minas Gerais
const doSome = () => {
    const some = people.results.some( person => {
        return person.location.state === "Minas Gerais";
    });
    console.log(some);
} 

// (nat = 'BR')
const doEvery = () => {
    const every = people.results.every(person => {
        return person.nat === "BR";
    })

    console.log(every);
}

// Ordenar por nome e idade ASC e DESC
const doSort = () => {
    const mappedNames = people.results
      .map(person => {
        return {
          name: person.name.first
        };
      })
      .filter(person => person.name.startsWith('A'))
      .sort((a, b) => {
        //return b.name.length - a.name.length;
        return a.name.localeCompare(b.name);
      });
  
    console.log(mappedNames);
  }
