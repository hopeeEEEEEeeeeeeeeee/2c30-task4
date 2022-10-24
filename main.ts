let x_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    while (x_value <= 4) {
        led.plot(x_value, 0)
        basic.pause(500)
        basic.clearScreen()
        x_value += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    }
})
