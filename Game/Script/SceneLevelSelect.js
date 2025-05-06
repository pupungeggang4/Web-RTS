class SceneLevelSelect {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Select Level', UI.levelselect.textTitle)
        Render.strokeRectUI(game.ctx, UI.levelselect.buttonBack)
    }
    
    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }

    static mouseUp(game, pos, button) {

    }
}
