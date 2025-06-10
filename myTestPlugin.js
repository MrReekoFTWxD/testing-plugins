import { showNotification } from "@api/Notifications";

const plugin = {
    name: "MyTestPlugin",
    start() {
        console.log("MyTestPlugin started!");
         showNotification({
                title: "test",
                body: `plugin loaded!`,
                noPersist: true,
            });
    },
    stop() {
        console.log("MyTestPlugin stopped!");
         showNotification({
                title: "test",
                body: `plugin stopped!`,
                noPersist: true,
            });
    }
};

module.exports.default = plugin;
