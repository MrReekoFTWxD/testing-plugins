import { showToast } from "@api/toasts";

const plugin = {
    name: "MyTestPlugin",
    start() {
        console.log("MyTestPlugin started!");
        showToast("Hello from plugin!", { type: "success" });
    },
    stop() {
        console.log("MyTestPlugin stopped!");
       showToast("Plugin stopped!", { type: "info" });
    }
};

module.exports.default = plugin;
