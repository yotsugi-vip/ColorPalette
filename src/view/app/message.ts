interface vscode {
    postMessage(message: any): void;
}

// https://github.com/microsoft/vscode-cpptools/blob/master/Extension/ui/settings.ts#L54-L60
interface VsCodeApi {
    postMessage(msg: {}): void;
    setState(state: {}): void;
    getState(): {};
}
declare function acquireVsCodeApi(): VsCodeApi;

const vscode = acquireVsCodeApi();
export function messageSetting() {
    window.addEventListener('message', event => {
        const data = event.data;
        console.log(data.command);
        vscode.postMessage({command:'recieve!!'});
    });
}