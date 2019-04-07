/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.touchSensor');

goog.require('Blockly.Arduino');

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['touch_sensor_read'] = function(block) {
    var pinKey = block.getFieldValue('TOUCH_PIN');
    var servoName = 'myServo' + pinKey;
  
    /*Blockly.Arduino.reservePin(
        block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Read');
  
    Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
    Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  
    var setupCode = servoName + '.attach(' + pinKey + ');';
    Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);*/
  
    var code = servoName + '.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
  