define("ToolsInterface", ["firebugModules/inProcess/browser.js", "firebugModules/inProcess/compilationunit.js"], function(Browser, CompilationUnit) {

Browser.onDebug = function()
{
    FBTrace.sysout.apply(FBTrace, arguments);
}

var ToolsInterface = {}

ToolsInterface.browser = new Browser();

ToolsInterface.Browser = Browser;
ToolsInterface.CompilationUnit = CompilationUnit;

return ToolsInterface;


});