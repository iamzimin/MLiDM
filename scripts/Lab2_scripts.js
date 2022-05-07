let errorInput = "";
let reflexive = true;
let skewSymmetric = true;
let symmetrical = true;
let transitive = true;

function Answer() {
    let a = document.getElementById('arr1');

    a = stringToArray(a);

    errorInput = false;
    if (error(a) == true)
        alert(errorInput);



    if (error(a)  == false) {
        let c = multiMatrix(a, a);
        let output = arrayToString(c);
        document.getElementById("NewMatrix").innerText = "Умноженная матрица:\n" + output;

        reflexive = true;
        skewSymmetric = true;
        symmetrical = true;
        transitive = true;
        for (let i = 0; i < c.length; i++) {
            for(let j = 0; j < c.length; j++) {
                if (!(!((a[i][j] == 1) && (i != j)) || a[j][i] == 0)) {  //хзхз
                        skewSymmetric = false;
                }
                if (i == j) {                                            //правильно
                    if (a[i][j] == 0) {
                        reflexive = false;
                    }
                }
                if (a[i][j] != a[j][i]) {                              //хзхз
                    symmetrical = false;
                }
                if (a[i][j] == 0 && c[i][j] == 1) {                       //хзхз
                        transitive = false;
                }
            }
        }
        if (skewSymmetric) {
            document.getElementById("skewSymmetri").innerText = "Матрица кососимметрична";
        }
        else {
            document.getElementById("skewSymmetri").innerText = "Матрица не кососимметрична";
        }
        if (reflexive) {
            document.getElementById("reflex").innerText = "Матрица рефлексивна";
        }
        else {
            document.getElementById("reflex").innerText = "Матрица антирефлексивна";
        }
        if(symmetrical) {
            document.getElementById("symmetri").innerText = "Матрица симметрична";
        }
        else {
            document.getElementById("symmetri").innerText = "Матрица антисимметрична";
        }
        if(transitive) {
            document.getElementById("transiti").innerText = "Матрица транзитивна";
        }
        else {
            document.getElementById("transiti").innerText = "Матрица не транзитивна";
        }
    }
}

function error(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length != arr.length)
            errorInput = "Матрица должна быть размером N*N";
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != '1' && arr[i][j] != '0')
                errorInput = "У вас есть прочие символы помимо 0 и 1";
        }
    }
    if (errorInput)
        return true;
    else
        return false;
}

function stringToArray(data) {
    const a = data.value.split('\n').map(value => value.trim()).map(value => value.split(" ").map(value1 => Number.parseInt(value1.split(' '))));
    return a;
}

function arrayToString(arr){
    let x = " ";
    let y = "\n";
    let b = arr[0].join(x);
    for(let i = 1; i < arr.length; i++)
        b += y + arr[i].join(x);

    return b;
}


function multiMatrix(m1, m2) {

    let result = [];
    for (let i = 0; i < m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            if (sum >= 1) {
                result[i][j] = 1;
            } else {
                result[i][j] = 0;
            }
        }
    }
    return result;
}

function testConfirmDialog()  {

    let result = confirm("Вы уверены, что хотите посмотреть 2 лабораторную по МЛиДМ?");
    if (result)  {
        alert("Ну вот тогда");
    } else {
        while (true)
        {
            alert("Ну ладно :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :( :(");
        }
    }
}




























