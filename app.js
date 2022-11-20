const app = Vue.createApp({
  data() {
    return {
      firstName: 'Abhi',
      lastName: 'Aher',
      email: 'abhi@gmail.com',
      gender: 'male',
      profileImage:
        'https://avatars.githubusercontent.com/u/84370735?s=400&u=72d2baedf3ae9cf29e397cceddb6e81eadbad781&v=4',
    }
  },

  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.profileImage = results[0].picture.large
    },
  },
})

app.mount('#app')
