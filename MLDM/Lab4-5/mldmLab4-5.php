<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Моя 4 и 5 лаба</title>
    <link rel = "stylesheet" href = "/styles/Lab4-5_styles.css">
    <script type = "text/javascript" src = "/scripts/Lab4-5_scripts.js"></script>
    <script type = "text/javascript" src = "/scripts/jquery-3.6.0.js"></script>
    <link rel = "stylesheet" href = "/styles/dark.css">
</head>
<body>


<h1>Л/р № 4 и 5</h1>
<form method="" action="">
    <table>
        <tr>
            <td> Какую лабу показать? </td>
            <td> <input id = "arr4" value = "" size="4" placeholder="4 или 5"></input> </td>
        </tr>
        <tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>
        <tr>
            <td> Введите матрицу смежности </td>
            <td>

                <textarea id = "arr1" value = "" rows = "9" cols = "16" placeholder="Пример ввода:

0 3 1 1 0 0
3 0 0 0 8 0
1 0 0 5 1 0
1 0 5 0 0 3
0 8 1 0 0 0
0 0 0 3 0 0" autofocus ></textarea> </td>
        </tr>
        <tr>
            <td> Введите начальную и конечную точку (для 4 лабы) </td>
            <td> <input id = "arr2" value = "" size="4" placeholder="От '1'"> </input>
                 <input id = "arr3" value = "" size="4" placeholder="До"></input> </td>
        </tr>
        <tr>
            <td colspan="2"> <input type="button" value = "Посчитать" onclick = "Answer(document.getElementById('arr1').value,document.getElementById('arr2').value,document.getElementById('arr3').value,document.getElementById('arr4').value)"> </td>
        </tr>
</form>





<td> <h2>Результат выполнения операций</h2>

    <div id ="matrix"></div>

    <!--<div class="abc_vert"> 1 2 3 4 5 6 7 8 9</div>

    <div class="abc_hor">
        1 <br>2 <br>3 <br>4 <br>5 <br>6 <br>7 <br>8 <br>9</div>-->

</td>



</body>
</html>