var theDeli = [];
var ticketNumber = 0;

function takeANumber(i) {
  ticketNumber++;
  i.push(ticketNumber);
  console.log(`Your ticket number is ${ticketNumber}`);
  return `Your ticket number is ${ticketNumber}`;
}

function nowServing(i) {
  if (i.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let nextCustomer = i.shift();
    console.log(`Currently serving number ${nextCustomer}.`);
    return `Currently serving number ${nextCustomer}.`;
  }
}

function resetTickets() {
  ticketNumber = 0;
}

takeANumber(theDeli);
nowServing(theDeli);

