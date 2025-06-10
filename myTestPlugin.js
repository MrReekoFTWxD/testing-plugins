const plugin = {
    name: "MyPlugin",
    start() {
        console.log("MyPlugin started!");
        BdApi?.showToast?.("MyPlugin loaded", { type: "success" });
    },
    stop() {
        console.log("MyPlugin stopped!");
        BdApi?.showToast?.("MyPlugin unloaded", { type: "info" });
    }
};

module.exports.default = plugin;
