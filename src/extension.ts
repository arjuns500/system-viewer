// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { platform } from "os";
import { exec } from "child_process";

export function activate(context: vscode.ExtensionContext) {
    /**
     * Main command
     * 
     * This command shows in the command palette.
     */
    let openWithSystemDisposable =
        vscode.commands.registerCommand('system-viewer.openInSystemViewer', () => {
            if (vscode.window.activeTextEditor) {
                switch (platform()) {
                    case 'win32':
                        exec(`start ${vscode.window.activeTextEditor.document.fileName}`, (err) => {
                            if (err) vscode.window.showErrorMessage(
                                `There was an error:\n\n${err}`,
                                { modal: true }
                            );
                        })
                        break;

                    case 'darwin':
                        exec(`open ${vscode.window.activeTextEditor.document.fileName}`, (err) => {
                            if (err) vscode.window.showErrorMessage(
                                `There was an error:\n\n${err}`,
                                { modal: true }
                            );
                        })
                        break;

                    case 'linux':
                        exec(`open ${vscode.window.activeTextEditor.document.fileName}`, (err) => {
                            if (err) vscode.window.showErrorMessage(
                                `There was an error:\n\n${err}`,
                                { modal: true }
                            );
                        })
                        break;
                }
            }
        });

    context.subscriptions.push(openWithSystemDisposable);
    context.subscriptions.push(
        /**
         * This command is used in the navigator
         * It is also hidden from the command palette
         */
        vscode.commands.registerCommand(
            'system-viewer.openFileInNavigator', (uri: vscode.Uri) => {
                // Switch between the result of `os.platform`
                switch (platform()) {
                    case 'win32':
                        exec(`start ${uri.fsPath}`, (err) => {
                            if (err) vscode.window.showErrorMessage(
                                `There was an error:\n\n${err}`,
                                { modal: true }
                            );
                        })
                        break;

                    case 'darwin':
                        exec(`open ${uri.fsPath}`, (err) => {
                            if (err) vscode.window.showErrorMessage(
                                `There was an error:\n\n${err}`,
                                { modal: true }
                            );
                        })
                        break;

                    case 'linux':
                        exec(`open ${uri.fsPath}`, (err) => {
                            if (err) vscode.window.showErrorMessage(
                                `There was an error:\n\n${err}`,
                                { modal: true }
                            );
                        })
                        break;
                }
            }
        )
    );
}

export function deactivate() { }
