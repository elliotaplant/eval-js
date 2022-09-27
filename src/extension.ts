// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('eval-js.eval', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		const selections = editor.selections;

		try {
			const results = selections.map(selection => eval(editor.document.getText(selection)).toString());
			editor.edit(editBuilder => {
				selections.forEach((selection, i) => editBuilder.replace(selection, results[i]));
			});
		} catch (e: any) {
		 vscode.window.showErrorMessage(e.toString());
		}
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
