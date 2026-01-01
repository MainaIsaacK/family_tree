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


const items = document.querySelectorAll('.material-symbols-outlined');
items.forEach((item) => {
      item.addEventListener('click', () => {
            const parentId = item.getAttribute('id');
            const parentChildren = Object.keys(familyTree2[parentId]);
            parentChildren.forEach((child) => {
                  const newDiv = document.createElement('div');
                  newDiv.setAttribute('class', 'child');
                  newDiv.innerHTML = `<h5>${child}</h5>`;
                  document.querySelector(`.${parentId}`).appendChild(newDiv);
                  
            })
            item.style.display = 'none';

      })
})