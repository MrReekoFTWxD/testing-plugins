export default {
    name: "MyTestPlugin",
    start() {
        console.log("MyTestPlugin started!");
        BdApi?.showToast?.("MyTestPlugin loaded!", { type: "success" });
    },
    stop() {
        console.log("MyTestPlugin stopped!");
        BdApi?.showToast?.("MyTestPlugin unloaded.", { type: "info" });
    }
};
