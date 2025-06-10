const { showNotification } = Vencord.Webpack.findByProps("showNotification");

const plugin = {
    name: "MyTestPlugin",
    start() {
        console.log("Plugin started");
        alert("Plugin started");
    },
    stop() {
        console.log("Plugin stopped");
        alert("Plugin stopped");
    }
};

module.exports.default = plugin;
