import ancientsData from './data/ancients.js';

let level = '';
let ancient = '';

const blueCards = [
  {
    cardFace: './assets/MythicCards/blue/blue1.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue2.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue3.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue4.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue5.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue6.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue7.png',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue8.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue9.png',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue10.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue11.png',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    cardFace: './assets/MythicCards/blue/blue12.png',
    difficulty: 'normal',
    color: 'blue'
  },
];

const brownCards = [
  {
    cardFace: './assets/MythicCards/brown/brown1.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown2.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown3.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown4.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown5.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown6.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown7.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown8.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown9.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown10.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown11.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown12.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown13.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown14.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown15.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown16.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown17.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown18.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown19.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown20.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    cardFace: './assets/MythicCards/brown/brown21.png',
    difficulty: 'easy',
    color: 'brown'
  },
];

const greenCards = [
  {
    cardFace: './assets/MythicCards/green/green1.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green2.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green3.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green4.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green5.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green6.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green7.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green8.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green9.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green10.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green11.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green12.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green13.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green14.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green15.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green16.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green17.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    cardFace: './assets/MythicCards/green/green18.png',
    difficulty: 'easy',
    color: 'green'
  },
];

const levels = document.querySelectorAll('.level');
levels.forEach(value => value.addEventListener('click', () => {
  levels.forEach(value => value.classList.remove('active'));
  value.classList.add('active');
  level = value.innerHTML;
}));

const ancients = document.querySelectorAll('.ancients__image');

ancients.forEach(value => value.addEventListener('click', (e) => {
  e.preventDefault();
  ancients.forEach(value => value.classList.remove('active__img'));
  value.classList.add('active__img');
  ancient = value.dataset.name;
}));

const button = document.querySelector('.cards__deck');

const green1 = document.querySelector('.stage1 .green');
const brown1 = document.querySelector('.stage1 .brown');
const blue1 = document.querySelector('.stage1 .blue');

const green2 = document.querySelector('.stage2 .green');
const brown2 = document.querySelector('.stage2 .brown');
const blue2 = document.querySelector('.stage2 .blue');

const green3 = document.querySelector('.stage3 .green');
const brown3 = document.querySelector('.stage3 .brown');
const blue3 = document.querySelector('.stage3 .blue');

const cardsImage = document.querySelector('.cards__image');
const cardsCard = document.querySelector('.cards__card');

const cardsForGame = {
  green: {
    greenLevelVeryEasy: [],
    greenLevelEasy: [],
    greenLevelMiddle: [],
    greenLevelHard: [],
    greenLevelVeryHard: [],
  },
  blue: {
    blueLevelVeryEasy: [],
    blueLevelEasy: [],
    blueLevelMiddle: [],
    blueLevelHard: [],
    blueLevelVeryHard: [],
  },
  brown: {
    brownLevelVeryEasy: [],
    brownLevelEasy: [],
    brownLevelMiddle: [],
    brownLevelHard: [],
    brownLevelVeryHard: [],
  }
}

function sortArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const showCards = [];
const showCardsLevelOne = [];
const showCardsLevelTwo = [];
const showCardsLevelThree = [];

let correntValue;

