// utils
import { startDiscoveryServer } from "./discoveryServer";
import { startLoginServer } from "./loginServer";

// fast-refresh debugging purposes
setTimeout(() => {
    startDiscoveryServer();
    startLoginServer();
}, 400);
