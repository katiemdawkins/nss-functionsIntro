//blank function that defines the task of filling your car up with gas
// it will let me know that it filled theh car with gas
//I need to tell it: how much to put in the tank 

//define the parameter of gallons inside ()
const fillGasTank = (gallons) => {
    if (gallons > 15){
        console.log(`You cannot add this much gas to the tank.`)
    } else
    console.log(`I filled the tank with ${gallons} gallons of gas`)
}

fillGasTank(11)
fillGasTank(22)

//Out put : I filled the tank with 11 gallons of gas