const sqrtGenap = (x) => {
    if (x < 0) {
        return "Error: Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
        return "Error: Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
};

console.log(sqrtGenap(36));
console.log(sqrtGenap(-1)); 
console.log(sqrtGenap(9)); 
