
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="高速"
    true,
    //% block="低速"
    false 
}
enum GT {
    //% block="向右挥手"
    Right,
    //% block="向左挥手"
    Left，
    //% block="向上挥手"
    Up，
    //% block="向下挥手"
    Down，
    //% block="靠近挥手"
    Forward，
    //% block="远离挥手"
    Backward，
    //% block=" 顺时针挥手 "
    Clockwise，
    //% block="逆时针挥手"
    AntiClockwise，
    //% block="快速挥手"
    Wave，
    //% block="低速混乱挥手"
    WaveSlowlyDisorder，
    //% block="低速从左往右"
    WaveSlowlyLeftRight，
    //% block="低速从上往下"
    WaveSlowlyUpDown，
    //% block="低速靠近再远离"
    WaveSlowlyForwardBackward
    
}

//% color="#AA278D" iconWidth=50 iconHeight=40
namespace  PAJ7620U2_Gesture_Sensor {

    //% block="设置PAJ7620U2手势传感器[MODEL]模式" blockType="command"
    //% MODEL.shadow="dropdown" MODEL.options="BTN" MODEL.defl="BTN.true"
    export function  set_Gesture_Rate(parameter: any, block: any) {
        let model = parameter.MODEL.code;
        Generator.addInclude('DFRobot_PAJ7620U2.h', '#include <DFRobot_PAJ7620U2.h>');
        Generator.addObject(`DFRobot_PAJ7620U2`, `DFRobot_PAJ7620U2`, `paj;`);
        Generator.addSetup(`PAJ7620U2.begin`, `paj.begin();`);
        Generator.addCode(`paj.setGestureHighRate(${model});`);
    }

    //% block="PAJ7620U2手势传感器[GESTURE]被触发" blockType="boolean"
    //% GESTURE.shadow="dropdown" GESTURE.options="GT" GESTURE.defl="GT.Right"
    export function  get_Gesture(parameter: any, block: any) {
        let gest = parameter.GESTURE.code;
        Generator.addCode(`(paj.gestureDescription(paj.getGesture())=="${gest}" )`);
    }

    //% block="当前手势" blockType="reporter"
    export function  return_Gesture(parameter: any, block: any) {
        
        Generator.addCode(`paj.gestureDescription(paj.getGesture() )`);
    }

    //% block="打印当前手势" blockType="command"
    export function  print_Gesture(parameter: any, block: any) {
        
        Generator.addCode(` DFRobot_PAJ7620U2::eGesture_t gesture = paj.getGesture();
        if(gesture != paj.eGestureNone ){
          String description  = paj.gestureDescription(gesture); 
          Serial.println("--------------Gesture Recognition System---------------------------");
          Serial.print("gesture code        = ");Serial.println(gesture);
          Serial.print("gesture description  = ");Serial.println(description);
          Serial.println();}`);
    }

    
}
