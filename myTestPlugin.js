const { showNotification } = Vencord.Webpack.findByProps("showNotification");

const plugin = {
    name: "MyTestPlugin",
    start() {
        console.log("Plugin started");
        showNotification?.({
            title: "Plugin Test",
            body: "Plugin loaded successfully",
            noPersist: true,
        });
    },
    stop() {
        console.log("Plugin stopped");
        showNotification?.({
            title: "Plugin Test",
            body: "Plugin stopped",
            noPersist: true,
        });
    }
};

module.exports.default = plugin;
