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

goog.provide('Blockly.Arduino.servo');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['servo_write'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
      block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var servoName = 'myServo' + pinKey;

  Blockly.Arduino.reservePin(
      block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  let setupCode;
  let code;
  // the standard servo lib doesn't work with the ESP32
  if(Blockly.Arduino.Boards.selected.compilerFlag == 'esp32:esp32:esp32'){
    Blockly.Arduino.addInclude('servo', '#include <ESP32Servo.h>');
  
    setupCode =
        servoName + '.setPeriodHertz(50);\n  ' +
        servoName + '.attach(' + pinKey + ', 500, 2500);';
  
    code = servoName + '.write(' + servoAngle + ');\n';
  }else{
    Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
    setupCode = servoName + '.attach(' + pinKey + ');';
    code = servoName + '.write(' + servoAngle + ');\n';
  }

  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);
  return code;
};

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['servo_read'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoName = 'myServo' + pinKey;

  Blockly.Arduino.reservePin(
      block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Read');

  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  let setupCode;
  let code;
  // the standard servo lib doesn't work with the ESP32
  if(Blockly.Arduino.Boards.selected.compilerFlag == 'esp32:esp32:esp32'){
    Blockly.Arduino.addInclude('servo', '#include <ESP32Servo.h>');
  
    setupCode =
        servoName + '.setPeriodHertz(50);\n  ' +
        servoName + '.attach(' + pinKey + ', 500, 2500);';
  
    code = servoName + '.read()';
  }else{
    Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
    setupCode = servoName + '.attach(' + pinKey + ');';
    code = servoName + '.read()';
  }

  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
