function printDate(){
// var date = (new Date()).getDate();
const date = new Date()
const n = date.toDateString()
console.log('Date :' +n);
//  printMonth()
 }

 function printMonth(){
    // let date =moment(new date()).format("DD-MM-YYYY")
    // console.log(date)
    // var month = (new Date()).getMonth()
    const nameOfMonth = new Date().toLocaleString(
        'default', {month: 'long'}
      );
      console.log('Month : ' ,nameOfMonth);

    //  getBatchInfo()
 }


function getBatchInfo() {
    // var batch = (getBatchInfo());
    console.log("Batch name is  Plutonium , 3rd week , 6th day , the topic being taught today is node js module .");
    // console.log(batch);
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo



