console.log("tthis is a coding challeneg 2");

// const temperatures=[3,-2,-6,-1,"error",9,13,15,17,5]

// const calcTempAlt=(temps)=>{
// let max=temps[0]; // idhar 0 index me value store ki temps ki
// for(let i=0;i < temps.length;i++){
//     if(temps[i]>max)
//         max=temps[i] 
// }
// console.log(max);

// }
// calcTempAlt([2,3,4]) // highest is 4

// const calcTempAlt2=(temps)=>{
//     let min=temps[0];
//     for(let i=0;i < temps.length;i++){
//         if(temps[i]<min)
//             min=temps[i] 
//     }
//     console.log(min);
    
//     }
//     calcTempAlt2([2,3,4]) // lowest is 2

    // const calcTempAlt3=(temps)=>{
    //     let min=temps[0];
    //     let max=temps[0];
    //     for(let i=0;i< temps.length;i++){
    //     const currTemp=temps[i]
    //     if(typeof currTemp !== 'number')
    //     continue;
    //     if(currTemp > max)max=currTemp;
    //     if(currTemp < min)min=currTemp;
    // }
    //     console.log("max number",max,"min number",min); 
     
    // }
    //     // calcTempAlt3([2,3,4,8,9,7,1])
    //     calcTempAlt3(temperatures)


        //problem 2
        //merge twio arrays---

        // const calcTempAltNew=(t1,t2)=>{
        //     const temps=t1.concat(t2)
        //     console.log(temps);

        //     let min=temps[0]; // index 0 me value store hogayi
        //     let max=temps[0];
        //     for(let i=0;i< temps.length;i++){
        //     const currTemp=temps[i]
        //     if(typeof currTemp !== 'number')
        //     continue;
        //     if(currTemp > max)max=currTemp;
        //     if(currTemp < min)min=currTemp;
        // }
        //     console.log("max number",max,"min number",min); 
        //     return max-min;
         
        // }
        //     // calcTempAlt3([2,3,4,8,9,7,1])
        //     const amplitudeNew= calcTempAltNew([3,5,1],[9,0,5])
        //     console.log(amplitudeNew);
        
    ///fixing bugs problem--

    const measureKelvin=()=>{
        const measure={
            type:'temp',
            unit:'celcius',
            value:Number(prompt("degree kelvin"))
        }
   const kelvin=measure.value+273+"degree celcius"
   return kelvin;
    }
    console.log(measureKelvin());