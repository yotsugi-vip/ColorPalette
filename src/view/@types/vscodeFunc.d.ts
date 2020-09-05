// https://github.com/microsoft/vscode-cpptools/blob/master/Extension/ui/settings.ts#L54-L60
interface VsCodeApi {
    postMessage(msg: {}): void;
    setState(state: {}): void;
    getState(): {};
}

declare function acquireVsCodeApi(): VsCodeApi;
