// DuplicateVFXExample.js
// Version: 0.0.1
// Event: Select on the script
// Description: An example of how you can duplicate and offset a VFX component

// @input Component.VFXComponent vfx
// @input int count {"widget":"slider", "min":0, "max":5, "step":1, "label": "Supported RT"}
// @input vec3 offset

if (!script.vfx) {
    print("ERROR: Please set the VFX component to the script.");
    return;
}
if (!script.vfx.asset) {
    print("ERROR: Please make sure VFX component contains VFX asset.");
    return;
}

var mainWorldPos = script.vfx.getTransform().getLocalPosition();

for (var i = 0; i < script.count; i++) {
    mainWorldPos = mainWorldPos.add(script.offset);

    var newObj = global.scene.createSceneObject("");
    var vfxComp = newObj.createComponent("Component.VFXComponent");
    var newVfxAsset = script.vfx.asset.clone();
    vfxComp.asset = newVfxAsset;

    newObj.setParent(script.vfx.getSceneObject().getParent());
    newObj.getTransform().setLocalPosition(mainWorldPos);
}