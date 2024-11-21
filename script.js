
let Taches = [];
const add = document.getElementById('addIcon');
const ouvrir = document.getElementById('ouvrir_creation_deTache');



add.addEventListener('click', () => {


    ouvrir.classList.toggle('hidden');


});
document.getElementById('cancelAdd').addEventListener('click', () => {
    ouvrir.classList.toggle('hidden');
})
document.getElementById('confermerAdd').addEventListener('click', () => {
    let tache = {
        id: Date.now(),
        titre: document.getElementById('tache'),
        statue: false,
    }
    let input_tache = document.getElementById('tache');

    tache.titre = input_tache.value;
    if (tache.titre.length == 0) {
        alert('error');
    }
    else {
        Taches.push(tache);
        if (Taches.length > 0) {
            let json = JSON.stringify(Taches);
            window.localStorage.setItem('tache', json);
            createtache(tache);
            ouvrir.classList.add('hidden');
            input_tache.value = '';
           

        }
    }
});
function createtache(tache) {
    const place = document.getElementById('placeTaches');
    const box = document.createElement('div');
    box.classList.add('h-12', 'w-max-fit', 'bg-white', 'rounded-xl', 'flex', 'justify-between', 'p-2', 'items-center');
    box.id = `${tache.id}`;
    place.appendChild(box);
    box.innerHTML = `
<div class="flex gap-2 items-center">
                <input type="checkbox" aria-checked=${tache.statue}
                    class="w-9 h-9 rounded-full bg-white drop-shadow-lg shadow-textcolor shadow-sm  ">
                </input>
                <span class="text-3xl font-mont ">${tache.titre}</span>
            </div>
            <button class="text-red-500 text-xl" id=button${tache.id}>
                X
            </button>`
const deletebutton = document.getElementById(`button${tache.id}`);
deletebutton.addEventListener('click', () =>{
    del(tache.id);
   
})

}

function del(tacheId) {
    Taches = Taches.filter(tache => tache.id !== tacheId);
    console.log(Taches);
    let json = JSON.stringify(Taches);
    window.localStorage.setItem('tache', json);
    const removebox = document.getElementById(tacheId);
    removebox.remove();
}






