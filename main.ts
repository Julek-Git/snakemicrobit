enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    snake0.change(LedSpriteProperty.Direction, -90)
    snake1.move(1)
    basic.pause(100)
    snake0.change(LedSpriteProperty.Direction, -90)
    snake2.move(1)
    basic.pause(100)
    snake2.move(1)
    snake2.change(LedSpriteProperty.Direction, -90)
})
input.onButtonPressed(Button.B, function () {
    snake0.change(LedSpriteProperty.Direction, 90)
    snake1.move(1)
    basic.pause(100)
    snake0.change(LedSpriteProperty.Direction, 90)
    snake2.move(1)
    basic.pause(100)
    snake2.move(1)
    snake2.change(LedSpriteProperty.Direction, 90)
})
let snake2: game.LedSprite = null
let snake1: game.LedSprite = null
let snake0: game.LedSprite = null
snake0 = game.createSprite(2, 1)
snake1 = game.createSprite(2, 2)
snake2 = game.createSprite(2, 3)
snake0.set(LedSpriteProperty.Direction, 0)
snake1.set(LedSpriteProperty.Direction, 0)
snake2.set(LedSpriteProperty.Direction, 0)
basic.forever(function () {
    if (snake0.isTouchingEdge()) {
        if (snake0.get(LedSpriteProperty.Direction) == 0 || snake0.get(LedSpriteProperty.Direction) == 180) {
            snake0.set(LedSpriteProperty.Y, Math.abs(snake0.get(LedSpriteProperty.Y) - 4))
        }
        if (snake0.get(LedSpriteProperty.Direction) == 90 || snake0.get(LedSpriteProperty.Direction) == 180) {
            snake0.set(LedSpriteProperty.X, Math.abs(snake0.get(LedSpriteProperty.X) - 4))
        }
    }
    if (snake1.isTouchingEdge()) {
        if (snake1.get(LedSpriteProperty.Direction) == 0 || snake1.get(LedSpriteProperty.Direction) == 180) {
            snake1.set(LedSpriteProperty.Y, Math.abs(snake1.get(LedSpriteProperty.Y) - 4))
        }
        if (snake1.get(LedSpriteProperty.Direction) == 90 || snake1.get(LedSpriteProperty.Direction) == 180) {
            snake1.set(LedSpriteProperty.X, Math.abs(snake1.get(LedSpriteProperty.X) - 4))
        }
    }
    if (snake2.isTouchingEdge()) {
        if (snake2.get(LedSpriteProperty.Direction) == 0 || snake2.get(LedSpriteProperty.Direction) == 180) {
            snake2.set(LedSpriteProperty.Y, Math.abs(snake2.get(LedSpriteProperty.Y) - 4))
        }
        if (snake2.get(LedSpriteProperty.Direction) == 90 || snake2.get(LedSpriteProperty.Direction) == 180) {
            snake2.set(LedSpriteProperty.X, Math.abs(snake2.get(LedSpriteProperty.X) - 4))
        }
    }
    snake0.move(1)
    snake1.move(1)
    snake2.move(1)
    basic.pause(100)
})
