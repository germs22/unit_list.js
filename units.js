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

   //let getb = id => Vehicles.filter(veh => veh.id == id)[0]

   for (i = 0; i < vehicle_row_array.length; i++) {

     var arrayitem = vehicle_row_array[i];
<<<<<<< HEAD

     var vehicle_Id = arrayitem.getAttribute("rel");

     let vehice_detail_btn = arrayitem.querySelector('.invViewDetails');
=======
>>>>>>> 75f22a440da5121ab37706f421048f12bd0ec468

     let rel_id = arrayitem.getAttribute('rel');

     let vehice_detail_btn = arrayitem.querySelector('.invViewDetails a');

     const invViewDetailLink = vehice_detail_btn;

     invViewDetailLink.addEventListener('click', function (e) {
       e.preventDefault();

<<<<<<< HEAD
       $('#modalBox').modal();
        
       function check_payment(Vehicles,vehicle_Id){
          for(x=0;x<Vehicles.length;i++){}
       }
        
      });
=======
       var iditem = getb(rel_id);;

       var payment = iditem.PaymentsJSON.est_down_payment;

       $('#modalBox').modal('show');

       if (payment != null) {
         $('#modalBox .modal-dialog .modal-header h2').text("Monthey Payment: $"+payment+ "per Month");
       } else {
         $('#modalBox .modal-dialog .modal-header h2').text("No down payment Available");
       }

     });
>>>>>>> 75f22a440da5121ab37706f421048f12bd0ec468
   }

 }

//modification of the function
function showDownPayment() {

  let temp = document.querySelectorAll('.vehicle_row');

  let vehicle_row_array = [].map.call(temp, el => el)
  for (i = 0; i < vehicle_row_array.length; i++) {

    var arrayitem = vehicle_row_array[i];

    let vehice_detail_btn = arrayitem.querySelector('.invViewDetails');

    const invViewDetailLink = vehice_detail_btn;

    invViewDetailLink.addEventListener('click', function (e) {
      e.preventDefault();
      var payment = Vehicles[i].PaymentsJSON.est_down_payment;
      $('#modalBox').modal('show');

      if (payment != null) {
        $('#modalBox .modal-dialog .modal-header h2').text("Monthey Payment: $" + payment + "per Month");
      } else {
        $('#modalBox .modal-dialog .modal-header h2').text("No down payment Available");
      }

    });
  }

}

 /*
  * LHS lookup:
  *
  * looking up an identifier for writing
  *
  * input: identifier name (String)
  *
  * Process:
  *   1. Select the current active scope
  *   2. Search the current active scope list of identifier name.
  *   3. If we find a matching identifier declaration:
  *   4.   return the identifier for writing
  *   5. If we do not find a matching identifier declaration
  *   6.   If the current active scope is the global scope
  *   7.     create a new identifier in the global scope and return that identifier for writing
  *   8.   If the current active scope is not the global scope
  *   9.     select the current active scopes parent to be the "new current active scope"
  *  10.     go back to step 2
  *
  */
const identifier = {
  name: "variableName",
  value: "variableValue",
}

const scope = {
  parent: scopeObject,
  name: "scopeName",
  identifiers: [{
      name: "name",
      value: "value"
    },
    
  ]
};

/*
 * LHS lookup:
 *
 * looking up an identifier for writing
 *
 * input: identifier name (String)
 *
 * Process:
 *   1. Select the current active scope
 *   2. Search the current active scope list of identifier name.
 *   3. If we find a matching identifier declaration:
 *   4.   return the identifier for writing
 *   5. If we do not find a matching identifier declaration
 *   6.   If the current active scope is the global scope
 *   7.     create a new identifier in the global scope and return that identifier for writing
 *   8.   If the current active scope is not the global scope
 *   9.     select the current active scopes parent to be the "new current active scope"
 *  10.     go back to step 2
 *
 *
 * Things To Lookup:
 *   - reading and writing object attributes
 *   - conditional statements (if else)
 *   - do while loops, for/while loops
 */

function Identifier(name, value) {
  this.name = name;
  this.value = value;
}

function ScopeBlock(parent, name, identifiers) {
  this.parent = parent;
  this.name = name;
  this.identifiers = identifiers || [];
}

const scope = {
  parent: null,
  name: null,
  identifiers: [{
    name: "name",
    value: "value"
  }, ]
};


let treeHead;

function buildTree() {
  function findScope(scopes, name) {
    for (let i = 0; i < scopes.length; i++) {
      if (scopes[i].name == name) return scopes[i];
    }

    return null;
  }

  const scopeList = [{
      parent: "null",
      name: "global",
      identifiers: [{
          name: "foo",
          value: "a"
        },
        {
          name: "dog",
          value: "bark"
        },
      ]
    },
    {
      parent: "global",
      name: "f_level1_child1",
      identifiers: [{
          name: "google",
          value: "bezos"
        },
        {
          name: "eagle",
          value: "flies"
        },
      ]
    },
    {
      parent: "global",
      name: "f_level1_child2",
      identifiers: [{
          name: "sink",
          value: "and die"
        },
        {
          name: "swim",
          value: "and live"
        },
      ]
    },
    {
      parent: "f_level1_child1",
      name: "f_level2_child1",
      identifiers: [{
        name: "black",
        value: "eye"
      }, ]
    },
    {
      parent: "f_level2_child1",
      name: "f_level3_child1",
      identifiers: [{
        name: "last",
        value: "Level"
      }, ]
    },
    {
      parent: "f_level1_child2",
      name: "f_level2_child3",
      identifiers: [{
        name: "new",
        value: "Level"
      }, ]
    },
  ];

  let scopes = [];

  scopeList.forEach(scope => {
    let newScope = {
      parent: findScope(scopes, scope.parent),
      name: scope.name,
      identifiers: scope.identifiers
    };

    treeHead = newScope;
    scopes.push(newScope);
  });
}

buildTree();

function LHSLookup(identifierName) {
  function findIdentifier(identifierName, currentScope) {
    /* create function here */
  }

  function createIdentifier(currentScope) {
    /* create function here */
  }

  function isGlobalScope(currentScope) {
    /* create function here */
  }

  function getParent(currentScope) {
    /* create function here */
  }

  let currentScope = treeHead;
  while (currentScope != undefined) {
    let matchingIdentifier = findIdentifier(identifierName, currentScope);
    if (matchingIdentifier != null) {
      return matchingIdentifier;
    } else {
      if (isGlobalScope(currentScope)) {
        return createIdentifier(currentScope)
      } else {
        currentScope = getParent(currentScope);
      }
    }
  }
}
