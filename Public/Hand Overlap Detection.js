// -----JS CODE-----
// @input Component.ObjectTracking face
// @input Component.ObjectTracking hand
// @input Component.AudioComponent audio

// Shows and hides the hand marker

var facePosition = script.face.getTransform().getLocalPosition()
var handPosition = script.hand.getTransform().getLocalPosition()

print("Distance: " + handPosition.distance(facePosition))
if (script.hand.isTracking() && handPosition.distance(facePosition) < 7) {
    // FACE IS BEING TOUCHED
    var originalColor = script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor
    originalColor.w = 1
    script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor = originalColor
    
    if (!script.audio.isPlaying()) {
        script.audio.play(1)
    }
    
} else {
    // FACE IS NOT BEING TOUCHED
    var originalColor = script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor
    originalColor.w = 0
    script.hand.getSceneObject().getChild(0).getComponent("Component.Image").getMaterial(0).mainPass.baseColor = originalColor  
}