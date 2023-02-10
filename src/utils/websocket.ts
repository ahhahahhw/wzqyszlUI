import {useStore} from "@/store";
import {wsUrl} from "@/env-config";

let store: any = useStore()


let setIntervalWebsocketPush: any = null

const sendPing = (time = 30 * 1000, ping = 'ping') => {
    if (setIntervalWebsocketPush) {
        clearInterval(setIntervalWebsocketPush)
    }
    setIntervalWebsocketPush = setInterval(() => {
        if (store.socket && store.socket.readyState === 1) {
            store.socket.send(ping)
        }
    }, time)
}

const initWebsocket = () => {
    store.socket = new WebSocket(wsUrl + "/ws", store.userInfo.token);
    sendPing()
}

export default initWebsocket