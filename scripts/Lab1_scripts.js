let clear, arr1, arr2, error_text;

/*
* 1 Функция объединение
*/
function deleteElement(str)
{
    let mass = str.split(" ");

    //Удаление повторяющихся элементов
    for (let i = 0; i < mass.length; i++)
        if (countElements(mass, mass[i]) > 1)
        {
            mass.splice(i, 1);
            i--;
        }
    clear = mass;
}


/*
* 2 Функция пересечение
*/
function recordingRepetitive(a, b, all)
{
    let temp = [];
    let j = 0;
    a = a.split(" ");
    b = b.split(" ");
    all = all.split(" ");

    //Сохранение одинаковых элементов
    for (let i = 0; i < all.length; i++)
        if (countElements(b, a[i]) >= 1)
        {
            temp[j] = a[i];
            j++;
        }

    clear = temp;
}


/*
 * 3 Функция дополнение
 */
function searchForDifferent(a, b)
{
    let temp1 = [];
    let temp2 = [];
    let j = 0;
    a = a.split(" ");
    b = b.split(" ");

    //Сохранение одинаковых элементов
    for (let i = 0; i < a.length; i++)
        if (countElements(b, a[i]) == 0)
        {
            temp1[j] = a[i];
            j++;
        }

    j = 0;
    for (let i = 0; i < b.length; i++)
        if (countElements(a, b[i]) == 0)
        {
            temp2[j] = b[i];
            j++;
        }

    arr1 = temp1;
    arr2 = temp2;
}


/*
* 4 Функция симметричесая разность
*/
function recordingNonRepetitive(a, b)
{
    let temp = [];
    let j = 0;
    a = a.split(" ");
    b = b.split(" ");

    //Сохранение одинаковых элементов
    for (let i = 0; i < a.length; i++)
        if (countElements(b, a[i]) == 0)
        {
            temp[j] = a[i];
            j++;
        }
    for (let i = 0; i < b.length; i++)
        if (countElements(a, b[i]) == 0)
        {
            temp[j] = b[i];
            j++;
        }

    clear = temp;
}




/*
* Функция определяет количества вхождений элемента
* */
function countElements(mass, element)
{
    let count = 0;
    for (let i = 0; i < mass.length; i++)
        if (mass[i] == element)
            count++;
    return count;
}
/*
* Функция проверки элементов массива
* */
function check(str)
{
    let mass = false;
    if(str.length > 0)
    {
        mass = str.split(" ");


        //Проврка на ввод 1 символа слова
        for (let i = 0; i < mass.length; i++) //проверка на четную, если НЕЧЁТНАЯ то ошибка
        {
            if (mass[i][0] % 2 == 1 || mass[i][0] < '0' || mass[i][0] > '9' || mass[i].length != 4)
            {
                error_text = 'Ошибка при вводе массива: ' + str + ' В элементе ' + mass[i];
                mass = false;
                break;
            }
        }

        for (let i = 0; i < mass.length; i++) //проверка на нечётную, если нечетная то ошибка
        {
            if (mass[i][1] % 2 == 0 || mass[i][1] < '0' || mass[i][1] > '9' || mass[i].length != 4)
            {
                error_text = 'Ошибка при вводе массива: ' + str + ' В элементе ' + mass[i];
                mass = false;
                break;
            }
        }


        for (let i = 0; i < mass.length; i++) //проверка на цифру
        {
            if (mass[i][2] < '0' || mass[i][2] > '9' || mass[i].length != 4)
            {
                error_text = 'Ошибка при вводе массива: ' + str + ' В элементе ' + mass[i];
                mass = false;
                break;
            }
        }

        for (let i = 0; i < mass.length; i++) //проверка на цифру
        {
            if (mass[i][3] < '0' || mass[i][3] > '9' || mass[i].length != 4)
            {
                error_text = 'Ошибка при вводе массива: ' + str + ' В элементе ' + mass[i];
                mass = false;
                break;
            }
        }
    }
    else
        error_text = 'Вы ничего не ввели!';

    return mass;
}










/* КЛЮЧЕВЫЕ ФУНКЦИИ*/

/*
    1 Функция объединения
 */
function unification()
{
    let result_1 = [];
    let result_2 = [];
    let result_full = [];
    let a = document.getElementById('mass1');
    let b = document.getElementById('mass2');

    if (check(a.value) == false)
    {
        alert(error_text);
        return;
    }

    if (check(b.value) == false)
    {
        alert(error_text);
        return;
    }

    deleteElement(a.value);
    result_1 = clear;
    deleteElement(b.value);
    result_2 = clear;
    result_full = result_1.concat(result_2);
    result_full = result_full.join(" ");
    deleteElement(result_full);
    result_full = clear;

    document.getElementById("outUnification").innerText = "Объединение массивов: " + result_full;
}


/*
    2 Функция пересечения
 */
function intersection()
{
    let result_1 = [];
    let result_2 = [];
    let result_full = [];
    let a = document.getElementById('mass1');
    let b = document.getElementById('mass2');

    if (check(a.value) == false)
    {
        alert(error_text);
        return;
    }

    if (check(b.value) == false)
    {
        alert(error_text);
        return;
    }


    //result_1 = a.value.split(" ");
    deleteElement(a.value);
    result_1 = clear;
    deleteElement(b.value);
    result_2 = clear;
    result_full = result_1.concat(result_2);
    result_full = result_full.join(" ");
    result_1 = result_1.join(" ");
    result_2 = result_2.join(" ");

    recordingRepetitive(result_1, result_2, result_full);
    result_full = clear;

    document.getElementById("outIntersection").innerText = "Пересечение массивов: " + result_full;
}


/*
    3 Функция дополнения
 */
function addition()
{
    let result_1 = [];
    let result_2 = [];
    let a = document.getElementById('mass1');
    let b = document.getElementById('mass2');

    if (check(a.value) == false)
    {
        alert(error_text);
        return;
    }
    if (check(b.value) == false)
    {
        alert(error_text);
        return;
    }

    deleteElement(a.value);
    result_1 = clear;
    deleteElement(b.value);
    result_2 = clear;
    result_1 = result_1.join(" ");
    result_2 = result_2.join(" ");

    searchForDifferent(result_1, result_2);
    result_1 = arr1;
    result_2 = arr2;

    document.getElementById("outAdditionAB").innerText = "Дополнение массивов A/B: " + result_1 + "\n";
    document.getElementById("outAdditionBA").innerText = "Дополнение массивов B/A: " + result_2;
}


/*
    4 Функция симметрической разности
 */
function symmetricDifference()
{
    let result_1 = [];
    let result_2 = [];
    let result_full = [];
    let a = document.getElementById('mass1');
    let b = document.getElementById('mass2');

    if (check(a.value) == false)
    {
        alert(error_text);
        return;
    }
    if (check(b.value) == false)
    {
        alert(error_text);
        return;
    }

    deleteElement(a.value);
    result_1 = clear;
    deleteElement(b.value);
    result_2 = clear;
    result_1 = result_1.join(" ");
    result_2 = result_2.join(" ");

    recordingNonRepetitive(result_1, result_2);
    result_full = clear;

    document.getElementById("outSymmetricDifference").innerText = "Симметрическая разность массивов: " + result_full;
}