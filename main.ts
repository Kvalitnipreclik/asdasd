let Zamek = false
let Zamek2 = false

let heslo = 12
let grp = 5
let fakegrp = 1
let fakegeslo = 0
let planB = false
radio.setTransmitPower(4);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(grp)





input.onButtonPressed(Button.A, function () {
    radio.sendNumber(heslo)
    console.log("ahooj")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # # # .
        . . # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (planB) {
        planB = false
    } else {
        planB = true
    }

})

if (planB) {
    radio.sendValue("haha", 101010)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        basic.pause(20)
}
const mySerial = Utility.encodeSerial((control.deviceSerialNumber()))


radio.onReceivedValue(function (key: string, value: number) {
    if (mySerial === key) {
        console.logValue("nextCode", value)
        fakegeslo = value
        Zamek = true

        basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    }
    if (key === "grp" || "grp:") {
        console.logValue("nextCode", value)
        grp = value
        Zamek2 = true
        basic.showLeds(`
        . . . . .
        . # # . .
        . # . # .
        . # # # .
        . . . . .
        `)
        
    }

   

})








if (Zamek && Zamek2) {
    grp = fakegrp
    heslo = fakegeslo
    
    basic.showLeds(`
        . . . . .
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(1000)
}

