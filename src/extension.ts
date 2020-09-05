import * as vscode from 'vscode';
import ViewLoader from './ViewLoader';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('colorpalette.helloWorld', () => {
		let view = new ViewLoader(context.extensionUri);
	});
}

// this method is called when your extension is deactivated
export function deactivate() { }