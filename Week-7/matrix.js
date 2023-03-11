/**
 * Problem 6.2 Spiral Order Matrix 
 * Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.
 * Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
 * You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
 * 
 * [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]
 * ]
 * 
 * 1, 2, 3, 6, 9, 8, 7, 4, 5
 * 
 * 00, 01, 02, 12, 22, 21, 20, 10, 11
 * 
 * ij, ij+1, ij+1, 
 * i+1j, i+1j, 
 * ij-1, ij-1, 
 * i-1j, 
 * ij+1
 */

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(getSpiralMartixString(matrix));


function getSpiralMartixString(arr) {
    let spiralString = '';
    let m = arr.length;
    let n = arr[0].length;
    let i, k = 0, l = 0;

    while (k < m && l < n) {
        for (i = l; i < n; ++i) {
            spiralString += `${arr[k][i]} ,`;
        }
        k++;

        for (i = k; i < m; ++i) {
            spiralString += `${arr[i][n-1]} ,`;
        }
        n--;

        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                spiralString += `${arr[m-1][i]} ,`;
            }
            m--;
        }

        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                spiralString += `${arr[i][l]} ,`;
            }
            l++;
        }
    }
    return spiralString.substring(0, spiralString.length-2);;
}