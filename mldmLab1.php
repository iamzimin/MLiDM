<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Моя 1 лаба</title>
    <link rel = "stylesheet" href = "/styles/styles.css">
    <link rel = "stylesheet" href = "/styles/dark.css">
    <script type = "text/javascript" src = "/scripts/scripts.js"></script>
</head>
<body>
    <h1>Л/р №1</h1>

        <form method="" action="">
            <table>
                <tr>
                    <td> Введите элементы 1 массива </td>
                    <td> <input type = "text" id = "mass1" value = "" size = "150" /><br> </td>
                </tr>
                <tr>
                    <td> Введите элементы 2 массива </td>
                    <td> <input type = "text" id = "mass2" value = "" size = "150" /><br> </td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="button" value = "Объединение" onclick = "unification();"> </td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="button" value = "Пересечение" onclick = "intersection();"> </td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="button" value = "Дополнение" onclick = "addition();"> </td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="button" value = "Симметрическая разность" onclick = "symmetricDifference();"> </td>
                </tr>
            </table>
        </form>

    <td> <h2> <center>Результат выполнения операций</center> </h2></td>

    <div id = "outUnification"> </div> <br>
    <div id = "outIntersection"> </div> <br>
    <div id = "outAdditionAB"> </div>
    <div id = "outAdditionBA"> </div> <br>
    <div id = "outSymmetricDifference"> </div> <br>
</body>
</html>