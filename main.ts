sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true, effects.hearts)
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let Ducky = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`1000100002020303030303030303030303030303020204040404040404040404040404030202040404040404040404040404040302020404040404040404040404040403020202040404040404040404040404030202020404040404040404040404040302010104040404040404040404040303010104040404040404040404040403030101040404040404040404040404030301010404040404040404040404040303010104040404040404040404040403030101040404040404040404040404030301010404040404040404040404040303010104040404040404040404040303030101010404040404040404040403030301010104040404040404040404040303`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tilePath5], TileScale.Sixteen))
controller.moveSprite(Ducky)
let Donut = sprites.create(img`
    . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . 
    . . . . . . . . . . . b b 6 6 6 6 3 3 3 3 b a a . . . . . . . . 
    . . . . . . . . . b b 3 3 6 7 7 7 6 3 3 3 6 6 3 a a . . . . . . 
    . . . . . . . . b 3 3 3 3 3 8 8 8 3 3 3 3 8 9 6 3 3 a a . . . . 
    . . . . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 8 9 6 3 3 a a . . . 
    . . . . . . b 3 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 8 6 3 3 b a e . . 
    . . . . . b 3 4 5 5 4 3 3 3 3 3 3 3 3 3 3 4 4 4 3 3 3 3 a e . . 
    . . . . b 3 3 3 2 2 3 3 3 d d d d 3 3 3 3 4 5 5 2 3 3 d a e e . 
    . . . b 3 d 3 3 3 3 3 3 d d 3 b b b b 3 3 3 2 2 3 3 3 d a b e . 
    . . b 3 d 3 3 3 3 3 3 d 3 b b 3 3 b b 3 3 3 3 3 3 3 3 d a 4 e . 
    . . b d 3 3 3 3 3 3 3 3 b 3 3 a a b 3 3 3 3 3 3 3 2 2 3 a 4 e e 
    . b 3 d 3 6 6 3 3 3 3 b 3 3 a a b 3 3 3 6 6 3 3 2 4 4 2 b 4 e e 
    . b d 3 b 9 8 3 3 3 3 a 3 a a 3 3 3 3 3 8 7 6 3 3 e e 3 b 4 e e 
    . b d 6 9 8 3 3 3 3 b a a a 3 3 3 3 3 3 3 8 7 6 3 3 b b 4 b e e 
    b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 3 3 3 3 3 3 8 6 3 b a 4 4 e b e 
    b d d 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 4 4 b e b e 
    a d d 6 6 6 6 3 3 3 3 3 3 2 2 3 3 3 3 6 6 3 3 3 b a 4 4 b b b e 
    a d 6 7 7 7 6 3 3 3 3 3 2 4 4 2 3 3 6 9 8 3 d 3 a 4 4 4 b 4 e . 
    a d d 8 8 8 b 3 3 3 3 3 3 e e 3 3 6 9 8 3 3 d 3 a 4 4 b 4 4 e . 
    a d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 6 8 3 3 d 3 a 4 4 4 b 4 e . . 
    a 3 d d 3 3 3 3 3 4 4 4 3 3 3 3 3 d d d d 3 a 4 4 4 b 4 4 e . . 
    a b 3 3 d d d 3 2 5 5 4 3 3 3 3 d d 3 3 a a 4 4 4 b 4 4 e . . . 
    . e a b b 3 d d 3 2 2 3 3 3 3 3 b a a a 4 4 4 4 b 4 4 e . . . . 
    . e b a b b 3 d 3 3 3 d 3 3 b a a 4 4 4 4 4 3 b 4 4 e . . . . . 
    . . e b a a b 3 d d d 3 a a a 4 4 4 4 4 3 3 b 4 4 e . . . . . . 
    . . e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e . . . . . . . 
    . . . e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e . . . . . . . . 
    . . . . e b e e e b b b b b b b b 4 4 4 4 e e . . . . . . . . . 
    . . . . . e e b b b b 4 4 4 4 4 4 4 4 e e . . . . . . . . . . . 
    . . . . . . . e e e b b b 4 4 4 e e e . . . . . . . . . . . . . 
    . . . . . . . . . . e e e e e e . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Donut.setPosition(randint(0, 160), randint(0, 120))
info.startCountdown(20)
game.splash("Welcome to JD's game!")
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . . . . . . . . . 
    . . . . f f f f f 2 f . . . . . . . . . . . . . 
    . . f f e e e e e 2 2 f f . . . . . . . . . . . 
    . f f e e e e e e 2 2 2 f f . . . . . . . . . . 
    . f e e e e f f f e e e e f . . . . . . . . . . 
    . f f f f f e e e 2 2 2 2 e f . . . . . . . . . 
    f f f e 2 2 2 f f f f f e 2 f . . . . . . . . . 
    f f f f f f f f f e e e f f f . . . . . c c . . 
    f e f e 4 4 e b b f 4 4 e e f . . . c c d c . . 
    . f e e 4 d 4 b b f d d e f . . c c d d c c . . 
    . . f e e e 4 d d d d d f e e c d d d c . . . . 
    . . . f 2 2 2 2 2 2 2 e e d d c d c c . . . . . 
    . . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
    . . . f f f f f f f f e e e e . . . . . . . . . 
    . . . f f f . . . f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(Ducky, 10)
myEnemy.setPosition(randint(0, 160), randint(0, 120))
