<template>
  <div class="">
    <b-navbar class="py-2" toggleable="lg" type="dark" variant="light">
      <b-container>
        <b-navbar-brand class="" to="/">
          <b-img src="/assets/logos/logo.png" fluid></b-img>
        </b-navbar-brand>
      </b-container>
    </b-navbar>

    <b-container class="p-5 mt-4 section shipping-form">
      <div class="top-options">
        <h2>Step-4 (FED-Ex Shipping Methods)</h2>
      </div>

      <b-card class="ship-from mb-4">
        <b-form-group label="Shipping Methods" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            v-for="(method, index) in shippingMethods"
            :key="index"
            :name="method.name"
            :value="method.name"
            >{{ method.name }} - $ {{ method.price }}</b-form-radio
          >
        </b-form-group>
      </b-card>

      <b-button @click="saveDataOnSessionStorage">Proceed</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: "",
      shippingMethods: [
        {
          name: "Ground Service",
          price: "10",
        },
        {
          name: "Express 3 Day",
          price: "20",
        },
        {
          name: "Express 2 Day",
          price: "30",
        },
        {
          name: "Express Overnight",
          price: "40",
        },
      ],
    };
  },
  computed: {
    getShippingFrom() {
      try {
        const from =
          sessionStorage.getItem("from") != null
            ? JSON.parse(sessionStorage.getItem("from"))
            : null;
        return from;
      } catch (error) {
        console.log(">>>> src/utils/index.js : getCurrentUser -> error", error);
        return null;
      }
    },
    getShippingTo() {
      try {
        const from =
          sessionStorage.getItem("to") != null
            ? JSON.parse(sessionStorage.getItem("to"))
            : null;
        return from;
      } catch (error) {
        console.log(">>>> src/utils/index.js : getCurrentUser -> error", error);
        return null;
      }
    },
  },
  methods: {
    saveDataOnSessionStorage() {
      try {
        sessionStorage.setItem("from", JSON.stringify(this.from));
        sessionStorage.setItem("to", JSON.stringify(this.to));

        this.$router.push("/shipping/step-5");
      } catch (error) {
        console.log("saveDataOnSessionStorage -> error", error);
      }
    },
  },
  mounted() {
    try {
      const user_from =
        sessionStorage.getItem("user_from") != null
          ? JSON.parse(sessionStorage.getItem("from"))
          : null;

      console.log("user_from -> ", user_from);
    } catch (error) {
      console.log("Step-2 Getting user from -> ", error);
      //   this.$router.push("/shipping/step-1");
    }
  },
  beforeDestroy() {},
};
</script>



<style scoped>
.top-options {
  width: 100%;
  display: flex;
  gap: 1rem;
}
</style>