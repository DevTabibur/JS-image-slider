// // immediate invoked function expression

// immediate self-invoked function looks like that
//       ( function () {} () )

// Easy setup logic, try to to complete this logic first, then try the main script.js logic
// (
//   function (){
//     // images array
//     const images = [
//       "contBcg-0",
//       "contBcg-1",
//       "contBcg-2",
//       "contBcg-3",
//       "contBcg-4",
//       "contBcg-5",
//     ]
//     const buttons = document.querySelectorAll('.btn')
//     const imageDIV = document.querySelector('.img-container')
//     const length = images.length;
//     const random = Math.floor(Math.random()* length);
//     console.log(random);
//     imageDIV.style.backgroundImage = `url('./img/${images[random]}.jpeg')`;
//   } ()
// )


//     main script.js logic


(function() {
    const pictures = [
      "contBcg-0",
      "contBcg-1",
      "contBcg-2",
      "contBcg-3",
      "contBcg-4"
    ];
  
    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('.img-container')
    let counter = 0
  
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        if (button.classList.contains('btn-left')){
          counter--
          if(counter < 0){
            counter = pictures.length -1
          }
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        }
        if (button.classList.contains('btn-right')){
          counter++
          if(counter > pictures.length -1){
            counter = 0
          }
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        }
      })
    })
  })();

