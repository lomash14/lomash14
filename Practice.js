console.log('this is my practicing tute');




let restraunt={
    starterMenu:['soft drinks','soup','juice','fruits','water'],
    mainMenu:['pasta','noodles','pizza','southindian','north-Indian'],
    openingHours:{
        monday:{
         open:11,
         closed:10
        },
        tuesday:{
            open:11,
            closed:10
           },
        wednesday:{
            open:9,
            closed:10
           },
           satuarday:{
            open:11,
            closed:12
           }
       
    },

}


let days=['monday','tuesday','wednesday','thursday','friday','satuarday','sunday'];
for(const day of days){
  let open=  restraunt.openingHours[day]?.open ?? 'closed'  //coeciel nullish operator display 0
  let close=  restraunt.openingHours[day]?.closed ?? 'closed'

  console.log(`restraunt opened ${day} at ${open} AM to ${close} PM`);
}