window.console = (function (origConsole) {

    if (!window.console || !origConsole) {
        origConsole = {};
    }

    var isDebug = false, isSaveLog = false,
        logArray = {
            logs: [],
            errors: [],
            warns: [],
            infos: []
        };

    return {
        log: function () {
            this.addLog(arguments);
            isDebug && origConsole.log && origConsole.log.apply(origConsole, arguments);
        },
        warn: function () {
            this.addLog(arguments);
            isDebug && origConsole.warn && origConsole.warn.apply(origConsole, arguments);
        },
        error: function () {
            this.addLog(arguments);
            isDebug && origConsole.error && origConsole.error.apply(origConsole, arguments);
        },
        info: function (v) {
            this.addLog(arguments);
            isDebug && origConsole.info && origConsole.info.apply(origConsole, arguments);
        },
        debug: function (bool) {
            isDebug = bool;
        },
        saveLog: function (bool) {
            isSaveLog = bool;
        },
        addLog: function (arguments) {
            if (!isSaveLog) {
                return;
            }
            logArray.logs.push(arguments);
        },
        logArray: function () {
            return logArray;
        }
    };

}(window.console));
