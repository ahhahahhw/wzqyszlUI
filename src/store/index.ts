import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        socket: null,
        blog: {},
        containerStyle: {
            backgroundImage:''
        }
    }),
    getters: {},
    actions: {},
    persist: {
        enabled: true,
        strategies: [
            {
                storage: sessionStorage,//localStorage存储多个key
                key: "wzqyszl"
            },
        ]
    },
})


