// -----JS CODE-----
// @input Component.ObjectTracking face
// @input Component.ObjectTracking hand
// @input Component.Text warning
// @input Component.Text instructions

// Plays the audio and hides the warning text

var facePosition = script.face.getTransform().getLocalPosition()
var handPosition = script.hand.getTransform().getLocalPosition()

var warningTextColor = script.warning.textFill.color
var warningDropShadowColor = script.warning.dropshadowSettings.fill.color

var instructionsTextColor = script.instructions.textFill.color
var instructionsDropShadowColor = script.instructions.dropshadowSettings.fill.color

// Hide instructions if recording
if (global.scene.isRecording()) {
    // Hide Instructions
    instructionsTextColor.w = 0
    instructionsDropShadowColor.w = 0
    script.instructions.textFill.color = instructionsTextColor
    script.instructions.dropshadowSettings.fill.color = instructionsDropShadowColor
}


print("Distance: " + handPosition.distance(facePosition))
if (script.hand.isTracking() && handPosition.distance(facePosition) < 7) {
    // FACE IS BEING TOUCHED
    var originalColor = script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor
    originalColor.w = 1
    script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor = originalColor

    // Show Warning
    warningTextColor.w = 1
    warningDropShadowColor.w = 1
    script.warning.textFill.color = warningTextColor
    script.warning.dropshadowSettings.fill.color = warningDropShadowColor
    
    // Hide Instructions
    instructionsTextColor.w = 0
    instructionsDropShadowColor.w = 0
    script.instructions.textFill.color = instructionsTextColor
    script.instructions.dropshadowSettings.fill.color = instructionsDropShadowColor

    
} else {
    // FACE IS NOT BEING TOUCHED
    var originalColor = script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor
    originalColor.w = 0
    script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor = originalColor
    
    warningTextColor.w = 0
    warningDropShadowColor.w = 0
    script.warning.textFill.color = warningTextColor
    script.warning.dropshadowSettings.fill.color = warningDropShadowColor 
}