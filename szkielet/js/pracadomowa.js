// comment
/* multiline 
comment */

//Zadanie 3
//Używając powyższej tablicy osób stwórz listę w znaczniku <li>

var osoby = [
  'Artur Delura',
  'Gosia Ksionek',
  'Michał Matulka',
  'Zuza Podwińska'
];

var mentors = document.createElement('ul');

for (var i=0; i< osoby.length; i++){
	var person = document.createElement('li'); //to musi być w petli
	person.innerText = osoby[i];
	mentors.appendChild(person);
//Do powyższego zadania użyj dostępnych wbudowanych funkcji 
//createElement, appendChild, swojej ulubionej pętli i właściwości innerText.
}


document.body.appendChild(mentors);

//Zadanie 5*.

//Napisz funkcję createElementWithText, której zadaniem będzie stworzenie 
//i zwrócenie nowego elementu o podanym tagu na przykład <p> 
//z konkretnym tekstem w środku. Funkcja niech przyjmie dwa argumenty:
//Argument typu string: nazwa taga elementu.
//Argument typu string: text elementu
//Przykład wywołania:

//var mentor = createElementWithText('p', 'Jestę paragrafę!');
//pod zmienną mentor będzie krył się obiekt reprezentujący element 
//<p>Jestę paragrafę!</p>.

var createElementWithText = function (mojTag, tekstTagu){
var newElem = document.createElement(mojTag);
newElem.innerText = tekstTagu;
return newElem;
}

//Zadanie 6.

//Zaktualizuj kod, który został napisany przez Ciebie wcześniej 
//do tworzenia listy i wykorzystaj funkcję, którą napisałaś/eś przed chwilą.

var newMentors = document.createElement('ul');

for (var i=0; i< osoby.length; i++){
    var nowyMentor = createElementWithText('li', osoby[i])
	newMentors.appendChild(nowyMentor);
}


document.body.appendChild(newMentors);

//Zadanie 7.

//Za pomocą kodu JS wybierz jakiegoś mentora z listy 
//i dodaj mu klasę fancy :) Użyj do tego właściwości childNodes.

//mentors.firstChild.classList.add('fancy');
//nie wiem, nie umiem, nie rozumiem



var osoba = document.getElementsByTagName('li')[0];
osoba.classList.add('.li');

//zrobilam pierwszy commit, robie pierwsze zmiany

//robie kolejne zmiany, yay!

//