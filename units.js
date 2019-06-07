const UnitList = [{
    make: "Harley Davidson",
    type: "motorcyle",
    year: "2019"
  },
  {
    make: "Jayco",
    type: "Motorhome",
    year: "2018"
  },
  {
    make: "John Deere",
    type: "Tractor",
    year: "2039"
  },
  {
    make: "John Deere",
    type: "Combine",
    year: "2017"
  },
  {
    make: "Vanderhall",
    type: "Trike",
    year: "2018"
  },
  {
    make: "Coachmen",
    type: "Motorhome",
    year: "2050"
  },
  {
    make: "Brent",
    type: "Combine",
    year: "2017"
  },
]

function ListArguments(UnitList) {

  var ItemType = []
  var ItemMake = []
  var Itemyear = []
  var specialValue = []

  for (i = 0; i < UnitList.length; i++) {
    ItemType.push(UnitList[i].type);
    ItemMake.push(UnitList[i].make);
    Itemyear.push(UnitList[i].year);

    let specialValueitem = UnitList[i].make + " " + UnitList[i].type + " " + UnitList[i].year;
    if (UnitList[i].year >= 2039) {
      specialValue.push(specialValueitem + " " + "Future tech");
    } else {
      specialValue.push(specialValueitem + " " + "Contemporary");
    }
  }

  var itemsObject = {
    tyep: ItemType,
    make: ItemMake,
    Year: Itemyear,
    specialVal: specialValue

  }
  return itemsObject;



}
/*
 * Instructions: Given a array of units, use a loop to go through each unit.
 *   For each unit you will:
 *     1. Create a function that takes list as argument
 *     2. extract the "make", "type", "year" and assign each to an arry
 *     3. if the unit "year" is greater than or equal to "2039" assign the 
 *        string "Future tech" to a variable named "specialValue". If not
 *        then assign the string "Contemporary" to "specialValue".
 *     4. create a string comprised of joining the "make", "type", "year" and
 *        "specialValue".
 *     5. The function should return an object comprised of the array of the "makes",
 *        "types", "years", and concatenated string from step "4"
 *
 * Constraints:
 *   Do not use jQuery, or the console (Don it in your text editor)
 *
 */




// expected output: "123"

/*
 


*/
const firstArr=[3,5,,2,"test","i"];


function mytest2(firstArr,itemIndex ){

  var f = firstArr[itemIndex]

  if( typeof f == "number" ){
    firstArr[itemIndex] = 1;
  } else if (typeof f == "string"){
    firstArr[itemIndex] = 2;
  } else if (typeof f == "undefined"){
    firstArr[itemIndex] = 0;
  }else{
    firstArr[itemIndex] = -1;
  }

  return firstArr;

} 

const SecondArr=[3,5,,2,"test","i"];


function mytest3(SecondArr){

  var f = SecondArr[i]
for(i = 0; i < SecondArr.length;i++){
  var f= SecondArr[i];
    if( typeof f == "number" ){
      SecondArr[i] = 1;
    } else if (typeof f == "string"){
      SecondArr[i] = 2;
    } else if (typeof f == "undefined"){
      SecondArr[i] = 0;
    }else{
      SecondArr[i] = -1;
    }
}
  return SecondArr;

} 
