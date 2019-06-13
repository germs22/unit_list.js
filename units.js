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
/**section*/
const arrayitem = [];

function secondfunction(seed) {

  for (i = 0; i <= 9; i++) {

    seed = seed + i;

    var res = seed * seed;

    arrayitem.push(res);

  }

  return arrayitem;

}
/**section*/
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

function checkvehicleId(Vehicles, vehicleid) {
  for(i=0;i< Vehicles.length;i++){
    if(vehicleid == Vehicles[i].id){
      return Vehicles[i];
    }else{
      //console.log("empty")
    }

  }

  return null;
}


/*sadjkfjsdkfsdjkfsdajklfsdajkfhsdafhsadfjksd*/

let getb = id => Vehicles.filter(veh => veh.id == id)[0]

function getVehById(id) {
  function filterVeh(veh) {
    return veh.id == id
  }
  return Vehicles.filter(filterVeh)[0];
}



/*
 * showDownPayment()
 *
 * Input: none
 *
 * Description: for all the units on the inventory page:
 *   1. add a click event handler to the "View Details" button that toggles the modal
 *      and writes the value of the vehicles "est_down_payment" attribute (found in the
 *      vehicle objects "PaymentsJSON" attribute) to the modal header.
 *
 * output:
 *   returns: none
 *
 * Notes:
 *
 * Things to look up:
 *   1. event.preventDefault()
 *   2. bootstrap 3.3 modals
 *   3. document.querySelectorAll
 *   4. document.addEventListener
 * 
 *  Helper code
 * let temp = document.querySelectorAll('<selector>');
 * let myArr = [].map.call(temp ,el => el)
 * site to be used https://thunderdome.clients.dealerspike.net/default.asp?page=xAllInventory
 */

 function showDownPayment() {

   let temp = document.querySelectorAll('.vehicle_row');

   let vehicle_row_array = [].map.call(temp, el => el)

   let getb = id => Vehicles.filter(veh => veh.id == id)[0]

   for (i = 0; i < vehicle_row_array.length; i++) {

     var arrayitem = vehicle_row_array[i];

     let rel_id = arrayitem.getAttribute('rel');

     let vehice_detail_btn = arrayitem.querySelector('.invViewDetails a');

     const invViewDetailLink = vehice_detail_btn;

     invViewDetailLink.addEventListener('click', function (e) {
       e.preventDefault();

       var iditem = getb(rel_id);;

       var payment = iditem.PaymentsJSON.est_down_payment;

       $('#modalBox').modal('show');

       if (payment != null) {
         $('#modalBox .modal-dialog .modal-header h2').text("Monthey Payment: $"+payment+ "per Month");
       } else {
         $('#modalBox .modal-dialog .modal-header h2').text("No down payment Available");
       }

     });
   }

 }