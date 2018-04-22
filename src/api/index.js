// api/index.js

const surveys = [{  
  id: 1,
  name: 'Dogs',
  created_at: new Date(2018, 1, 1),
  questions: [{
    id: 1,
    text: 'What is your favorite dog?',
    choices: [
      { id: 1, text: 'Beagle', selected: 0 },
      { id: 2, text: 'Labrador', selected: 0 },
      { id: 3, text: 'Rottweiler', selected: 0 }]
  }, {
    id: 2,
    text: 'What is your second favorite dog?',
    choices: [
      { id: 5, text: 'Beagle', selected: 0 },
      { id: 6, text: 'Labrador', selected: 0 },
      { id: 7, text: 'Rottweiler', selected: 0 }]
  }]
}, {
  id: 2,
  name: 'Cars',
  created_at: new Date(2018, 1, 3),
  questions: [{
    id: 5,
    text: 'What is your favorite car?',
    choices: [
      { id: 17, text: 'Corvette', selected: 0 },
      { id: 18, text: 'Mustang', selected: 0 },
      { id: 19, text: 'Camaro', selected: 0 }]
  }, {
    id: 6,
    text: 'What is your second favorite car?',
    choices: [
      { id: 21, text: 'Corvette', selected: 0 },
      { id: 22, text: 'Mustang', selected: 0 },
      { id: 23, text: 'Camaro', selected: 0 }]
  }]
}]

// exportation of the survey 
export function fetchSurveys() {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(surveys)
    }, 300)
  })
}


// characters

const characters = [{
      name: 'Scooby',
      imgSrc: 'https://www.wbkidsgo.com/Portals/4/Images/Content/Characters/Scooby/characterArt-scooby-SD.png'
    }, {
      name: 'Shaggy',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/ShaggyRogers.png/150px-ShaggyRogers.png'
    } ]


// exportation of the characters 
export function fetchcharacters() {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(characters)
    }, 300)
  })
}