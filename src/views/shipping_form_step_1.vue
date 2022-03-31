<template>
  <div class="">
    <b-navbar class="py-2" toggleable="lg" type="dark" variant="light">
      <b-container>
        <b-navbar-brand class="" to="/">
          <b-img src="/assets/logos/logo.png" height="30"></b-img>
        </b-navbar-brand>

        <b-link @click="$router.go(-1)">back</b-link>
      </b-container>
    </b-navbar>

    <b-container class="p-5 mt-4 section user-form">
      <div class="top-options">
        <h2>Step-1</h2>
      </div>

      <b-card class="user-from mb-4">
        <b-form-group label="User From">
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
              <gmap-autocomplete></gmap-autocomplete>
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
          </b-row>
        </b-form-group>
      </b-card>

      <b-card class="user-to mb-4">
        <b-form-group label="User To">
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

      <b-card class="dimensions mb-4">
        <b-form-group label="Dimensions">
          <b-row>
            <!-- <b-col lg="4" md="4" sm="6">
              <b-form-group label="Dimensions"> </b-form-group>
            </b-col> -->
            <b-col lg="3" md="3" sm="6">
              <b-form-group label="Length (in)" class="has-float-label">
                <b-form-input
                  v-model="length"
                  class="mb-2"
                  type="number"
                  min="0"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="3" md="3" sm="6">
              <b-form-group label="Width (in)" class="has-float-label">
                <b-form-input
                  v-model="width"
                  class="mb-2"
                  type="number"
                  min="0"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="3" md="3" sm="6">
              <b-form-group label="Height (in)" class="has-float-label">
                <b-form-input
                  v-model="height"
                  class="mb-2"
                  type="number"
                  min="0"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="3" md="3" sm="6">
              <b-form-group label="Weight (lbs)" class="has-float-label">
                <b-form-input
                  v-model="weight"
                  class="mb-2"
                  type="number"
                  min="0"
                ></b-form-input>
              </b-form-group>
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
import Vue from "vue";
import * as GmapVue from "gmap-vue";

const googleOptions = {
  load: {
    key: "AIzaSyBtmA2MsfljS60NA3c_ljiVXC5gvv8TIFg",
    v: "3.46",
    libraries: "places",
  },
  installComponents: true,
};
Vue.use(GmapVue, googleOptions);

export default {
  components: {
    "gmap-autocomplete": GmapVue.components.Autocomplete,
  },
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
      dimensions: {
        length: "",
        width: "",
        height: "",
        weight: "",
        decided_value: "",
      },
    };
  },
  computed: {
    getUserFrom() {
      try {
        const from =
          sessionStorage.getItem("user_from") != null
            ? JSON.parse(sessionStorage.getItem("from"))
            : null;
        return from;
      } catch (error) {
        console.log(">>>> src/utils/index.js : getCurrentUser -> error", error);
        return null;
      }
    },
    getUserTo() {
      try {
        const from =
          sessionStorage.getItem("user_to") != null
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
        sessionStorage.setItem("user_from", JSON.stringify(this.from));
        sessionStorage.setItem("user_to", JSON.stringify(this.to));
        sessionStorage.setItem("dimensions", JSON.stringify(this.dimensions));

        this.$router.push("/shipping/step-2");
      } catch (error) {
        console.log("saveDataOnSessionStorage -> error", error);
      }
    },
  },
  mounted() {},
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