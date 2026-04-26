/*
** PORTOFOLIO, 2026
** app
** File description:
** app
*/

const conteneurProjets = document.getElementById('liste-projets');

fetch('/api/projets')
    .then(reponse => reponse.json())
    .then(mesProjets => {
        conteneurProjets.innerHTML = '';
        mesProjets.forEach(projet => {
            const HTMLduProjet = `
            <div class="carte-projet">
                <img src="${projet.image}" alt="Image du ${projet.titre}">
                <div class="contenu-carte">
                    <h3>${projet.titre}</h3>
                    <p>${projet.description}</p>
                </div>
            </div>`;
            conteneurProjets.innerHTML += HTMLduProjet;
        });
    })
