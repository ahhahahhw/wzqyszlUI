import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        userInfo: {
            username:''
        },
        socket: null,
        blog: {},
        containerStyle: {
            backgroundImage: ''
        }
    }),
    getters: {},
    actions: {},
    persist: {
        enabled: true,
        strategies: [
            {
                storage: sessionStorage,
                key: "wzqyszl"
            },
        ]
    },
})
