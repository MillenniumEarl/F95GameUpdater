// For more information about secure use of IPC see:
// https://github.com/reZach/secure-electron-template/blob/master/docs/newtoelectron.md

"use strict";

// Core modules
const fs = require("fs");

// Public modules from npm
const { contextBridge, ipcRenderer } = require("electron");
const Store = require("secure-electron-store").default;

// Create the electron store to be made available in the renderer process
const store = new Store();

// Array of valid main-to-render channels
let validReceiveChannels = ["app-closing"];

// Array of valid render-to-main channels
let validSendChannels = ["app-close", "login-required"];

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("api", {
  store: store.preloadBindings(ipcRenderer, fs), // Acces to the IPC-based JSON store
  send: (channel, data) => { // Send a custom message
      // whitelist channels
      if (validSendChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      }
    },
    receive: (channel, func) => { // Receive a custom message
      if (validReceiveChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender` 
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    }
});
