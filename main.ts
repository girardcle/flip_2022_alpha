function mainMenu () {
    scene.setBackgroundImage(assets.image`mainMenuBG`)
    cursor = sprites.create(assets.image`menuArrowWhite`, SpriteKind.Player)
    cursor.setPosition(50, 95)
}
function levelController () {
    if (currentLevel == 0) {
        mainMenu()
    }
}
let cursor: Sprite = null
let currentLevel = 0
currentLevel = 0
levelController()
