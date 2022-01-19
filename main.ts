input.onButtonPressed(Button.A, function () {
    basic.showString("i")
    basic.showString("" + (tenplnt))
})
input.onButtonPressed(Button.B, function () {
    let tenpExt = 0
    basic.showString("e")
    basic.showString("" + (tenpExt))
})
let tenplnt = 0
radio.setGroup(4)
basic.forever(function () {
    tenplnt = input.temperature()
    tenplnt = tenplnt + 1
})
