// utils
import { startDiscoveryServer } from "./discoveryServer";
import { startTcpServer } from "./tcpServer";

// fast-refresh debugging purposes
setTimeout(() => {
    startDiscoveryServer();
    startTcpServer();
}, 400);
