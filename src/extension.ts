// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('eval-js.eval', () => {
		vscode.window.showInformationMessage('Hello World from eval-js!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
