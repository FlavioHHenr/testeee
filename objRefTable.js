const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch,
		C3.Plugins.Sprite,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.Text.Acts.SetHeight,
		C3.Plugins.Text.Exps.TextHeight,
		C3.Plugins.TextBox.Acts.SetText,
		C3.ScriptsInEvents.EventSheet1_Event2_Act9,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.TextBox.Cnds.IsFocused,
		C3.Plugins.TextBox.Acts.SetFocus
	];
};
self.C3_JsPropNameTable = [
	{UserInputBox: 0},
	{UserText: 0},
	{BotText: 0},
	{DebugTest: 0},
	{Keyboard: 0},
	{Touch: 0},
	{ButtonText: 0},
	{Button: 0},
	{UserInput: 0},
	{BotResponse: 0},
	{ResponseReceived: 0}
];

self.InstanceType = {
	UserInputBox: class extends self.ITextInputInstance {},
	UserText: class extends self.ITextInstance {},
	BotText: class extends self.ITextInstance {},
	DebugTest: class extends self.ITextInstance {},
	Keyboard: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	ButtonText: class extends self.ITextInstance {},
	Button: class extends self.ISpriteInstance {}
}