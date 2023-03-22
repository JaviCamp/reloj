function parpadeo () {
    for (let index = 0; index < 4; index++) {
        haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds), kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.show()
        basic.pause(100)
        haloDisplay.clear()
        basic.pause(100)
    }
}
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
kitronik_halo_hd.setTime(23, 12, 0)
basic.forever(function () {
    if (kitronik_halo_hd.readTimeParameter(TimeParameter.Seconds) != 0) {
        for (let index = 0; index <= kitronik_halo_hd.readTimeParameter(TimeParameter.Seconds); index++) {
            if (index % 5 == 0) {
                haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds), kitronik_halo_hd.colors(ZipLedColors.Red))
            } else {
                haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds), kitronik_halo_hd.colors(ZipLedColors.Green))
            }
        }
        parpadeo()
    } else {
        haloDisplay.clear()
    }
})
control.inBackground(function () {
    while (true) {
        basic.showString("" + kitronik_halo_hd.readTimeParameter(TimeParameter.Hours) + ":" + kitronik_halo_hd.readTimeParameter(TimeParameter.Minutes))
        basic.pause(2000)
    }
})
