function Account(name, balance){
    this.name = name;
    this.balance = 0;
  }  
  Account.prototype.describeFunct = function(){
      return "Account owner: " + this.name + " has a balance of: " + this.balance;
   }

  Account.prototype.depositFunct = function(value){
    this.balance = this.balance + value;
  }

Account.prototype.debit = function(value){
   this.balance = this.balance  - value
}

  Account.prototype.transferFunct = function(accountToReceive, amountToTransfer){ 
      this.debit(amountToTransfer);
      accountToReceive.depositFunct(amountToTransfer);
    return accountToReceive.name + " will receive " + amountToTransfer + " from " + this.name + "."
  }
  let Jack = new Account("Jaqueline" , 1000);
//   Jack.name = ;
//   Jack.balance =
  console.log(Jack.depositFunct(500))
  console.log(Jack.describeFunct())
  // console.log(Jsck.transferFunct("Billy", 2000))
  
  let Billy = new Account();
  Billy.name = "Willamina";
  Billy.balance = 500;
  console.log(Billy.depositFunct(200));
  console.log(Billy.describeFunct())
  console.log(Billy.transferFunct("Jaqueline", 200))
  
  let Rosie = new Account();
  Rosie.name = "Rosemary";
  Rosie.balance = 300;
  console.log(Rosie.depositFunct(100))
  console.log(Rosie.describeFunct())
  console.log(Rosie.transferFunct("Jaqueline", -1500))
  
  let Jill = new Account();
  Jill.name = "Jillian";
  Jill.balance = 50;
  console.log(Jill.depositFunct(1000))
  console.log(Jill.describeFunct())
  console.log(Rosie.transferFunct("Mary", 1200))
  



// function showConsole1(){
//   window.console = {
//     log: function (str) {
//         var node = document.createElement("div");
//         node.appendChild(document.createTextNode(str));
//         document.getElementById("myLog1").appendChild(node);
//     }
// }
// }
// console.log(describeFunct(Jill));

function displayToggle1() {
var x = document.getElementById("myLog1");
if (x.style.display === "none") {
    x.style.display = "flex";
} else {
    x.style.display = "none";
}
}

function displayToggle2(){
    var x = document.getElementById("myLog2");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
    }

    function displayToggle3() {
        var x = document.getElementById("myLog3");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
        }

        function displayToggle4() {
            var x = document.getElementById("myLog4");
            if (x.style.display === "none") {
                x.style.display = "inline-block";
            } else {
                x.style.display = "none";
            }
            }



//   function displayToggle1() {
//     var x = document.getElementById("myDIV1");
//     if (x.style.display === "none") {
//         x.style.display = "inline-block";
//      }
//      else {
//         x.style.display = "none";
//         let parent = document.getElementById("myLog1");
//         let childNodes = parent.childNodes;
//         for (let i = 0; i <= childNodes.length; i++){

//             parent.removeChild(childNodes[i]);
//         }
//     }
// }


// function displayToggle2() {
//     var x = document.getElementById("myDIV2");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//      }
//         let message = depositFunct();
//         let node = document.createElement("div");
//         node.appendChild(document.createTextNode(message); 
//         document.getElementById("myLog2").appendChild(node);

//      else {
//         x.style.display = "none";
//         let parent = document.getElementById("myLog2");
//         let childNodes = parent.childNodes;
//         for (let i = 0; i <= childNodes.length; i++){

//             parent.removeChild(childNodes[i]);
//         }
//     }
// }



// function displayToggle3() {
//     var x = document.getElementById("myDIV3");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//      }
//      else {
//         x.style.display = "none";
//         let parent = document.getElementById("myLog3");
//         let childNodes = parent.childNodes;
//         for (let i = 0; i <= childNodes.length; i++){

//             parent.removeChild(childNodes[i]);
//         }
//     }
// }