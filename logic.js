// const familyTree = {
//      wacera: ['macharia', 'james', 'nyokabi', 'stephen', 'joyce njeri'],
//      wangare: ['robert', 'wageni', 'gaturu', 'mweru'],
//      wambui: ['muthoni', 'githii', 'eric'],
//      njoki: ['njeri', 'amos', 'isaac', 'wangui'],
//      ray_canon: ['mercy','poly', 'gladwell', 'ian' ],
//      murugi: ['Albert', 'George', 'One girl'],
//      maina: ['Mary', 'others']
// };

// //event listeners
// const containers =  document.querySelectorAll('.material-symbols-outlined');
// for (let i = 0; i < containers.length; i++) {
//       containers[i].addEventListener('click', () => {
//             //activate the chidlren's container inside the parent's containers.
//             //this may include adding some inner html
//             //depending on where the drop down icon has been clicked, fetch the id of the parent container it is in, then get 
//             //the keys of that parent's id.
            
//             document.getElementById(familyHeads[i]).innerHTML() //add the child containers. 
//       })
// }

//split the problem into small pieces.
/* 
after clicking the drop down menu, containers will apppear inside the parent's container
each of these containers will contain the children of the parents. 
Thererfore you will need to to fetch the parent's object inside the family tree array. 
you will need fetch the keys inside each parent's object.
you will need to get the click event. 
you can do this by giving each drop down icon for each parent container a unique id. 
then get hold of this id. 
using this id, fetch the parent's name that matches the id. 
then use this to fetch the keys of the parent's object inside the family tree array.
for each key, create a div container, this container will contain the parent's child's profile picture, their name,and another drop down menu icon for their children. 

could a constructor function work? 

*/

const familyTree2 = {
      
            wacera: {
                  macharia: ['wacera', 'mwangi'],
                  james: ['wacera', 'mwangi'],
                  nyokabi: ['mwangi'],
                  stephen: ['wacera', 'mwangi', 'maina'],
                  joyce_njeri: ['mercy', 'wacera', 'valencia']
            },

      
      
            wangare: {
                  robert: ['joy', 'abigail', 'emmanuel'],
                  wageni: ['divine', 'wanjiku'],
                  gaturu: ['wangare', 'wangeci', 'juliet'],
                  mweru: ['kingori', 'wangare', 'muthoni', 'waititu']
            },
      
      
            wambui: {
                  muthoni: ['ethan', 'nathan', 'naomi'],
                  githii: ['allan', 'jamal', 'ayana'],
                  eric: []
            },
      
      
            njoki: {
                  njeri: ['Ivy', 'njoki'],
                  amos: ['watetu', 'taylor', 'tiana'],
                  ISAAC: [],
                  wangui: []
            },
      
      
            nyambura: {
                  poly: ['ashton', 'mwangi'],
                  mercy: ['nasha'],
                  gladwell: ['jinall'],
                  ian: []
            },
      
      
            murugi:{
                  albert: [],
                  george: [],
                  faith: []
            },
      
      
            maina: {
                  mary: [],
                  gaturu: [],
                  njeri: [],
                  lucy: []
            }
};

//add event listeners to the drop down menus, the fetch the value of their id attribute.

const dropMenus = document.querySelectorAll('.material-symbols-outlined');
for (let i = 0; i < dropMenus.length; i++) {
      dropMenus[i].addEventListener('click', () => {
           const id = dropMenus[i].getAttribute('id');
           //this id will be a parent's name
           const parentChildren = Object.keys(familyTree2.id);
           parentChildren.forEach((child) => {
            document.getElementById(id).innerHTML = `<div class="child"><img src="" alt="" /><h5>${child} </h5></div>`
           });
      //      document.getElementById(id).innerHTML = `<div></div>`//but i will need to add these containers depending on the number of children each parent has. 
           //check the number of children each parent has and create as many divs. 
      })
};

// const familyHeads = [];
// for (var i = 0; i < familyTree2.length; i++) {
//       familyHeads.push(Object.keys(familyTree2[i])[0]);
// };


// // const containers = document.querySelectorAll('.parent');
// // for (let i = 0; i < containers.length; i++) {
// //       containers[i].addEventListener('click', () => {
// //             //add inner html or add classes to the containers
            
// //             //inner html to contain the family card corresponding to the id of the family container clicked. 
            
// //       });
      
// // }


// console.log(familyHeads);