button.addEventListener('click', () => {
  correntValue = 0;
  cardsImage.style.opacity = '1';
  cardsImage.style.cursor = 'pointer';

  cardsCard.style.opacity = '0';
  showCardsLevelOne.length = 0;
  showCardsLevelTwo.length = 0;
  showCardsLevelThree.length = 0;
  showCards.length = 0;
  if (ancient === 'azathoth') {
    green1.innerHTML = ancientsData[0].firstStage.greenCards;
    green2.innerHTML = ancientsData[0].secondStage.greenCards;
    green3.innerHTML = ancientsData[0].thirdStage.greenCards;

    brown1.innerHTML = ancientsData[0].firstStage.brownCards;
    brown2.innerHTML = ancientsData[0].secondStage.brownCards;
    brown3.innerHTML = ancientsData[0].thirdStage.brownCards;

    blue1.innerHTML = ancientsData[0].firstStage.blueCards;
    blue2.innerHTML = ancientsData[0].secondStage.blueCards;
    blue3.innerHTML = ancientsData[0].thirdStage.blueCards;
  }
  if (ancient === 'cthulhu') {
    green1.innerHTML = ancientsData[1].firstStage.greenCards;
    green2.innerHTML = ancientsData[1].secondStage.greenCards;
    green3.innerHTML = ancientsData[1].thirdStage.greenCards;

    brown1.innerHTML = ancientsData[1].firstStage.brownCards;
    brown2.innerHTML = ancientsData[1].secondStage.brownCards;
    brown3.innerHTML = ancientsData[1].thirdStage.brownCards;

    blue1.innerHTML = ancientsData[1].firstStage.blueCards;
    blue2.innerHTML = ancientsData[1].secondStage.blueCards;
    blue3.innerHTML = ancientsData[1].thirdStage.blueCards;
  }
  if (ancient === 'iogSothoth') {
    green1.innerHTML = ancientsData[2].firstStage.greenCards;
    green2.innerHTML = ancientsData[2].secondStage.greenCards;
    green3.innerHTML = ancientsData[2].thirdStage.greenCards;

    brown1.innerHTML = ancientsData[2].firstStage.brownCards;
    brown2.innerHTML = ancientsData[2].secondStage.brownCards;
    brown3.innerHTML = ancientsData[2].thirdStage.brownCards;

    blue1.innerHTML = ancientsData[2].firstStage.blueCards;
    blue2.innerHTML = ancientsData[2].secondStage.blueCards;
    blue3.innerHTML = ancientsData[2].thirdStage.blueCards;
  }
  if (ancient === 'shubNiggurath') {
    green1.innerHTML = ancientsData[3].firstStage.greenCards;
    green2.innerHTML = ancientsData[3].secondStage.greenCards;
    green3.innerHTML = ancientsData[3].thirdStage.greenCards;

    brown1.innerHTML = ancientsData[3].firstStage.brownCards;
    brown2.innerHTML = ancientsData[3].secondStage.brownCards;
    brown3.innerHTML = ancientsData[3].thirdStage.brownCards;

    blue1.innerHTML = ancientsData[3].firstStage.blueCards;
    blue2.innerHTML = ancientsData[3].secondStage.blueCards;
    blue3.innerHTML = ancientsData[3].thirdStage.blueCards;
  }
  let countGreenCards = +green1.innerHTML + +green2.innerHTML + +green3.innerHTML;
  let countBrownCards = +brown1.innerHTML + +brown2.innerHTML + +brown3.innerHTML;
  let countBlueCards = +blue1.innerHTML + +blue2.innerHTML + +blue3.innerHTML;

  let cardsGreenSort = {
    greenEasy: [],
    greenNormal: [],
    greenHard: [],
  };
  let cardsBrownSort = {
    brownEasy: [],
    brownNormal: [],
    brownHard: [],
  };
  let cardsBlueSort = {
    blueEasy: [],
    blueNormal: [],
    blueHard: [],
  };

  function findCards(array, level, result) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].difficulty === level) {
        result.push(array[i]);
      }
    }
    return result;
  }

  findCards(brownCards, 'easy', cardsBrownSort.brownEasy);
  findCards(greenCards, 'easy', cardsGreenSort.greenEasy);
  findCards(blueCards, 'easy', cardsBlueSort.blueEasy);

  findCards(brownCards, 'normal', cardsBrownSort.brownNormal);
  findCards(greenCards, 'normal', cardsGreenSort.greenNormal);
  findCards(blueCards, 'normal', cardsBlueSort.blueNormal);

  findCards(brownCards, 'hard', cardsBrownSort.brownHard);
  findCards(greenCards, 'hard', cardsGreenSort.greenHard);
  findCards(blueCards, 'hard', cardsBlueSort.blueHard);

  sortArray(cardsBrownSort.brownEasy);
  sortArray(cardsGreenSort.greenEasy);
  sortArray(cardsBlueSort.blueEasy);

  sortArray(cardsBrownSort.brownNormal);
  sortArray(cardsGreenSort.greenNormal);
  sortArray(cardsBlueSort.blueNormal);

  sortArray(cardsBrownSort.brownHard);
  sortArray(cardsGreenSort.greenHard);
  sortArray(cardsBlueSort.blueHard);

  if (level === 'Очень легкий') {
    cardsForGame.brown.brownLevelVeryEasy = sortArray([
      ...cardsBrownSort.brownEasy,
    ].slice(0, countBrownCards));

    cardsForGame.green.greenLevelVeryEasy = sortArray([
      ...cardsGreenSort.greenEasy,
    ].slice(0, countGreenCards));

    cardsForGame.blue.blueLevelVeryEasy = sortArray([
      ...cardsBlueSort.blueEasy,
    ].slice(0, countBlueCards));

    if (cardsForGame.brown.brownLevelVeryEasy.length < countBrownCards) {
      cardsForGame.brown.brownLevelVeryEasy.push(...cardsBrownSort.brownNormal
        .slice(0, countBrownCards - cardsForGame.brown.brownLevelVeryEasy.length));
    }

    if (cardsForGame.green.greenLevelVeryEasy.length < countGreenCards) {
      cardsForGame.green.greenLevelVeryEasy.push(...cardsGreenSort.greenNormal
        .slice(0, countGreenCards - cardsForGame.green.greenLevelVeryEasy.length));
    }

    showCardsLevelOne.push(...cardsForGame.green.greenLevelVeryEasy.splice(0, +green1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.brown.brownLevelVeryEasy.splice(0, +brown1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.blue.blueLevelVeryEasy.splice(0, +blue1.innerHTML));
    showCards.push(...sortArray(showCardsLevelOne));

    showCardsLevelTwo.push(...cardsForGame.green.greenLevelVeryEasy.splice(0, +green2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.brown.brownLevelVeryEasy.splice(0, +brown2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.blue.blueLevelVeryEasy.splice(0, +blue2.innerHTML));
    showCards.push(...sortArray(showCardsLevelTwo));

    showCardsLevelThree.push(...cardsForGame.green.greenLevelVeryEasy.splice(0, +green3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.brown.brownLevelVeryEasy.splice(0, +brown3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.blue.blueLevelVeryEasy.splice(0, +blue3.innerHTML));
    showCards.push(...sortArray(showCardsLevelThree));
  }

  if (level === 'Легкий') {
    cardsForGame.brown.brownLevelEasy = sortArray([
      ...cardsBrownSort.brownEasy,
      ...cardsBrownSort.brownNormal,
    ].slice(0, countBrownCards));

    cardsForGame.green.greenLevelEasy = sortArray([
      ...cardsGreenSort.greenEasy,
      ...cardsGreenSort.greenNormal,
    ].slice(0, countGreenCards));

    cardsForGame.blue.blueLevelEasy = sortArray([
      ...cardsBlueSort.blueEasy,
      ...cardsBlueSort.blueNormal,
    ].slice(0, countBlueCards));

    showCardsLevelOne.push(...cardsForGame.green.greenLevelEasy.splice(0, +green1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.brown.brownLevelEasy.splice(0, +brown1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.blue.blueLevelEasy.splice(0, +blue1.innerHTML));
    showCards.push(...sortArray(showCardsLevelOne));

    showCardsLevelTwo.push(...cardsForGame.green.greenLevelEasy.splice(0, +green2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.brown.brownLevelEasy.splice(0, +brown2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.blue.blueLevelEasy.splice(0, +blue2.innerHTML));
    showCards.push(...sortArray(showCardsLevelTwo));

    showCardsLevelThree.push(...cardsForGame.green.greenLevelEasy.splice(0, +green3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.brown.brownLevelEasy.splice(0, +brown3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.blue.blueLevelEasy.splice(0, +blue3.innerHTML));
    showCards.push(...sortArray(showCardsLevelThree));
  }

  if (level === 'Средний') {
    cardsForGame.brown.brownLevelMiddle = sortArray([
      ...cardsBrownSort.brownEasy,
      ...cardsBrownSort.brownNormal,
      ...cardsBrownSort.brownHard
    ].slice(0, countBrownCards));

    cardsForGame.green.greenLevelMiddle = sortArray([
      ...cardsGreenSort.greenEasy,
      ...cardsGreenSort.greenNormal,
      ...cardsGreenSort.greenHard
    ].slice(0, countGreenCards));

    cardsForGame.blue.blueLevelMiddle = sortArray([
      ...cardsBlueSort.blueEasy,
      ...cardsBlueSort.blueNormal,
      ...cardsBlueSort.blueHard
    ].slice(0, countBlueCards));

    showCardsLevelOne.push(...cardsForGame.green.greenLevelMiddle.splice(0, +green1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.brown.brownLevelMiddle.splice(0, +brown1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.blue.blueLevelMiddle.splice(0, +blue1.innerHTML));
    showCards.push(...sortArray(showCardsLevelOne));

    showCardsLevelTwo.push(...cardsForGame.green.greenLevelMiddle.splice(0, +green2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.brown.brownLevelMiddle.splice(0, +brown2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.blue.blueLevelMiddle.splice(0, +blue2.innerHTML));
    showCards.push(...sortArray(showCardsLevelTwo));

    showCardsLevelThree.push(...cardsForGame.green.greenLevelMiddle.splice(0, +green3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.brown.brownLevelMiddle.splice(0, +brown3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.blue.blueLevelMiddle.splice(0, +blue3.innerHTML));
    showCards.push(...sortArray(showCardsLevelThree));
  }

  if (level === 'Высокий') {
    cardsForGame.brown.brownLevelHard = sortArray([
      ...cardsBrownSort.brownNormal,
      ...cardsBrownSort.brownHard
    ].slice(0, countBrownCards));

    cardsForGame.green.greenLevelHard = sortArray([
      ...cardsGreenSort.greenNormal,
      ...cardsGreenSort.greenHard
    ].slice(0, countGreenCards));

    cardsForGame.blue.blueLevelHard = sortArray([
      ...cardsBlueSort.blueNormal,
      ...cardsBlueSort.blueHard
    ].slice(0, countBlueCards));

    showCardsLevelOne.push(...cardsForGame.green.greenLevelHard.splice(0, +green1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.brown.brownLevelHard.splice(0, +brown1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.blue.blueLevelHard.splice(0, +blue1.innerHTML));
    showCards.push(...sortArray(showCardsLevelOne));

    showCardsLevelTwo.push(...cardsForGame.green.greenLevelHard.splice(0, +green2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.brown.brownLevelHard.splice(0, +brown2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.blue.blueLevelHard.splice(0, +blue2.innerHTML));
    showCards.push(...sortArray(showCardsLevelTwo));

    showCardsLevelThree.push(...cardsForGame.green.greenLevelHard.splice(0, +green3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.brown.brownLevelHard.splice(0, +brown3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.blue.blueLevelHard.splice(0, +blue3.innerHTML));
    showCards.push(...sortArray(showCardsLevelThree));
  }

  if (level === 'Очень высокий') {
    cardsForGame.brown.brownLevelVeryHard = sortArray([
      ...cardsBrownSort.brownHard
    ].slice(0, countBrownCards));

    cardsForGame.green.greenLevelVeryHard = sortArray([
      ...cardsGreenSort.greenHard
    ].slice(0, countGreenCards));

    cardsForGame.blue.blueLevelVeryHard = sortArray([
      ...cardsBlueSort.blueHard
    ].slice(0, countBlueCards));

    if (cardsForGame.brown.brownLevelVeryHard.length < countBrownCards) {
      cardsForGame.brown.brownLevelVeryHard.push(...cardsBrownSort.brownNormal
        .slice(0, countBrownCards - cardsForGame.brown.brownLevelVeryHard.length));
    }

    if (cardsForGame.green.greenLevelVeryHard.length < countGreenCards) {
      cardsForGame.green.greenLevelVeryHard.push(...cardsGreenSort.greenNormal
        .slice(0, countGreenCards - cardsForGame.green.greenLevelVeryHard.length));
    }

    showCardsLevelOne.push(...cardsForGame.green.greenLevelVeryHard.splice(0, +green1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.brown.brownLevelVeryHard.splice(0, +brown1.innerHTML));
    showCardsLevelOne.push(...cardsForGame.blue.blueLevelVeryHard.splice(0, +blue1.innerHTML));
    showCards.push(...sortArray(showCardsLevelOne));

    showCardsLevelTwo.push(...cardsForGame.green.greenLevelVeryHard.splice(0, +green2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.brown.brownLevelVeryHard.splice(0, +brown2.innerHTML));
    showCardsLevelTwo.push(...cardsForGame.blue.blueLevelVeryHard.splice(0, +blue2.innerHTML));
    showCards.push(...sortArray(showCardsLevelTwo));

    showCardsLevelThree.push(...cardsForGame.green.greenLevelVeryHard.splice(0, +green3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.brown.brownLevelVeryHard.splice(0, +brown3.innerHTML));
    showCardsLevelThree.push(...cardsForGame.blue.blueLevelVeryHard.splice(0, +blue3.innerHTML));
    showCards.push(...sortArray(showCardsLevelThree));
  }
})

cardsImage.addEventListener('click', showImage);

function showImage() {
  cardsCard.style.opacity = '1';
  if (showCards[correntValue] === showCards[showCards.length - 1]) {
    cardsImage.style.opacity = '0';
    cardsImage.style.cursor = 'auto';
  }
  let currentColor = showCards[correntValue].color;

  if (currentColor === 'green') {
    if (+green2.innerHTML === 0 && (+green1.innerHTML === 0)) {
      green3.innerHTML -= 1;
    }
    if (+green1.innerHTML < 1 && (+green2.innerHTML > 0)) {
      green2.innerHTML -= 1;
    }
    if (+green1.innerHTML > 0) {
      green1.innerHTML -= 1;
    }
  }

  if (currentColor === 'brown') {
    if (+brown2.innerHTML === 0 && (+brown1.innerHTML === 0)) {
      brown3.innerHTML -= 1;
    }
    if (+brown1.innerHTML === 0 && (+brown2.innerHTML > 0)) {
      brown2.innerHTML -= 1;
    }
    if (+brown1.innerHTML > 0) {
      brown1.innerHTML -= 1;
    }
  }

  if (currentColor === 'blue') {
    if (+blue2.innerHTML === 0 && (+blue1.innerHTML === 0)) {
      blue3.innerHTML -= 1;
    }
    if ((+blue1.innerHTML === 0) && (+blue2.innerHTML > 0)) {
      blue2.innerHTML -= 1;
    }
    if (+blue1.innerHTML > 0) {
      blue1.innerHTML -= 1;
    }
  }

  cardsCard.style.background = `url(${showCards[correntValue++].cardFace}) center / contain no-repeat`;
}
