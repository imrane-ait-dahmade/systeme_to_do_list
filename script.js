
let Taches = [];
const add = document.getElementById('addIcon');
const ouvrir = document.getElementById('ouvrir_creation_deTache');
let tache = {
    id : new Date(),
    titre :document.getElementById('tache'),
    statue: false,
}
add.addEventListener('click', () => {

  
    ouvrir.classList.toggle('hidden');


});
document.getElementById('cancelAdd').addEventListener('click',()=>{
    ouvrir.classList.toggle('hidden');
 })
document.getElementById('confermerAdd').addEventListener('click', confermer(tache));
function confermer(tache) {

console.log(tache.id,tache.titre);

    
}