export const state = () => ({
    auth: false,
    user: {},
})
export const mutations = {
    SET_AUTH(state, payload) {
        state.auth = true
        state.user = payload
        this.$axios.setToken('Bearer ' + payload.token)
    },
    CLEAR_AUTH(state) {
        state.auth = false
        state.user = {}
        this.$axios.setToken(false)
    }
}
export const actions = {
    async postLogin({ state, commit }, form) {
        const response = await this.$axios.$post('/auth/login', {
            email: form.email,
            password: form.password,
        }).catch(error => {
            console.log('ERROR', error)
        })
        if(response !== undefined && response.status === 1) commit('SET_AUTH', response.data)
        return response;
    },
    async postRegister({ state, commit }, form) {
        const response = await this.$axios.$post('/auth/register', {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
        }).catch(error => {
            console.log('ERROR', error)
        })
        return response;
    },
    async checkToken({ state, commit }) {
        const response = await this.$axios.$get('/me').catch(error => {
            console.log('ERROR', error)
        });
        console.log(response)
        return response;
    }
}