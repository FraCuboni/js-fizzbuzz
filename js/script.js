// creare un programma che stambi in console numeri da 1 a 100 ma che stampi fizz al posto dei numeri divisibili per 3 e buzz al posto dei numeri divisibili per 5  


// creo il ciclo che crei i numeri da 1 a 100 e me li stampi in console
for (let index = 1; index < 101; index++) {


    const container = document.querySelector("div.container");
    const square = document.createElement("div.square");
    square.classList.add('square')
    container.appendChild(square);
    
    // assegno i valori ai numeri divisibili per 3 e per 5
    if (index % 3 === 0 && index % 5 === 0) {
        square.classList.add('fizzbuzz')
    }


    // scandisco quali numeri possono essere divisi per 3 
    else if (index % 3 === 0) {
        square.classList.add('fizz')

    }


    // scandisco quali numeri possono essere divisi per 5
    else if (index % 5 === 0) {
        square.classList.add('buzz')
    }

    

    console.log(index);

    // creo i div square






}




