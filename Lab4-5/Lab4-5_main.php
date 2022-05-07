<?php
/*
0 3 1 1 0 0
3 0 0 0 8 0
1 0 0 5 1 0
1 0 5 0 0 3
0 8 1 0 0 0
0 0 0 3 0 0
*/
if ($_POST['message4'] != null) {
    $numberLab = $_POST['message4'];
} else {
    echo "Введите нормер лабы";
    return;
}


if ($_POST['message1'] != null) {
    $message = $_POST['message1'];
} else {
    echo "Вы не ввели матрицу смежности неориентированного графа";
    return;
}

if ($numberLab == 4) {
    if ($_POST['message2'] != null) {
        $start = $_POST['message2'] - 1;
    } else {
        echo "Вы не ввели начальную точку";
        return;
    }
    if ($_POST['message3'] != null) {
        $end = $_POST['message3'] - 1;
    } else {
        echo "Вы не ввели конечную точку";
        return;
    }
}


$matrixElements = preg_split('/[ \n]/', $message);
$sizeMatrix = sqrt(count($matrixElements));

if (floor($sizeMatrix) != $sizeMatrix) {
    echo "У вас не квадратная матрица смежности";
    return;
}

$matrix = array($sizeMatrix);

for($x = 0; $x < $sizeMatrix; $x++) {
    $matrix[$x] = array($sizeMatrix);
    for($y = 0; $y < $sizeMatrix; $y++)
        $matrix[$x][$y] = $matrixElements[$x + $y * $sizeMatrix];
}

$matrixAchiev = array($sizeMatrix);
for($x = 0; $x < $sizeMatrix; $x++) {
    $matrixAchiev[$x] = array($sizeMatrix);
    for($y = 0; $y < $sizeMatrix; $y++)
        $matrixAchiev[$x][$y] = $matrix[$y][$x];
}

if ($numberLab == 4) {
    $flag = true;                                                    //Проверка на ввод
    for ($x = 0; $x < $sizeMatrix; $x++) {
        if ($matrix[$x][$x] != 0) {
            if ($flag)
                echo "Это матрица смежности ориентированного графа :(";

            echo "<br> <br>Ошибка в элементе с индексом: ";
            echo $x + 1;
            echo " ";
            echo $x + 1;
            echo "<br>Этот индекс должен быть равен '*' <br>";
            $flag = false;
        }
        for ($y = 0; $y < $sizeMatrix; $y++) {
            if ($matrix[$x][$y] != $matrix[$y][$x]) {
                if ($flag) {
                    echo "Это матрица смежности ориентированного графа :(<br>";
                    $flag = false;
                }
                echo "<br>Возможно ошибка в элементе с индексом: ";
                echo $x + 1;
                echo " ";
                echo $y + 1;
            }
        }
    }

    if (!$flag)
        return;
}


if ($numberLab == 4) {
    $infinity = 9999;
    $peak = sqrt(count($matrixElements));
    $findShortPath = array(count($matrixElements));
    $lengthShortPath = array(count($matrixElements));
    $prevPeak = array(count($matrixElements));

    for ($peakCount = 0; $peakCount < $peak; $peakCount++) {
        $lengthShortPath[$peakCount] = $infinity;
        $findShortPath[$peakCount] = 0;
    }

    $prevPeak[$start] = 0;
    $lengthShortPath[$start] = 0;
    $findShortPath[$start] = 1;
    $currentPeak = $start;

    while (true) {
        for ($peakCount = 0; $peakCount < $peak; $peakCount++) {
            if ($matrix[$currentPeak][$peakCount] == "0")
                continue;

            if ($findShortPath[$peakCount] == 0 && $lengthShortPath[$peakCount] > $lengthShortPath[$currentPeak] + $matrix[$currentPeak][$peakCount]) {
                $lengthShortPath[$peakCount] = $lengthShortPath[$currentPeak] + $matrix[$currentPeak][$peakCount];
                $prevPeak[$peakCount] = $currentPeak;
            }
        }
        $shortestPath = $infinity;
        $currentPeak = -1;

        for ($peakCount = 0; $peakCount < $peak; $peakCount++) {
            if ($findShortPath[$peakCount] == 0 && $lengthShortPath[$peakCount] < $shortestPath) {
                $currentPeak = $peakCount;
                $shortestPath = $lengthShortPath[$peakCount];
            }
        }
        if ($currentPeak == -1) {
            echo "Нет пути из вершины ";
            echo $start + 1;
            echo " в вершину ";
            echo $end + 1;
            break;
        }
        if ($currentPeak == $end)
        {
            echo "Кратчайший путь из вершины ";
            echo $start + 1;
            echo " в вершину ";
            echo $end + 1;
            echo ":<br>";
            $peakCount = $end;

            while ($peakCount != $start) {
                $tempPeakCount = $prevPeak[$peakCount];
                echo $peakCount + 1;
                if ($tempPeakCount == $start)
                    break;
                echo " ← ";
                $peakCount = $tempPeakCount;
            }

            echo " ← ";
            echo $start + 1;
            echo "<br>";
            echo "Длина пути: ";
            echo $lengthShortPath[$end];
            break;
        }
        $findShortPath[$currentPeak] = 1;
    }
    echo "<br><br><br><br><br><br><br>";
}



if ($numberLab == 5) {

    echo "Матрица достижимости графа:";

    for ($k = 0; $k < $sizeMatrix; $k++)
        for ($i = 0; $i < $sizeMatrix; $i++)
            for ($j = 0; $j < $sizeMatrix; $j++)
                $matrixAchiev[$i][$j] = ($matrixAchiev[$i][$j] || ($matrixAchiev[$k][$j] && $matrixAchiev[$i][$k]));

    for ($i = 0; $i < $sizeMatrix; $i++) {
        echo "<br>";
        for ($j = 0; $j < $sizeMatrix; $j++) {
            if (!$matrixAchiev[$i][$j])
                echo "0";
            else
                echo "1";
            echo " ";
        }
    }
}