<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Моя 3 лаба</title>
    <link rel = "stylesheet" href = "/styles/Lab3_styles.css">
    <script type = "text/javascript" src = "/scripts/Lab3_scripts.js"></script>
    <link rel = "stylesheet" href = "/styles/dark.css">
</head>
<body>

<h1>Л/р №3</h1>
<form method="" action="">
    <table>
        <tr>
            <td> Введите отношение </td>
            <td> <textarea id = "arr1" value = "" rows = "3" cols = "25" placeholder="Отношение"></textarea> </td>
        </tr>
        <tr>
            <td> Введите элементы A множества </td>
            <td> <textarea id = "arr2" value = "" rows = "3" cols = "25" placeholder="Элемент(ы) №1"></textarea> </td>
        </tr>
        <tr>
            <td> Введите элементы B множества </td>
            <td> <textarea id = "arr3" value = "" rows = "3" cols = "25" placeholder="Элемент(ы) №2"></textarea> </td>
        </tr>
        <tr>
            <td colspan="2"> <input type="button" value = "Посчитать" onclick = "Answer();"> </td>
        </tr>
</form>

<td> <h2>Результат выполнения операций</h2>

    <div id = "NewMatrix"> </div> <br>
    <div id = "A->B"> </div> <br>
    <div id = "B->A"> </div> <br>
</td>

</body>
</html>