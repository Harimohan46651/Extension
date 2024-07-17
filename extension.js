// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Harimohan!');
	});
	const disposable1 = vscode.commands.registerCommand('hi.hi', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('hi everyone from Harimohan!');
	});
	const valueReadFromJson = vscode.commands.registerCommand('read.readJsonValue', function () {
		// The code you place here will be executed every time your command is executed
		const jsonValue = require('./readJSON.js');

		// Display a message box to the user
		vscode.window.showInformationMessage(`hi everyone. Json Value is: ${jsonValue}`);
	});
	const valueReadFromJsonFile = vscode.commands.registerCommand('read.readJsonValueFromFile', function () {
		// The code you place here will be executed every time your command is executed
		const path = require('path')
		const filePath = path.join(__dirname, 'exampleJson.json')
		const { readJsonFromFile } = require('./readJsonFile.js');
		const jsonData = readJsonFromFile(filePath);
		console.log(`Json Data From File :${JSON.stringify(jsonData)}`);

		// Display a message box to the user
		vscode.window.showInformationMessage(`Json Value from file is: ${JSON.stringify(jsonData)}`);
	});

	context.subscriptions.push(disposable, disposable1, valueReadFromJson,valueReadFromJsonFile);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
