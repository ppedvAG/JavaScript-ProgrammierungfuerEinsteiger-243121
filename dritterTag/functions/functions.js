// Funktionen
// werden aufgerufen indem wir ihren identifier schreiben und runde klammern anhängen
// und dabei wenn nötig Parameter übergeben

console.log("Hallo Welt!"); // Funktionsaufruf mit parameter
console.clear(); // Funktionsaufruf ohne Parameter

// Erstellen einer einfachen Funktion ohne Rückgabe
// Solche Funktionen geben in JS standardmäßig undefined zurück
function greeter() {
    console.log("Hi");
}

greeter();

// Erstellen einer einfachen Funktion mit Rückgabe:
function greetPerson(name) {
    return console.log("Hello " + name);
}
greetPerson(2);

// Funktionen können auch andere Funktionen als Parameter übergeben werden

function multiplier(numOne, numTwo) {
    return numOne * numTwo
}
let ergebnis1 = multiplier(5, 25);
console.log(ergebnis1);

let ergebnis2 = multiplier(8, 29);
console.log(ergebnis2);

// Variablen können auch eine Funktion als Wert erhalten
let testX = multiplier;
console.log(testX(12, 44));

// default-Werte
// Falls eine Funktion mit zu wenigen Parametern aufgerufen wird, können wir sie mit default-Parametern
// also Fallback werten
function divide(numOne, numTwo = 2) {
    return console.log(numOne / numTwo);
}

divide(10);

// Kontrollstrukturen
// if
let numberOne = 10;
let numberTwo = 30;

if (numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
// else if muss immer auf if folgen
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
// else wird ausgeführt falls der vorangehende if block oder else if block falsch war
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Vergleichs-Operatoren in JS:
/*
    == selber Wert
    === selber Wert und selber Typ
    != ungleicher Wert
    !== ungleicher Wert und Typ
    < kleiner als
    > größer als
    <= kleiner gleich
    >= größer gleich
*/

// Logische-Operatoren:
// UND: && => 1 < 2 && 1 < 3 => nur true wenn beide bedingungen zutreffen
// ODER: || => 1 < 4 || 1 < -10 => true sobald eine der Bedingungen wahr ist

// Switch-Case
// Vergleicht den Wert einer Variable oder direkt einen Wert mit mehreren Möglichkeiten

switch (numberOne) {
    case 10:
        console.log("Zahl ist 10");
        break; // ist wichtig, da sonst alles nach dem ersten eingetretenen Fall ausgeführt wird

    case 20:
        console.log("Zahl ist 20");
        break;

    case 30:
        console.log("Zahl ist 30");
        break;

    default:
        console.log("Zahl hat einen unerwarteten Wert");
    // Beim default benötigen wir kein break, da danach nichts mehr kommt
}

// Loops | Schleifen
// Ermöglichen das mehrfache ausführen eines Code-Blocks bis eine bestimmte Bedingung eintritt
// Bedingung der Schleife steht in der Kopfzeile
// Kann sein, dass die Schleife garnicht ausgeführt wird

function countTo(limit) {
    console.log("Schleife startet:");
    for (let i = 0; i <= limit; i++) {
        console.log(i);
    }
    console.log("Schleife beendet");
}

countTo(15);

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die ur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt werden soll
// Und jede dieser Zahlen soll dann auf ihre Teilbarkeit geprüft werden und nach den obigen Regeln
// auf der Konsole ausgegeben werden