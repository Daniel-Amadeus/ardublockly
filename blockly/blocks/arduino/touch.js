/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the touch sensors of the ESP32.
 */
'use strict';

goog.provide('Blockly.Blocks.touchSensor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.touchSensor.HUE = 300;

Blockly.Blocks['touch_sensor_read'] = {
/**
   * Block for reading the touch value of a touch sensor pin of an esp32.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.touchSensor.HUE);
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_TOUCH_READ_TIP);
    if(!Blockly.Arduino.Boards.selected.touchPins){
        this.appendDummyInput('INPUT')
            .appendField(Blockly.Msg.ARD_TOUCH_WARN + ' (' + Blockly.Arduino.Boards.selected.name + ')', 'MSG');
        return;
    }
    this.appendDummyInput('INPUT')
        .appendField(Blockly.Msg.ARD_TOUCH_READ_MSG, 'MSG')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.touchPins), 'TOUCH_PIN');
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    let pinInputExists = this.getFieldValue('TOUCH_PIN');
    if(Blockly.Arduino.Boards.selected.touchPins){
      if(pinInputExists) {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'TOUCH_PIN', 'touchPins');
      } else {
        this.getInput('INPUT').removeField('MSG');
        this.getInput('INPUT')
            .appendField(Blockly.Msg.ARD_TOUCH_READ_MSG, 'MSG')
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.touchPins), 'TOUCH_PIN');
      }
    } else {
      if(pinInputExists) {
        this.getInput('INPUT').removeField('MSG');
        this.getInput('INPUT').removeField('TOUCH_PIN');
        this.getInput('INPUT')
            .appendField(Blockly.Msg.ARD_TOUCH_WARN + ' (' + Blockly.Arduino.Boards.selected.name + ')', 'MSG')
      }
    }
  }
}

Blockly.Blocks['touch_sensor_touch_detected'] = {
/**
   * Block for checking if a touch sensor got touched on an esp32.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.touchSensor.HUE);
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_TOUCH_WAS_TOUCHED_TIP);
    if(!Blockly.Arduino.Boards.selected.touchPins){
        this.appendDummyInput('INPUT')
            .appendField(Blockly.Msg.ARD_TOUCH_WARN + ' (' + Blockly.Arduino.Boards.selected.name + ')', 'MSG');
        return;
    }
    this.appendDummyInput('INPUT')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.touchPins), 'TOUCH_PIN')
        .appendField(Blockly.Msg.ARD_TOUCH_WAS_TOUCHED_MSG, 'MSG');
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    let pinInputExists = this.getFieldValue('TOUCH_PIN');
    if(Blockly.Arduino.Boards.selected.touchPins){
      if(pinInputExists) {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'TOUCH_PIN', 'touchPins');
      } else {
        this.getInput('INPUT').removeField('MSG');
        this.getInput('INPUT')
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.touchPins), 'TOUCH_PIN')
            .appendField(Blockly.Msg.ARD_TOUCH_WAS_TOUCHED_MSG, 'MSG');
      }
    } else {
      if(pinInputExists) {
        this.getInput('INPUT').removeField('MSG');
        this.getInput('INPUT').removeField('TOUCH_PIN');
        this.getInput('INPUT')
            .appendField(Blockly.Msg.ARD_TOUCH_WARN + ' (' + Blockly.Arduino.Boards.selected.name + ')', 'MSG')
      }
    }
  }
}