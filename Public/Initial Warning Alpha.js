// -----JS CODE-----
// @input Component.Text warning

var textColor = script.warning.textFill.color
var dropShadowColor = script.warning.dropshadowSettings.fill.color
var outlineColor = script.warning.outlineSettings.fill.color
textColor.w = 0
dropShadowColor.w = 0
outlineColor.w = 0
script.warning.textFill.color = textColor
script.warning.dropshadowSettings.fill.color = dropShadowColor 
script.warning.outlineSettings.fill.color = outlineColor