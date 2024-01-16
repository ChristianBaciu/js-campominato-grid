const giocoNascostoHtml = document.getElementById("giocoNascosto")

giocoNascostoHtml.style.display = "none"

// blocca il pulsante     HTML --> onclick="bloccaPulsante()"
function bloccaPulsante(){
    var pulsante = document.getElementById("bottoneGenera");

    // Disabilita il pulsante
    pulsante.disabled = true;

    // Esempio: Cambia il testo del pulsante dopo 1 secondi (1000 millisecondi)
    setTimeout(function() {
        pulsante.innerText = "Bloccato";
    }, 1000);
}

const bottoneGeneraHtml = document.getElementById("bottoneGenera")
bottoneGeneraHtml.addEventListener('click', function(){

    giocoNascostoHtml.style.display = "block"

    const grigliaHtml = document.getElementById ("griglia");
    // console.log(grigliaHtml);
    // console.log("grigliaHtml");

    // box da 1 a 100 in modo sequenziale
    for (let i = 1; i <= 100; i++){
        let box = document.createElement("div");

        box.classList.add("box");

        // per mettere i numeri dentro le box
        box.innerHTML = `<span>${i}</span>`;

        // attiva il box cliccandolo
        box.addEventListener('click', function(){
            this.classList.toggle("active");

            // this è l'elemtnto che vado a cliccare 
            console.log(this)
        })

        // // attiva il box passandoci sopra con il mouse
        // box.addEventListener('mouseenter', function(){
        //     this.classList.toggle("active")

        //     // this è l'elemtnto che vado a cliccare 
        //     console.log(this)
        // })

        // serve a "costruire" la griglia e ad aggiungere tutti i box al suo interno
        grigliaHtml.append(box);
    }
})

//////////////////////////////////////////////////////////////

// const grigliaHtml = document.getElementById ("griglia");
// console.log(grigliaHtml);
// console.log("grigliaHtml");


// for (let i = 0; i < 100; i++){
//     let box = document.createElement("div");

//     box.classList.add("box");

//     box.addEventListener('click', function(){
//         this.classList.toggle("active");
//     })

//     grigliaHtml.append(box);

// }




