// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { platform } from "os";
import { exec } from "child_process";
import { error } from 'console';

export function activate(context: vscode.ExtensionContext) {
    console.log("ram");
    let openWithSystemDisposable = vscode.commands.registerCommand('system-viewer.openInSystemViewer', () => {
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
        vscode.commands.registerCommand(
            'system-viewer.openFileInNavigator', (uri: vscode.Uri) => {
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
