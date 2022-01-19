radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("e")
        basic.showString("" + (receivedNumber))
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("i")
    basic.showString("" + (tenplnt))
})
let tenplnt = 0
radio.setGroup(4)
basic.forever(function () {
    tenplnt = input.temperature()
    tenplnt = tenplnt + 1
})
