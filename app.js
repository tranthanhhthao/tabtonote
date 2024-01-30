const tune = document.getElementsByClassName('tune');
const fret = document.getElementsByClassName('fret');
const note = document.getElementsByClassName('note');

const list = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let indexOftune = [];
let addFret = [];
let indexOfnote = [];

for (let i = 0; i < tune.length; i++) {
    indexOftune.push(list.indexOf(tune[i].value))

    addFret.push(Number(fret[i].value))

    indexOfnote.push('')

    console.log(indexOftune)
    console.log(addFret)
    console.log(indexOfnote)


}

function reload() {
    for (let i = 0; i < tune.length; i++) {

        if (fret[i].value === '') {
            note[i].innerHTML = ''
        } else {

            indexOftune[i] = list.indexOf(tune[i].value);

            addFret[i] = Number(fret[i].value)

            indexOfnote[i] = (indexOftune[i] + addFret[i]) % list.length;
            console.log(indexOfnote)
    
            note[i].innerHTML = list[indexOfnote[i]]
        }        
    }

}
