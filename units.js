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
const itemIndex = 3;

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
<div class="Imagecontainer">
    <ul class="item">
        <li class="col-sm-4">[[image.item1]]
			<div class="overlay">
				<div class="text">[[text.item1]]</div>
			 </div>
		</li>
        <li class="col-sm-4">[[image.item2]]
		<div class="overlay">
				<div class="text">[[text.item2]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item3]]
		<div class="overlay">
				<div class="text">[[text.item3]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item4]]
		<div class="overlay">
				<div class="text">[[text.item4]]</div>
			 </div>
		</li>
        <li class="col-sm-4">[[image.item5]]
		<div class="overlay">
				<div class="text">[[text.item5]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item6]]
		<div class="overlay">
				<div class="text">[[text.item6]]</div>
			 </div></li>     
        <li class="col-sm-4">[[image.item7]]
		<div class="overlay">
				<div class="text">[[text.item7]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item8]]
		<div class="overlay">
				<div class="text">[[text.item8]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item9]]
		<div class="overlay">
				<div class="text">[[text.item9]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item10]]
		<div class="overlay">
				<div class="text">[[text.item10]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item11]]
		<div class="overlay">
				<div class="text">[[text.item11]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item12]]
		<div class="overlay">
				<div class="text">[[text.item12]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item13]]
		<div class="overlay">
				<div class="text">[[text.item13]]</div>
			 </div></li>
        <li class="col-sm-4">[[image.item14]]
		<div class="overlay">
				<div class="text">[[text.item13]]</div>
			 </div></li>
    </ul>
</div4