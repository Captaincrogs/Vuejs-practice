const app = Vue.createApp({
      data() {
        return {
          counter: 0,
          name: '',
          phone: '',
          email: '',
          articleObj: null,
          isResult: false,
          searchQuery: '',
          api: 'https://jsonplaceholder.typicode.com/users',
        };
      },
      computed: {
        //show real time name from api data
        filteredArticles() {
          return this.articleObj.filter(article => {
            return article.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          });
        },

      },
      ready: function() {
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
          fetch(this.api)
            .then(response => response.json())
            .then(json => console.log(json));
        },
        methods: {
          removeSearchQuery: function() {
            this.searchQuery = '';
            this.isResult = false;
          },
          submitSearch: function() {
            if (this.searchQuery.length > 0) {
              fetch(this.api)
                .then(response => response.json())
                .then(json => {
                  json.forEach(function(user) {
                    if (user.name.toLowerCase() === this.searchQuery.toLowerCase()) {
                      this.articleObj = user;
                      this.isResult = true;
                    }
                  }.bind(this));
                });
            }
          }
        }
      }
    }
  );
app.mount('#events');