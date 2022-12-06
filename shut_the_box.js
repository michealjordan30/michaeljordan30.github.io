window.onload = document.getElementById("submit_btn").disabled = true;

let unchecked_total = 45;

let dice_roll = null;
let dice_result = 0;
//console.log(dice_result);
const roll_dice_bt = document.getElementById('roll_dice_btn');
roll_dice_btn.addEventListener('click', roll_dice);

const submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', submit);

const finish_btn = document.getElementById('finish_btn');
finish_btn.addEventListener('click', finish);



let lol = document.getElementsByTagName("span")[0];

function roll_dice() {
  // Roll dice, inject text, disable / enable buttons.
  let dice1 = Math.floor(1 + 6 * Math.random());
  let dice2 = Math.floor(1 + 6 * Math.random());
  dice_result = dice1 + dice2;

  let string = `${dice1} + ${dice2} = ${dice1+dice2}`;
  lol.innerHTML = string;

  document.getElementById("roll_dice_btn").disabled = true;
  document.getElementById("submit_btn").disabled = false;

}



function roll_die() {
  let dice1 = Math.floor(1 + 6 * Math.random());
  dice_result = dice1;

  let string = `${dice1}`;
  lol.innerHTML = string;

  document.getElementById("roll_dice_btn").disabled = true;
  document.getElementById("submit_btn").disabled = false;
}


let table_boxes = document.getElementById('table');
let checkboxes = table.getElementsByTagName('td');

for (let i = 0; i < 9; i++) {
  checkboxes[i].addEventListener('click', sum_checked_values);
}

let numbers = document.getElementById('numbers');
let click_nums = numbers.getElementsByTagName('th');

/* for (let i=0;i<9;i++) {
click_nums[i].addEventListener('click',function(){ if (checkboxes[i].disabled===false){checkbox[i].checked=true}; });
//} */


for (let i = 0; i < 9; i++) {
  click_nums[i].addEventListener('click', function() {
    if (document.getElementById(i + 1).disabled === false) {
      document.getElementById(i + 1).checked = !document.getElementById(i + 1).checked
      
    } 
   
  });
}



function sum_checked_values() {
  let list1 = [];
  for (i = 1; i < 10; i++) {

    if (document.getElementById(i).checked === true) {
      list1.push(i);
    }
  }
  let sum = 0;

  for (const value of list1) {
    sum += value;
  }
  return (sum);
}



let sum_unchecked = 0;

function submit() {
  let test = sum_checked_values();


  //console.log(test);
  //console.log(dice_result);



  if (test !== dice_result) {
    //console.log("DABABY");
    alert("The total of the boxes you selected does not match the dice roll. Please make another selection and try again.");
  } else {

    for (i = 1; i < 10; i++) {
      if (document.getElementById(i).checked === true) {
        document.getElementById(i).checked = false;
        document.getElementById(i).disabled = true;
        //this changes the background color when box is selected 
        click_nums[i-1].style.backgroundColor = '#4B0082';

      }
    }


    document.getElementById("submit_btn").disabled = true;
    document.getElementById("roll_dice_btn").disabled = false;
    lol.innerHTML = "";
  }

  sum_unchecked = 0;
  for (i = 1; i < 10; i++) {

    if (document.getElementById(i).disabled === false) {
      sum_unchecked += i * 1;
    }
  }

  if (sum_unchecked <= 6) {
    roll_dice_btn.addEventListener('click', roll_die);
  }
}









function finish() {

  //alert("Your score is "+ sum_enabled_boxes());}
  alert("Your score is " + sum_unchecked);
 console.log("finished");

submit_btn.disabled=true;

finish_btn.disabled=true;
roll_dice_btn.disabled=true;
}

