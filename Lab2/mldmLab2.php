<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Моя 2 лаба</title>
    <link rel = "stylesheet" href = "/styles/Lab2_styles.css">
    <script type = "text/javascript" src = "/scripts/Lab2_scripts.js"></script>
    <script type = "text/javascript" src = "/scripts/Lab2_bread.js"></script>
    <script rel = "text/javascript" src = "/scripts/jquery-3.6.0.js"></script>
    <link rel = "stylesheet" href = "/styles/dark.css">
</head>
<body onload="testConfirmDialog();">

<h1>Л/р №2</h1>
    <form method="" action="">
        <table>
            <tr>
                <td> Введите матрицу n*n </td>
                <td> <textarea id = "arr1" value = "" rows = "10" cols = "25" placeholder="Введите первую бинарную матрицу NxN"></textarea> </td>
            </tr>
            <tr>
                <td colspan="2"> <input type="button" value = "Посчитать" onclick = "Answer();"> </td>
            </tr>
    </form>

<td> <h2> <center>Результат выполнения операций</center> </h2>


<div id = "NewMatrix"> </div> <br>
<div id = "reflex"> </div> <br>
<div id = "skewSymmetri"> </div> <br>
<div id = "symmetri"> </div> <br>
<div id = "transiti"> </div> <br>
</td>

<img class="brd" src="../bread/1.png" name="slide_show">

</body>
</html>