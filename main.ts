basic.forever(function () {
    if (input.lightLevel() > 20) {
        basic.showIcon(IconNames.No)
        music.setVolume(181)
        music.playTone(698, music.beat(BeatFraction.Half))
    } else {
        basic.clearScreen()
    }
})
