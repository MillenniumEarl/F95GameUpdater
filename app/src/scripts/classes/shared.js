"use strict";

// Core modules
const {
    join
} = require("path");

// Public modules from npm
const {
    app
} = require("electron");

/**
 * Class containing variables shared between modules.
 */
class Shared {
    //#region Private static properties
    /**
     * Base directory where to save the application cache.
     * @type String
     */
    static #_cacheDir = join(app.getPath("userData"), "appcache");
    /**
     * Name of the directory containing the preview of the games.
     * @type String
     */
    static #_previewDirName = "preview";
    /**
     * Name of the directory containing the exported game saves.
     * @type String
     */
    static #_exportedGameSavesDirName = "gamesaves";
    /**
     * Name of the file to save the credentials for accessing the F95Zone portal.
     * @type String
     */
    static #_credentialsName = "credentials.json";
    /**
     * Name of the database containing the data of the games.
     * @type String
     */
    static #_gameDbName = "games.db";
    /**
     * Name of the database containing the data of the threads.
     * @type String
     */
    static #_threadDbName = "threads.db";
    /**
     * Name of the database containing the data of the game updates.
     * @type String
     */
    static #_updateDbName = "updates.db";
    //#endregion Private static properties

    //#region Getters
    /**
     * Base directory where to save the application cache.
     * @returns {String}
     */
    static get cacheDir() {
        return this.#_cacheDir;
    }
    /**
     * Path to directory containing the preview of the games.
     * @returns {String}
     */
    static get previewDir() {
        return join(this.#_cacheDir, this.#_previewDirName);
    }
    /**
     * Path to directory containing the exported game saves.
     * @returns {String}
     */
    static get exportedGameSavesDirName() {
        return join(this.#_cacheDir, this.#_exportedGameSavesDirName);
    }
    /**
     * Path to file containing the credentials for accessing the F95Zone portal.
     * @returns {String}
     */
    static get credentialsPath() {
        return join(this.#_cacheDir, this.#_credentialsName);
    }

    /**
     * Path to database containing the data of the games.
     * @returns {String}
     */
    static get gameDbPath() {
        return join(this.#_cacheDir, this.#_gameDbName);
    }

    /**
     * Path to database containing the data of the threads.
     * @returns {String}
     */
    static get threadDbPath() {
        return join(this.#_cacheDir, this.#_threadDbName);
    }

    /**
     * Path to database containing the data of the game updates.
     * @returns {String}
     */
    static get updateDbPath() {
        return join(this.#_cacheDir, this.#_updateDbName);
    }
    //#endregion Getters

    //#region Setters
    static set cacheDir(val) {
        this.#_cacheDir = val;
    }
    //#endregion Setters
}

module.exports = Shared;
