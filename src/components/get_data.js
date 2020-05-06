// todo usar fetch

export const compareAge = (a, b) => {
  const numA = parseInt(a.age)
  const numB = parseInt(b.age)
  return numA - numB 
}

export const compareName = (a, b) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()

  let comparison = 0;
  if (nameA > nameB){
    comparison = 1
  } else if (nameA < nameB){
    comparison = -1
  }

  return comparison

}

export const compareSport = (a, b) => {
  const sportA = a.sport.toUpperCase()
  const sportB = b.sport.toUpperCase()

  let comparison = 0;
  if (sportA > sportB){
    comparison = 1
  } else if (sportA < sportB){
    comparison = -1
  }

  return comparison

}


const getData = () => {
  return [
      {
        name: "Pickle",
        lastName: "Rick",
        age: "65",
        sport: "Kill rats"
      },
      {
        name: "Artur",
        lastName: "King",
        age: "23",
        sport: "Run"
      },
      {
        name: "Bob",
        lastName: "Maley",
        age: "99",
        sport: "Soccer"
      },
      {
        name: "Pink",
        lastName: "Panter",
        age: "45",
        sport: "Basket"
      }
    ]
}

export default getData