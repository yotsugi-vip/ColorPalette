import * as vscode from 'vscode';

export default class ViewLoader {
    private readonly _panel: vscode.WebviewPanel | undefined;
    private readonly _extensionUri: vscode.Uri;
    private readonly _config: vscode.WorkspaceConfiguration;

    constructor(fileUri: vscode.Uri) {
        this._config = vscode.workspace.getConfiguration('colorPalette');
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

        let colors = this._config.get('favoriteColors');
        console.log(colors);
        this._panel?.webview.postMessage({ command: 'INITIALIZE', data: colors });

        this._panel.webview.onDidReceiveMessage(message => {
            console.log(message);
            switch (message.command) {
                case 'loadJson':
                    let colors = this._config.get('favoriteColors');
                    this._panel?.webview.postMessage({ command: 'loadJson', data: colors });
                    break;
                case 'saveJson':
                    this._config.update('favoriteColors', message.data, true);
                    break;
                case 'clip':
                    vscode.env.clipboard.writeText(`#${message.data}`).then(() => {
                        vscode.window.showInformationMessage(`Copy: #${message.data}`);
                    });
                    break;
                default:
                    vscode.window.showErrorMessage('get undifined command : ' + message);
                    break;
            }
        });
    }

    private getBaseContent(): string {
        const reactAppPath = vscode.Uri.joinPath(this._extensionUri, 'Viewer', 'bundle.js');
        const reactAppPathUri = this._panel?.webview.asWebviewUri(reactAppPath);
        return `<!DOCTYPE html>
	                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>color palette</title>
                    </head>
                    <body>
                        <div id="root"></div>
                        <script src="${reactAppPathUri}"></script>
                    </body>
                </html>`;
    }

}