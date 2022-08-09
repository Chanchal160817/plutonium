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
 
  