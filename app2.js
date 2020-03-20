let num = [1, 2, 3, 4, 5, 8, 7, 12, 15];
let par = [];
let impar = [];

for (i = 0; i < num.length; i++) {
    if (num[i] % 2) {
        impar.push(num[i]);

    } else {
        par.push(num[i]);
    }

}
par = par.concat(impar);
console.log(par);