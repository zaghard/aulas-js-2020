function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

Console.log(soma2(2));
Console.log(soma2(3));
Console.log(soma2(4));
Console.log(soma2(5));

