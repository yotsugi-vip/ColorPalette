import * as vscode from 'vscode';
import ViewLoader from './ViewLoader';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('colorpalette.openPalette', () => {
		let view = new ViewLoader(context.extensionUri, context.extensionPath);
	});
}

export function deactivate() { }