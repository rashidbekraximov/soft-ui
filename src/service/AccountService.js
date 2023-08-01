import axios from '../axios'
import store from '../store/index'

export default class AccountService {
    constructor(router) {
        this.router = router;
        this.init();
    }

    init() {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        if (!store.getters.account && !store.getters.logon && token !== null) {
            this.retrieveAccount()
        }
    }

    retrieveAccount() {
        store.commit("authenticated")
        axios
            .get("/account")
            .then(response => {
                const account = response.data;
                console.log(account)
                if (account) {
                    store.commit("authenticated", account);
                    if (sessionStorage.getItem("request-url")) {
                        this.router.replace(sessionStorage.getItem("request-url"));
                        sessionStorage.removeItem("request-url")
                        return true;
                    }
                } else {
                    store.commit("logout")
                    this.router.push("/")
                    sessionStorage.getItem("request-url")
                    sessionStorage.getItem("market-token")
                    return false;
                }
            })
            .catch(() => {
                store.commit("logout");
                this.router.push("/")
            })
    }

    hasAnyAuthority(authorities) {
        if (typeof authorities === 'string') {
            authorities = [authorities];
        }
        if (!authorities && !this.userAuthorities) {
            return false;
        }
        for (let i = 0; i < authorities.length; i++) {
            if (this.userAuthorities.include(authorities[i])) {
                return true;
            }
        }
        return false;
    }

    hasAnyAuthorityAndAuth() {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (typeof store.getters.account  == "undefined" && token) {
            console.log("Beram galdi")
            this.retrieveAccount()
        } else {
            return new Promise(resolve => {
                resolve(true)
            })
        }
    }

    get authenticated() {
        return store.getters.authenticated
    }

    get userAuthorities() {
        return store.getters.authorities
    }
}
