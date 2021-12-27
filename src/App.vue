<template>
  <div class="container" id="app">
    <router-view @changeState="setState" @deleteItem="removeItem" />
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  data() {
    return {
      student_id: "",
      password: "",
      categories: {},
      cart: [],
      cartItems: 0,
      borrower: {
        student_id: "",
        firstName: "",
        lastName: "",
        borrower_id: "",
        dc_email: "",
        other_email: "",
        program: "",
        program_year: "",
        password_old:"",
        password_new:"",
      },
      assets:[],
      loggedItems: [],
      };
  },
  methods: {
    removeItem(index) {
      this.cart.splice(index, 1);
      this.getAssets(this.borrower.student_id);
      this.cartItems--;
      
    },
    setState(e) {
      switch (e.state) {
        case "login":
          console.log("got login");
          this.getLogin(e.student_id, e.password);
          break;
        case "create":
          this.$router.push("CreateAccount");
          break;
        case "toMain":
          this.$router.push("Home");
          break;
        case "toCart":
          this.$router.push("Cart");
          break;
        case "toReserve":
          this.addAssetsLoggedOut();
          break;
        case "update":
          this.updateProfile(e.borrower.firstName,e.borrower.lastName,e.borrower.other_email,e.borrower.password_old,e.borrower.password_new);
          break;
        case "toSignIn":
          alert("toSignIn123");
          this.$router.push("SignIn");
          break;
        case "addToCart":
          this.cart.push(e.asset);
          this.cartItems = this.cart.length;
          break;
        case "toHome":
        this.$router.push("Home"); 
        this.getAssets(this.borrower.student_id);
        break;
        default:
          alert(e.state);
          break;
      }
    },
    updateProfile(firstName,lastName,other_email,password_old,password_new) {
      const options = {
        url:
          "https://dca.durhamcollege.ca/~jaideep/signout/services/update_borrower.php",
        method: "POST",
        data:{
          last_name:lastName,
          first_name:firstName,
          student_id:this.borrower.student_id,
          other_email:other_email,
          password_old:password_old,
          password_new:password_new

        }
      };
      this.$axios(options)
        .then((res) => {
          switch (res.data.error.id) {
            case 0:
              this.borrower.firstName = firstName; 
              this.borrower.lastName = lastName; 
              this.borrower.other_email = other_email; 
              this.$router.push("Profile");
              break;
            default:
              alert("Something went wrong with reserving your items.");
              break;
          }
        })
        .catch((err) => {
          console.error("Get Assets Failed." + err);
        });
    },
    addAssetsLoggedOut() {
      let asset_list = "";
      this.cart.forEach(function(item) {
        if (asset_list == "") {
          asset_list = item.asset_description;
        } else {
          asset_list += "|" + item.asset_description;
        }
      });
      
      const options = {
        url:
          "https://dca.durhamcollege.ca/~gubalaraymond/signout/services/add_assets_logged_out.php",
        method: "POST",
        data: {
          student_id: this.borrower.borrower_id,
          assets: asset_list,
        },
      };
      this.$axios(options)
        .then((res) => {
          switch (res.data.error.id) {
            case 0:
              this.$router.push('Reserve');
              this.assets = asset_list;
              console.log(this.assets);
              console.log("assets logout")
              break;
            default:
              alert("Something went wrong with reserving your items.");
              break;
          }
        })
        .catch((err) => {
          console.error("Get Assets Failed." + err);
        });
    },
    getAssets(borrower_id) {
      const options = {
        url:
          "https://dca.durhamcollege.ca/~gubalaraymond/signout/services/get_assets.php",
        method: "POST",
        data: {
          student_id: borrower_id,
        },
      };
      this.$axios(options)
        .then((res) => {
          switch (res.data.error.id) {
            case 0:
              this.categories = res.data.categories;
              this.cart = [];
              this.cartItems = 0;
              console.log(this.categories);
              break;
            default:
              alert("Something went wrong please try again.");
              break;
          }
        })
        .catch((err) => {
          console.error("Get Assets Failed." + err);
        });
    },
    getLogin(student_id, password) {
      const options = {
        url:
          "https://dca.durhamcollege.ca/~jaideep/signout/services/login.php",
        method: "POST",
        data: {
          student_id: student_id,
          password: password,
        },
      };
      this.$axios(options)
        .then((res) => {
          switch (res.data.error.id) {
            case 0:
              this.borrower.firstName = res.data.borrower.first_name;
              this.borrower.firstName = res.data.borrower.first_name;
              this.borrower.lastName = res.data.borrower.last_name;
              this.borrower.borrower_id = res.data.borrower.borrower_id;
              this.borrower.dc_email = res.data.borrower.dc_email;
              this.borrower.student_id = res.data.borrower.student_id;
              this.borrower.other_email = res.data.borrower.other_email;
              this.borrower.program = res.data.borrower.program_name;
              this.borrower.program_year = res.data.borrower.program_year;
              console.log(this.borrower);
              this.getAssets(student_id);
              this.getAssetsLoggedOut(student_id);
              this.$router.push("Home");
              break;
            /* add other responses here */
            case 1:
              document.getElementById("loginCheck").innerHTML= "No Student ID or Password were entered";
              break;
            default:
              document.getElementById("loginCheck").innerHTML= "Student ID or Password Incorrect";
              break;
          }
        })
        .catch((err) => {
          console.error("Login failed." + err);
        });
    },
    getAssetsLoggedOut(borrower_id) {
      console.log(borrower_id);
      const options = {
        url:
          "https://dca.durhamcollege.ca/~jaideep/signout/services/get_assets_logged_out.php",
        method: "POST",
        data: {
          student_id: borrower_id,
        },
      };

      this.$axios(options)
        .then((res) => {
          switch (res.data.error.id) {
            case 0:
              this.loggedItems = res.data.assets;
              console.log(this.loggedItems);
              break;
            /* add other responses here */
            default:
              alert("Something went wrong with reserving your items.");
              break;
          }
        })
        .catch((err) => {
          console.error("Get Assets Failed." + err);
        });
    },
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
