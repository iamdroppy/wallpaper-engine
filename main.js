function glitch() {
    var composer = new THREE.EffectComposer(renderer);
    var renderPass = new THREE.RenderPass(scene, camera);
    composer.addPass(renderPass);
    var glitchPass = new THREE.GlitchPass();
    composer.addPass(glitchPass);
    glitchPass.renderToScreen = true;
    return composer;
}