// MATRIXES !!!
var numbers = [
    [12, 33, 45, 1234, 6.89],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
    [-12, -0.33, 4.5, 12034, 9089]
];

/* 
var numbers = [
0 ->  [12, 33, 45, 1234, 6.89],
        0   1   2    3     4
--------------------------------------
1 ->  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
       0  1  2  3  4  5  6   7  8  9
--------------------------------------
2 ->  [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
        0   1   2    3  4   5    6  7    8  9   10
--------------------------------------
3 ->  [-12, -0.33, 4.5, 12034, 9089]
        0     1     2     3     4
];
*/


// nested loops

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    for (let j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j]);
    }
}