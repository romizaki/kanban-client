new Vue({
    el:'#app',
    data: {
        currentPage: 'login',
        name: '',
        email: '',
        password: '',
        tasks: ''
    },
    methods: {
        login () {
            axios
            .post(`http://localhost:3000/login`, {
                email: this.email,
                password: this.password
            })
            .then(({data}) => {
                this.email = ''
                this.password = ''
                this.currentPage = 'home'
                localStorage.setItem('access_token', data.access_token)
            })
            .catch(err => {
                this.name = ''
                this.email = ''
                this.password = ''
                this.currentPage = 'register'
                console.log(err);
            })
        },

        register() {
            axios
            .post(`http://localhost:3000/register`, {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(({data}) => {
                this.name = ''
                this.email = ''
                this.password = ''
                this.currentPage = 'login'
                localStorage.setItem('access_token', data.access_token)
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
})