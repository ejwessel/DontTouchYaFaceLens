// -----JS CODE-----
// @input Component.ObjectTracking face
// @input Component.ObjectTracking hand
// @input Component.Text warning

// Plays the audio and hides the warning text

var facePosition = script.face.getTransform().getLocalPosition()
var handPosition = script.hand.getTransform().getLocalPosition()

var textColor = script.warning.textFill.color
var dropShadowColor = script.warning.dropshadowSettings.fill.color
var outlineColor = script.warning.outlineSettings.fill.color

print("Distance: " + handPosition.distance(facePosition))
if (script.hand.isTracking() && handPosition.distance(facePosition) < 5) {
    // FACE IS BEING TOUCHED
    var originalColor = script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor
    originalColor.w = 1
    script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor = originalColor

    textColor.w = 1
    dropShadowColor.w = 1
    outlineColor.w = 1
    script.warning.textFill.color = textColor
    script.warning.dropshadowSettings.fill.color = dropShadowColor 
    script.warning.outlineSettings.fill.color = outlineColor
    
} else {
    // FACE IS NOT BEING TOUCHED
    var originalColor = script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor
    originalColor.w = 0
    script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor = originalColor
    
    textColor.w = 0
    dropShadowColor.w = 0
    outlineColor.w = 0
    script.warning.textFill.color = textColor
    script.warning.dropshadowSettings.fill.color = dropShadowColor 
    script.warning.outlineSettings.fill.color = outlineColor    
}