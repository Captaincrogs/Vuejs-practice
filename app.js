const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    updateName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    sub(num) {
      this.counter = this.counter - num;
    },

    saveData() {
      localStorage.setItem('name', this.name);
      localStorage.setItem('phone', this.phone);
      localStorage.setItem('email', this.email);
      localStorage.setItem('counter', this.counter);
      // 10 minuten in local storage
      localStorage.setItem('expires', Date.now() + 10000);


    },
    getData() {
      localStorage.setItem('name', this.name);
      localStorage.setItem('phone', this.phone);
      localStorage.setItem('email', this.email);
      localStorage.setItem('counter', this.counter);
      console.log(new Date(localStorage.getItem('expires')));


    },
    userData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json));
    },




  

  }
});
app.mount('#events');