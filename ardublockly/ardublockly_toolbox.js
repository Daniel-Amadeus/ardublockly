/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE" colour="25"></category>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic" colour="50">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops" colour="75">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math" colour="100">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map">' +
'      <value name="IN_MIN">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="IN_MAX">' +
'        <block type="math_number">' +
'          <field name="NUM">1023</field>' +
'        </block>' +
'      </value>' +
'      <value name="OUT_MIN">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="OUT_MAX">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text" colour="125">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables" colour="150">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time" colour="175">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'    <block type="time_set_via_wifi"></block>' +
'    <block type="time_get_date_time"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Pins" colour="200">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio" colour="225">' +
'    <block type="io_tone">' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors" colour="250">' +
'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_read"></block>' +
'    <block type="stepper_config">' +
'      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
'      <field name="STEPPER_PIN1">1</field>' +
'      <field name="STEPPER_PIN2">2</field>' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="stepper_step">' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category id="catLeds" name="Light" colour="275">' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="neopixel_settings">' +
'      <value name="NEOPIXEL_COUNT">' +
'        <block type="math_number">' +
'          <field name="NUM">30</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="neopixel_set_rgb">' +
'      <value name="NEOPIXEL_LED">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="NEOPIXEL_RED">' +
'        <block type="math_number">' +
'          <field name="NUM">127</field>' +
'        </block>' +
'      </value>' +
'      <value name="NEOPIXEL_GREEN">' +
'        <block type="math_number">' +
'          <field name="NUM">127</field>' +
'        </block>' +
'      </value>' +
'      <value name="NEOPIXEL_BLUE">' +
'        <block type="math_number">' +
'          <field name="NUM">127</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="neopixel_set_hsv">' +
'      <value name="NEOPIXEL_LED">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="NEOPIXEL_HUE">' +
'        <block type="math_number">' +
'          <field name="NUM">65535</field>' +
'        </block>' +
'      </value>' +
'      <value name="NEOPIXEL_SAT">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'      <value name="NEOPIXEL_VAL">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="neopixel_show"></block>' +
'  </category>' +
'  <category id="catSensors" name="Sensors" colour="300">' +
'    <block type="touch_sensor_read"></block>' +
'    <block type="touch_sensor_touch_detected"></block>' +
'    <block type="ds18b20_config">' +
'    </block>' +
'    <block type="ds18b20_measure">' +
'    </block>' +
'    <block type="ds18b20_get_temp">' +
'    </block>' +
'    <block type="ir_check"></block>' +
'    <block type="ir_result"></block>' +
'    <block type="hall_read"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catComms" name="Communication" colour="325">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="spi_setup"></block>' +
'    <block type="spi_transfer"></block>' +
'    <block type="spi_transfer_return"></block>' +
'    <block type="wifi_connect">' +
'      <value name="SSID">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="PASSWORD">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="thing_speak_send_field">' +
'      <value name="THINGSPEAK_KEY">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="THINGSPEAK_CHANNEL">' +
'        <block type="math_number"></block>' +
'      </value>' +
'      <value name="THINGSPEAK_FIELD">' +
'        <block type="math_number"></block>' +
'      </value>' +
'      <value name="THINGSPEAK_VALUE">' +
'        <block type="math_number"></block>' +
'      </value>' +
'    </block>' +
'    <block type="ifttt_webhooks_settings">' +
'      <value name="API_KEY">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="NAME">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="ifttt_webhooks_trigger"></block>' +
'    <block type="ifttt_webhooks_trigger_message">' +
'      <value name="MESSAGE_1">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="MESSAGE_2">' +
'        <block type="text"></block>' +
'      </value>' +
'      <value name="MESSAGE_3">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'</xml>';
