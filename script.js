


let countElement = document.querySelector('.count');

let cartCount = "გიორგი";

cartCount = "სალომე";


countElement.innerHTML = cartCount;

// ასაკი ↓


let changeAge = document.querySelector(".number");

let personAge = 10; // ←

switch (personAge) {
  case 10:
    countElement.innerHTML = "გიორგი";
    break;
  case 15:
    countElement.innerHTML = "მარიამი";
    break;
  case 20:
    countElement.innerHTML = "დიმა";
    break;
  default:
    countElement.innerHTML = "No Name Available.";
}

changeAge.innerHTML = personAge;
