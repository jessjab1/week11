//resets all boxes
function RestartGame() {
    location.reload();
    document.getElementById('b1').innerHTML = '-';
    document.getElementById('b2').innerHTML = '-';
    document.getElementById('b3').innerHTML = '-';
    document.getElementById('b4').innerHTML = '-';
    document.getElementById('b5').innerHTML = '-';
    document.getElementById('b6').innerHTML = '-';
    document.getElementById('b7').innerHTML = '-';
    document.getElementById('b8').innerHTML = '-';
    document.getElementById('b9').innerHTML = '-';
}

//check status of each box, if a player won, if it is a draw or if its the next player's turn
function CheckStatus() {
    let b1 = document.getElementById("b1").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let b4 = document.getElementById("b4").innerHTML;
    let b5 = document.getElementById("b5").innerHTML;
    let b6 = document.getElementById("b6").innerHTML;
    let b7 = document.getElementById("b7").innerHTML;
    let b8 = document.getElementById("b8").innerHTML;
    let b9 = document.getElementById("b9").innerHTML;

//player X win
    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        $('#alertX').show()
    } else if (b1== 'X' && b5 == 'X' && b9 == 'X' ) {
        $('#alertX').show()
    } else if (b1== 'X' && b4 == 'X' && b7 == 'X' ) {
        $('#alertX').show()
    } else if (b2== 'X' && b5 == 'X' && b8 == 'X' ) {
        $('#alertX').show()
    } else if (b3== 'X' && b6 == 'X' && b9 == 'X' ) {
        $('#alertX').show()
    } else if (b4== 'X' && b5 == 'X' && b6 == 'X' ) {
        $('#alertX').show()
    } else if (b7== 'X' && b8 == 'X' && b9 == 'X' ) {
        $('#alertX').show()
    } else if (b3== 'X' && b5 == 'X' && b7 == 'X' ) {
        $('#alertX').show()
//player O win
    } else if (b1== 'O' && b2 == 'O' && b3 == 'O' ) {
        $('#alertO').show()
    } else if (b1== 'O' && b5 == 'O' && b9 == 'O' ) {
        $('#alertO').show()
    } else if (b1== 'O' && b4 == 'O' && b7 == 'O' ) {
        $('#alertO').show()
    } else if (b2== 'O' && b5 == 'O' && b8 == 'O' ) {
        $('#alertO').show()
    } else if (b3== 'O' && b6 == 'O' && b9 == 'O' ) {
        $('#alertO').show()    
    } else if (b4== 'O' && b5 == 'O' && b6 == 'O' ) {
        $('#alertO').show()
    } else if (b7== 'O' && b8 == 'O' && b9 == 'O' ) {
        $('#alertO').show()
    } else if (b3== 'O' && b5 == 'O' && b7 == 'O' ) {
        $('#alertO').show()
//Tie
    } else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
    (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
        $('#alertTie').show()
    } else {
        if (turn == 1) {
            document.getElementById('turn').innerHTML = "Player X Turn!";
    } else 
        document.getElementById('turn').innerHTML = "Player O Turn!";
    }
}    

//Player clicks the a box and will mark the corresponding letter then change to the next players turn
let turn = 1;
function B1() {
    if (turn == 1) {
        document.getElementById("b1").innerHTML = "X";
        document.getElementById("b1").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b1").innerHTML = "O";
        document.getElementById("b1").disabled = true;
        turn = 1;
    }
}

function B2() {
    if (turn == 1) {
        document.getElementById('b2').innerHTML = "X";
        document.getElementById('b2').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b2').innerHTML = "O";
        document.getElementById('b2').disabled = true;
        turn = 1;
    }
}

function B3() {
    if (turn == 1) {
        document.getElementById('b3').innerHTML = "X";
        document.getElementById('b3').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b3').innerHTML = "O";
        document.getElementById('b3').disabled = true;
        turn = 1;
    }
}

function B4() {
    if (turn == 1) {
        document.getElementById('b4').innerHTML = "X";
        document.getElementById('b4').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b4').innerHTML = "O";
        document.getElementById('b4').disabled = true;
        turn = 1;
    }
}

function B5() {
    if (turn == 1) {
        document.getElementById('b5').innerHTML = "X";
        document.getElementById('b5').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b5').innerHTML = "O";
        document.getElementById('b5').disabled = true;
        turn = 1;
    }
}

function B6() {
    if (turn == 1) {
        document.getElementById('b6').innerHTML = "X";
        document.getElementById('b6').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b6').innerHTML = "O";
        document.getElementById('b6').disabled = true;
        turn = 1;
    }
}

function B7() {
    if (turn == 1) {
        document.getElementById('b7').innerHTML = "X";
        document.getElementById('b7').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b7').innerHTML = "O";
        document.getElementById('b7').disabled = true;
        turn = 1;
    }
}

function B8() {
    if (turn == 1) {
        document.getElementById('b8').innerHTML = "X";
        document.getElementById('b8').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b8').innerHTML = "O";
        document.getElementById('b8').disabled = true;
        turn = 1;
    }
}

function B9() {
    if (turn == 1) {
        document.getElementById('b9').innerHTML = "X";
        document.getElementById('b9').disabled = true;
        turn = 0;
    } else {
        document.getElementById('b9').innerHTML = "O";
        document.getElementById('b9').disabled = true;
        turn = 1;
    }
}
