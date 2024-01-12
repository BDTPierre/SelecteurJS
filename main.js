// Exercice 1: Sélectionner un Élément
// Objectif : Sélectionner un élément par son ID et changer son texte.
// Créez un élément HTML avec un ID unique.
// Utilisez document.getElementById pour sélectionner cet élément.
// Modifiez le texte de cet élément en utilisant textContent.

let divJs = document.getElementById("div").textContent;
document.getElementById("div").textContent = "Bonjour!";

// Exercice 2: Manipuler les Styles
// Objectif : Modifier le style d'un élément.
// Sélectionnez un élément par son ID comme dans l'exercice 1.
// Changez la couleur et la taille de la police de cet élément.

document.getElementById("div").style.color = 'red';
document.getElementById("div").style.fontSize = '50px';

// Exercice 3: Événements
// Objectif : Ajouter un gestionnaire d'événements à un bouton(boucle).
// Créez un bouton dans votre HTML.
// Utilisez getElementById pour sélectionner le bouton.
// Ajoutez un écouteur d'événements click qui change la couleur de fond du bouton lorsqu'il est cliqué.

document.getElementById("button").addEventListener("click", function() {
    document.getElementById("button").style.backgroundColor = "Blue"
    document.getElementById("button").style.color = "White"
}) 

// Exercice 4: Sélectionner Plusieurs Éléments
// Objectif : Utiliser getElementsByClassName ou getElementsByTagName.
// Créez plusieurs éléments avec la même classe ou balise.
// Utilisez getElementsByClassName ou getElementsByTagName pour les sélectionner.
// Modifiez le texte de tous ces éléments simultanément.

let classJs = document.getElementsByClassName("classname");
for (let i = 0; i < classJs.length; i++) {
    classJs[i].innerHTML = "ça va?"
}

// let classes = document.getElementsByTagName("div");
// for (let i = 0; i < classes.length; i++) {
//     classes[i].innerHTML = "oui et toi?"
// }

// Exercice 5: Création et Insertion d'Éléments
// Objectif : Créer un nouvel élément et l'ajouter au DOM.
// Créez un nouvel élément (par exemple, un div ou un p) en utilisant document.createElement.
// Ajoutez du texte à cet élément.
// Insérez cet élément dans le DOM à l'endroit souhaité.

let newdiv = document.createElement("div");
newdiv.innerHTML = "Bien joué";
document.body.appendChild(newdiv)

// Exercice 6: Manipulation des Attributs
// Objectif : Modifier les attributs d'un élément (par exemple, href d'un lien).
// Sélectionnez un élément (par exemple, un lien).
// Utilisez getAttribute pour lire un attribut existant.
// Modifiez cet attribut en utilisant setAttribute.

let monlien = document.getElementById("lien")
let newlien = monlien.getAttribute("href")
monlien.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push")

// pourquoi utiliser 'getAttribute' ? parce que même sans ça marche.

// Exercice 7: Utilisation de innerHTML
// Objectif : Modifier le contenu HTML d'un élément.
// Sélectionnez un élément par son ID.
// Modifiez son contenu HTML en utilisant innerHTML.
// Ajoutez des éléments HTML (comme une liste ou un paragraphe) à l'intérieur de cet élément.

let insert = document.getElementById("list");
insert.innerHTML = "<p>Nouvelle liste!</p>";
let newlist = document.createElement("ul")
newlist.innerHTML = "<li>Mangue</li><li>Orange</li><li>Pomme</li><li>Fraise</li>"
insert.appendChild(newlist);

// Exercice 8: Manipulation de Classes CSS
// Objectif : Ajouter, enlever et basculer des classes CSS.
// Créez un élément avec une classe CSS pré-définie.
// Utilisez classList.add pour ajouter une nouvelle classe à cet élément.
// Utilisez classList.remove pour enlever une classe.
// Utilisez classList.toggle pour basculer une classe lors d'un événement, comme un clic.

let a = document.getElementById("add");
let b = a.classList.add("css");
let c = a.classList.remove("rem");

let d = document.getElementById("button2");
d.addEventListener("click", function() {
    a.classList.toggle("rem");
});


// Exercice 9: Manipulation Directe des Styles
// Objectif : Modifier directement les styles d'un élément.
// Sélectionnez un élément.
// Modifiez différents styles CSS directement en utilisant element.style.property (par exemple, element.style.backgroundColor).

bs.style.color = "green" 
bs.style.fontSize = "30px"

// Exercice 10: Travailler avec setAttribute et getAttribute
// Objectif : Utiliser setAttribute et getAttribute pour manipuler les attributs d'un élément, le "src" d'une image par exemple.
// Sélectionnez un élément (comme un lien ou une image).
// Utilisez getAttribute pour lire un de ses attributs.
// Changez cet attribut avec setAttribute.

limage.getAttribute("src");
limage.setAttribute("src", "images/bali.jpg")

limage.style.width = "250px"
limage.style.height = "auto"

// Exercice 11: Création et Manipulation de Listes
// Objectif : Créer une liste dynamique et la manipuler.
// Créez une liste ul ou ol vide dans votre HTML.
// Utilisez JavaScript pour ajouter des éléments li à la liste en utilisant appendChild ou insertBefore.

// liiiste.innerHTML = "<li>Mangue</li><li>Orange</li><li>Pomme</li><li>Fraise</li>"
// liiiste.appendChild() = "<li>Mangue</li><li>Orange</li><li>Pomme</li><li>Fraise</li>"

let btn = document.getElementById("liiiste");
btn.addEventListener("click", function() {
    let lielement = document.createElement("li");
    liiiste.appendChild(lielement);
})