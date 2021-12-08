/**
 * Ploque personalizado
 */
//% weight=100 color=#0fbc11 icon=""
namespace Animaciones {
    /**
     * Parpadea el LED indicado de la matriz cada un cierto intervalo de tiempo
     * @param x indica la coordenada horizontal de la matriz de led (1-5)
     * @param y indica la coordenada horizontal de la matriz de led (1-5)
     * @param t indica el tiempo de intervalo del parpadeo en ms (mili segundos)
     */
    //% block = "parpadea un LED de coordenadas x= $x y= $y por $t ms."
    export function parpadeo(x: number, y: number, t: number): void {
        let sprite = game.createSprite(x-1,y-1) 
        sprite.setBlink(t) 
        sprite.blink()
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
