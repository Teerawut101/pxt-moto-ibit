enum Motor {
    //% block="left"
    Left = 8448,
    //% block="right"
    Right = 8192
}

enum MotorDirection {
    //% block="forward"
    Forward = 0,
    //% block="reverse"
    Reverse = 1,
    //% block="turnleft"
    Turnleft = 2,
    //% block="turnright"
    Turnright = 3
}

enum MotorPower {
    //%block="ON"
    On = 28673,
    //%block="OFF"
    Off = 28672
}
enum Chadc8 {
    //%block="A0"
    A0 = 0,
//%block="A1"
    A1 = 1
}
/**
 * Functions to operate the moto:bit
 */
//% color=#39a854 icon="\uf1b9" block="iBit"
namespace ibit {
    /**
	 * พริ้วดั่งสายน้ำ
  
	 */

    //% blockId="motobit_MotorMove" block="motorMove %path|at speed %speed|%"
    //% speed.min=0 speed.max=100
    //% weight=80
    export function Move(direction: MotorDirection, speed: number): void {
	  let pwr = 0
        speed = Math.abs(speed)
        if (speed > 100) {
            speed = 100
        }
        pwr = pins.map(speed, 0, 100, 0, 1023)
        if (direction == MotorDirection.Forward) {
		pins.analogWritePin(AnalogPin.P0, pwr)
		pins.analogWritePin(AnalogPin.P1, pwr)
        }
        else if  (direction == MotorDirection.Reverse){
		pins.analogWritePin(AnalogPin.P0, 0)
		pins.analogWritePin(AnalogPin.P1, 0)
           
        }else if  (direction == MotorDirection.Turnleft){
		pins.analogWritePin(AnalogPin.P0, pwr)
		pins.analogWritePin(AnalogPin.P1, 0)
           
        }else if  (direction == MotorDirection.Turnright){
		pins.analogWritePin(AnalogPin.P0, 0)
		pins.analogWritePin(AnalogPin.P1, pwr)
  
        }
    }
   //% weight=90
    //% blockId="motobit_stop" block="motorStop"
    export function Stop(): void {
       pins.analogWritePin(AnalogPin.P0, 0)
       pins.analogWritePin(AnalogPin.P1, 0)
    }
/**
      * Read  sensor.
      *
      * @param  ADC to read.
      */
    //% blockId="iBit_ReadADC" block="read ADC %path"
    //% weight=80
    export function readSensor(ch: Chadc8): number {    
        return ch;
    }
    
}
