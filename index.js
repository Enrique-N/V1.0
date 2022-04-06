
class Bingo {
    constructor() {
        this.id = 0;
        this.bingo = [];
    }
    findNum(num) {
        for (let i = 0; i < 5; i++) {
            let find = this.bingo[0][1][i].findIndex(ele => ele === num);
            if (find >= 0) {
                this.bingo[0][1][i][find] = "X"
            }
        }
    }
    CrearCartilla() {
        this.id++;
        let cartilla = [[], [], [], [], []];
        for (let i = 0; i < cartilla.length; i++) {
            let min = (i * 15) + 1;
            let max = min + 15;
            while (cartilla[i].length < 5) {
                let num = Math.floor(Math.random() * (max - min)) + min;
                if (!cartilla[i].includes(num)) {
                    cartilla[i].push(num);
                }
            }
            cartilla[i].sort((a, b) => a - b);
        }
        cartilla[2][2] = "X";
        this.bingo.push({ [this.id]: cartilla })
    }
    Caller(num) {
        if (num > 0 && num <= 15) {
            this.findNum(num);
        }
        if (num > 15 && num <= 30) {
            this.findNum(num);
        }
        if (num > 30 && num <= 45) {
            this.findNum(num);
        }
        if (num > 45 && num <= 60) {
            this.findNum(num);
        }
        if (num > 60 && num <= 75) {
            this.findNum(num);
        }
    }
    Bingo() {
        let bingo = this.bingo[0][1].every(ele => ele[0] === "X")
        console.log(bingo)
    }
}

let instance = new Bingo();


// Ejercicio Bingo, solo se uso nodemon para hacer las pruebas.
// Solo funciona para una cartilla.


// Para crear Cartilla

instance.CrearCartilla();

// Para Marcar toda la cartilla

/* for (let i = 0; i < 76; i++) { 
     instance.Caller(i)  
} */


// Para hacer el llamado de cada numero
instance.Caller(3)

// Verifica si las 25 posiciones del bingo estan marcadas

instance.Bingo();
