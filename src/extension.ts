import * as vscode from 'vscode';
import ViewLoader from './ViewLoader';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('colorpalette.openPalette', () => {
		let view = new ViewLoader(context.extensionUri, context.extensionPath);
	});
}

// これ?でjson保存
//https://code.visualstudio.com/api/references/contribution-points#contributes.configuration
// this method is called when your extension is deactivated
export function deactivate() { }