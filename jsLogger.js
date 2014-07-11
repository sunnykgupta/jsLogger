window.console=(function(origConsole){

    if(!window.console)
      console = {};
    var isDebug=false,
    logArray = {
      logs: [],
      errors: [],
      warns: [],
      infos: []
    }
    return {
        log: function(){
          logArray.logs.push(arguments)
          isDebug && origConsole.log && origConsole.log.apply(origConsole,arguments);
        },
        warn: function(){
          logArray.warns.push(arguments)
          isDebug && origConsole.warn && origConsole.warn.apply(origConsole,arguments);
        },
        error: function(){
          logArray.errors.push(arguments)
          isDebug && origConsole.error && origConsole.error.apply(origConsole,arguments);
        },
        info: function(v){
          logArray.infos.push(arguments)
          isDebug && origConsole.info && origConsole.info.apply(origConsole,arguments);
        },
        debug: function(bool){
          isDebug = bool;
        },
        logArray: function(){
          return logArray;
        }
    };

}(window.console));
