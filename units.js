const UnitList = [
  {make: "Harley Davidson", type: "motorcyle", year: "2019"},
  {make: "Jayco", type: "Motorhome", year: "2018"},
  {make: "John Deere", type: "Tractor", year: "2039"},
  {make: "John Deere", type: "Combine", year: "2017"},
  {make: "Vanderhall", type: "Trike", year: "2018"},
  {make: "Coachmen", type: "Motorhome", year: "2050"},
  {make: "Brent", type: "Combine", year: "2017"},
]
function ListArguments(UnitList) {

  var ItemType = []
  var ItemMake = []
  var Itemyear = []
  var specialValue = []

  for (i = 0; i < UnitList.length(); i++) {
    ItemType.push(UnitList[i].type);
    ItemMake.push(UnitList[i].make);
    Itemyear.push(UnitList[i].year);

    let specialValueitem = UnitList[i].make + UnitList[i].type + UnitList[i].year;
    if (UnitList[i].year >= 2039) {
      specialValue.push(specialValueitem+"Future tech");
    } else {
      specialValue.push(specialValueitem+"Contemporary");
    }
  }
 return ItemMake;
 

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

