var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    parent: 'chuteVideo',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload ()
{
    this.load.image('chute', 'chute.PNG')
}

function create ()
{
    
}

function update ()
{
}

//how to compare strings in javascript? 
string_a.localeCompare(string_b);

/* Expected Returns:

 0:  exact match

-1:  string_a < string_b

 1:  string_a > string_b

 */




