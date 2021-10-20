let sq = $('.sq')
let upp = $('.upp')
let down = $('.down')
let elevator = {
    currentFloor: 1,
    maxFloor: 10,
    minFloor: 1,
    printFloor: function () {
        $('.h5').html('')
        setTimeout(() => {
            $('.h5').append(`We are in ${this.currentFloor} floor`)
        }, 5000)

    },
    upOneFloor: function () {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++;
            sq.animate({ top: '-=50px' }, 'slow')
        }
    },
    downOneFloor: function () {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--;
            sq.animate({ top: '+=50px' }, 'slow')
        }
    },
    toFloor: function (numOfFloor) {
        if (numOfFloor >= this.minFloor && numOfFloor <= this.maxFloor) {
            if (this.currentFloor > numOfFloor) {
                while (this.currentFloor > numOfFloor) {
                    this.downOneFloor();
                }
            } else {
                while (this.currentFloor < numOfFloor) {
                    this.upOneFloor();
                }
            }
        }

        this.printFloor()
    },
};

$('.btn1').on('click', () => { elevator.toFloor(1) })
$('.btn2').on('click', () => { elevator.toFloor(2) })
$('.btn3').on('click', () => { elevator.toFloor(3) })
$('.btn4').on('click', () => { elevator.toFloor(4) })
$('.btn5').on('click', () => { elevator.toFloor(5) })
$('.btn6').on('click', () => { elevator.toFloor(6) })
$('.btn7').on('click', () => { elevator.toFloor(7) })
$('.btn8').on('click', () => { elevator.toFloor(8) })
$('.btn9').on('click', () => { elevator.toFloor(9) })
$('.btn10').on('click', () => { elevator.toFloor(10) })



down.on('click', () => {
    sq.animate({ top: '+=50px' }, 'slow')
})
upp.on('click', () => {
    sq.animate({ top: '-=50px' }, 'slow')
})

$(document).keydown(function (e) {
    if (e.keyCode === 40) {
        sq.animate({ top: '+=50px' }, 'slow')
    }
    else if (e.keyCode === 38) {
        sq.animate({ top: '-=50px' }, 'slow')
    }
})
