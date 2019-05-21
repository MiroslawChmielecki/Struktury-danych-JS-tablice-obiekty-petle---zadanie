let data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted ', ' special-header ', ' important ']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header ', ' important ']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted ', ' important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted ']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];

//niech zmienna key przybiera wartosc kolejnych elementow z tablicy data
for (let key in data) {
    
    
    let box = document.createElement('div');
    //wartosc id atrybutem id boxa
    box.id = data[key].id;  //(box1, box2, box3,...)
    
    let header = document.createElement('header'); 
    //wartosc title jest zawartoscia headera
    header.innerHTML = data[key].title; //(first box, second box, third box ..)

    //zawartosc boxa
    let contents = data[key].content;
    box.innerHTML = contents;  //(Lorem ipsum...)
    
    //wartosc categories dodana jako klasa boxa
    let classesBox = data[key].categories;
    box.className = classesBox;   //do boxa dodajemy klasy
    
    //dodaje box do body
    document.body.appendChild(box);
    
    //aby wyswietlic header przed content
    //parentNode.insertBefore(newNode, referenceNode);
    box.insertBefore(header, box.firstChild);
}

