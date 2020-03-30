// -----JS CODE-----
// @input Component.Text textObj

var currentTime = getTime()

//show credit for 3 seconds, then phase out
if (currentTime <= 3) {
    return
}

//use current time as alpha delta
currentTime /= 100

//phase out text
var textColor = script.textObj.textFill.color
textColor.w -= currentTime

//phase out dropshadow
var dropShadowColor = script.textObj.dropshadowSettings.fill.color
dropShadowColor.w -= currentTime

script.textObj.textFill.color = textColor
script.textObj.dropshadowSettings.fill.color = dropShadowColor

//disable this script and object after phase out
if (textColor.w <= 0) {
    script.enabled = false
    script.textObj.enabled = false
    print("Script and Text Disabled")
}