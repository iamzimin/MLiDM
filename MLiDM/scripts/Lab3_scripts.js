function arrayToString(arr){
    let x = " ";
    let y = "\n";
    let b = arr[0].join(x);
    for(let i = 1; i < arr.length; i++)
        b += y + arr[i].join(x);

    return b;
}

function Answer() {
    let attitude = document.getElementById('arr1').value.trim();
    let a = document.getElementById('arr2').value.trim();
    let b = document.getElementById('arr3').value.trim();
    let A_B = true;
    let B_A = true;
    let error = "";

    let attitudeSplit = attitude.split(' ');
    let aSplit = a.split(' ');
    let bSplit = b.split(' ');

    //Проверка на ввод множества
    for (let i = 0; i < attitudeSplit.length; i++)
        if (attitudeSplit[i].length != 2)
            error = "Отношение должно быть вида: A1B1 A2B2...";

    //Создание матрицы совместимости
    let table = new Array(bSplit.length);
    for(let i = 0; i < table.length; i++)
        table[i] = new Array(aSplit.length);

    //Заполнение матрицы нулями
    for(let row = 0, str = ''; row < table.length; row++)
        for(let col = 0; col < table[row].length; col++)
            table[row][col] = 0;

    for (let i = 0; i < attitudeSplit.length; i++){
        let x1 = Array.from(aSplit).indexOf(attitudeSplit[i][0]);
        let y1 = Array.from(bSplit).indexOf(attitudeSplit[i][1]);
            if (x1 != -1 && y1 != -1)
            table[x1][y1] = 1;
    }

    let sumX1 = 0, sumY1 = 0;
    for (let i = 0; i < table.length; i++) {
        sumX1 = 0; sumY1 = 0;
        for (let j = 0; j < table[i].length; j++){
            sumX1 += table[i][j];
            sumY1 += table[j][i];
        }
        if (sumX1 != 1)
            A_B = false;
        if (sumY1 != 1)
            B_A = false;
    }


    if(error !== "")
        alert(error);
    else {
        let output = arrayToString(table);
        document.getElementById("NewMatrix").innerText = "Матрица функционального отношения:\n" + output;

        if (A_B)
            document.getElementById("A->B").innerText = "Отношение является функцией A->B";
        else
            document.getElementById("A->B").innerText = "Отношение не является функцией A->B";

        if (B_A)
            document.getElementById("B->A").innerText = "Отношение является функцией B->A";
        else
            document.getElementById("B->A").innerText = "Отношение не является функцией B->A";
    }
}