class SceneTitle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'RTS', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game [S]', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonEditor)
        Render.fillTextUI(game.ctx, 'Editor [E]', UI.title.textEditor)
        Render.strokeRectUI(game.ctx, UI.title.buttonCustom)
        Render.fillTextUI(game.ctx, 'Custom [C]', UI.title.textCustom)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase Data [D]', UI.title.textErase)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {
        if (key === 's') {
            game.loadLevel()
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.loadLevel()
            } 
        }
    }
}
