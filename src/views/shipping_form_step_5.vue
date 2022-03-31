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
        <h2>Step-2</h2>
      </div>

      <b-card class="ship-from mb-4">
        <b-form-group label="Ship From">
          <b-row>
            <b-col lg="4" md="4" sm="6">
              <b-form-input
                v-model="from.name"
                class="mb-2"
                type="text"
                placeholder="Name"
              ></b-form-input>
            </b-col>
            <b-col lg="4" md="4" sm="6">
              <b-form-input
                class="mb-2"
                v-model="from.email"
                type="text"
                placeholder="Email"
              ></b-form-input>
            </b-col>
            <b-col lg="4" md="4" sm="6">
              <b-form-input
                class="mb-2"
                v-model="from.phone"
                type="text"
                placeholder="Phone"
              ></b-form-input>
            </b-col>
            <b-col lg="6" md="6" sm="6">
              <b-form-input
                class="mb-2"
                v-model="from.address"
                type="text"
                placeholder="Address"
              ></b-form-input>
            </b-col>
            <b-col lg="6" md="6" sm="6">
              <b-form-input
                class="mb-2"
                v-model="from.zipcode"
                type="text"
                placeholder="Zip Code"
              ></b-form-input>
            </b-col>
            <b-col lg="12" md="12" sm="12"> </b-col>
          </b-row>
        </b-form-group>
      </b-card>

      <b-card class="ship-to mb-4">
        <b-form-group label="Ship To">
          <b-row>
            <b-col lg="4" md="4" sm="6">
              <b-form-input
                class="mb-2"
                v-model="to.name"
                type="text"
                placeholder="Name"
              ></b-form-input>
            </b-col>
            <b-col lg="4" md="4" sm="6">
              <b-form-input
                class="mb-2"
                v-model="to.email"
                type="text"
                placeholder="Email"
              ></b-form-input>
            </b-col>
            <b-col lg="4" md="4" sm="6">
              <b-form-input
                class="mb-2"
                v-model="to.phone"
                type="text"
                placeholder="Phone"
              ></b-form-input>
            </b-col>
            <b-col lg="6" md="6" sm="6">
              <b-form-input
                class="mb-2"
                v-model="to.address"
                type="text"
                placeholder="Address"
              ></b-form-input>
            </b-col>
            <b-col lg="6" md="6" sm="6">
              <b-form-input
                class="mb-2"
                v-model="to.zipcode"
                type="text"
                placeholder="Zip Code"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>

      <b-button class="float-right" @click="saveDataOnSessionStorage"
        >Proceed</b-button
      >
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      from: {
        name: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
      },
      to: {
        name: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
      },
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

        this.$router.push("/shipping/step-3");
      } catch (error) {
        console.log("saveDataOnSessionStorage -> error", error);
      }
    },
  },
  mounted() {
    try {
      const user_from =
        sessionStorage.getItem("user_from") != null
          ? JSON.parse(sessionStorage.getItem("user_from"))
          : null;

      const user_to =
        sessionStorage.getItem("user_to") != null
          ? JSON.parse(sessionStorage.getItem("user_to"))
          : null;

      const dimensions =
        sessionStorage.getItem("dimensions") != null
          ? JSON.parse(sessionStorage.getItem("user_to"))
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