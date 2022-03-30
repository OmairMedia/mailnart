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
      <div class="top-options mb-4">
        <h2>Step-2</h2>
      </div>

      <b-card class="ship-from mb-4">
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

      <b-button class="" @click="saveDataOnSessionStorage">Proceed</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      length: "",
      width: "",
      height: "",
      weight: "",
      decided_value: "",
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
        let dimensions = {
          length: this.length,
          width: this.width,
          height: this.height,
          weight: this.weight,
        };
        sessionStorage.setItem("dimensions", JSON.stringify(dimensions));

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