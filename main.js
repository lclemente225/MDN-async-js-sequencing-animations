const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

//   alice1.animate(aliceTumbling, aliceTiming);
//   alice2.animate(aliceTumbling, aliceTiming);
//   alice3.animate(aliceTumbling, aliceTiming);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//this makes them all animate simultaneously
// async function motion() {
//       console.log("starts") 
//      let first = await new Promise(resolve => alice1.animate(aliceTumbling, aliceTiming));

// }

// motion().then(new Promise(resolve => alice2.animate(aliceTumbling, aliceTiming))
// .then(new Promise(resolve => alice3.animate(aliceTumbling, aliceTiming))))
////////////////////////////////////////////////////////////////////////////////////////////////////////


//this worksvvvvv

   let first = async() => { 
    console.log("first")
    await alice1.animate(aliceTumbling, aliceTiming);
    
    }
    let second = () => { 
      console.log("second")
      alice2.animate(aliceTumbling, aliceTiming);
      
      }
      let third = async() => { 
        console.log("third")
        await alice3.animate(aliceTumbling, aliceTiming);
        
        }
   


first();
setTimeout(second, 2000);
setTimeout(third, 3500);
console.log("great")