import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export interface IConfig {
    name: string;
    description: string;
    users: IUser[];
}
export interface IUser {
    name: string;
    active: boolean;
    roles: string[];
}

export default class ViewLoader {
    private readonly _panel: vscode.WebviewPanel | undefined;
    private readonly _extensionUri: vscode.Uri;

    constructor(fileUri: vscode.Uri) {
        this._extensionUri = fileUri;
        this._panel = vscode.window.createWebviewPanel(
            "colorPalette",
            "Color Palette",
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [
                    vscode.Uri.joinPath(this._extensionUri, 'Viewer')
                ]
            }
        );
        this._panel.webview.html = this.getBaseContent();
    }

    private getBaseContent(): string {
        const reactAppPath = vscode.Uri.joinPath(this._extensionUri, 'Viewer', 'bundle.js');
        const reactAppPathUri = this._panel?.webview.asWebviewUri(reactAppPath);
        return `<!DOCTYPE html>
	                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Cat Coding</title>
                    </head>
                    <body>
                        <div id="root"></div>
                        <script src="${reactAppPathUri}"></script>
                    </body>
                </html>`;
    }

}