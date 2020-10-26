Blockly.Blocks['square_area'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.square_area);
    this.appendValueInput("NAME1")
        .setCheck("Number")
        .appendField(Blockly.Msg.square_length);
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(Blockly.Msg.square_width);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['circle_area'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.circle_area);
    this.appendValueInput("NAME3")
        .setCheck("Number")
        .appendField(Blockly.Msg.circle_radius);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};