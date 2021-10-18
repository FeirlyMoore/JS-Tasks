let arrayList = document.querySelector('.task-block-1__list');
let arrayList2 = document.querySelector('.task-block-2__list');


let nums = [1,2,3,4,5,6,7,8,9,10,762367,45,28,666,39];
// let accumulator = [];
// console.log(nums);

// nums.filter(element => !(element % 2));
// nums.reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0);
for (let i = 0; i < nums.length; i++) {
  let newElement = document.createElement('li');
  newElement.classList.add('list__item');
  let b = i + 1;
  newElement.classList.add('list__item-' + b);
  // console.log(nums[i]);
  newElement.textContent = nums[i];
	arrayList.append(newElement)
}

console.log("Задание 2");
for (let i = 1; i <= 10; i++) {
  let newElement = document.createElement('li');
  newElement.classList.add('list__item');
  let sharp = '#'.repeat(i);
  console.log(sharp);
  newElement.textContent = sharp;
  arrayList2.append(newElement)
}

class Animal {

  static type = 'ANIMAL'

  constructor (props) {
    this.name = props.name
    this.age = props.age 
    this.hasTail = props.hasTail
  }

  voice() {
    console.log('I am animal');
  }
}

const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: true
})

