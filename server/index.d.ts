export declare class App {
    static readonly PORT: number;
    private app;
    private server;
    private io;
    socketClient: SocketIO.Server;
    constructor();
    private createApp;
    private createServer;
    private sockets;
    private listen;
}
export declare let app: App;
