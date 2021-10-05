
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="指数"
namespace custom {
    /**
     * TODO: describe your function here
     */
    //% block
    export function 累乗(A: number, N: number): void {
        // Add code here
        basic.showNumber(Math.pow(A, N))
    }
    /**
     * TODO: describe your function here
     */
    //% block
    export function 累乗の足し算(A: number, N: number, B:number, M:number): void{
        A = Math.pow(A,N)
        B = Math.pow(B,M)
        basic.showNumber(A+B)
    }
}
