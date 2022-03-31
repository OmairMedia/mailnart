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

    <b-container class="p-5 mt-4 section shipping-form">
      <div class="top-options">
        <h2>Step-2</h2>
      </div>

      <b-row>
        <b-col lg="8" md="8" sm="12">
          <b-card>
            <p class="p-0 m-0">STAGE 1 - SHIPPING</p>

            <div class="ship-form">
              <b-form-group label="Pickup Or Drop Off">
                <b-form-select
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>
              <label for="example-datepicker">Ship Date</label>
              <b-form-datepicker
                id="example-datepicker"
                v-model="ship_date"
                class="mb-2"
              ></b-form-datepicker>
              <b-form-group
                class="mt-4"
                label="Delivery"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  v-for="(method, index) in deliveryOptions"
                  :key="index"
                  :name="method.name"
                  :value="method.name"
                  >{{ method.name }} - $ {{ method.price }}</b-form-radio
                >
              </b-form-group>
              <p>
                *High shipment volumes, COVID-19 closures and weather events may
                delay delivery.
              </p>
            </div>
          </b-card>
        </b-col>
        <b-col lg="4" md="4" sm="12">
          <b-card title="Order Summary">
            <div class="top">
              <div class="shipping top-field">
                <p class="m-0 p-0">Shipping</p>
                <p class="m-0 p-0">$217.95</p>
              </div>
              <div class="duties top-field">
                <p class="m-0 p-0">Duties, Taxes & Fees</p>
                <p class="m-0 p-0">TBD</p>
              </div>
              <div class="protection top-field">
                <p class="m-0 p-0">Protection ($3,500)</p>
                <p class="m-0 p-0">$52.80</p>
              </div>
              <div class="one-time top-field">
                <p class="m-0 p-0">One-Time Pickup</p>
                <p class="m-0 p-0">$5.00</p>
              </div>
              <div class="subtotal top-field">
                <p class="m-0 p-0">Subtotal (USD)</p>
                <p class="m-0 p-0">$275.75</p>
              </div>
            </div>

            <div
              class="shipping-toggle mt-4"
              v-b-toggle.collapse-1
              variant="primary"
            >
              <p class="m-0 p-0">Shipping Details</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <b-collapse id="collapse-1" class="mt-2">
              <div v-if="getShippingFrom">
                <h6>Ship From:</h6>
                <p class="p-0 m-0">
                  {{ getShippingFrom.address || "Data Not Given" }}
                </p>
              </div>
              <div v-else>
                <p>Ship From : Data Not Given</p>
              </div>
              <div v-if="getShippingTo">
                <h6>Ship To:</h6>
                <p class="p-0 m-0">
                  {{ getShippingTo.address || "Data Not Given" }}
                </p>
              </div>
              <div v-else>
                <p>Ship To : Data Not Given</p>
              </div>

              <div v-if="getDimensions">
                <h4>Dimensions:</h4>
                <p class="p-0 m-0">
                  {{ getDimensions.length || "Data Not Given" }} x
                  {{ getDimensions.width || "Data Not Given" }} x
                  {{ getDimensions.height || "Data Not Given" }}
                  - {{ getDimensions.weight || "Data Not Given" }}
                </p>
              </div>

              <h4>Delivery:</h4>
              <p class="p-0 m-0">Mon Apr 4, 2022 -Thu Apr 7, 2022</p>
            </b-collapse>

            <b-button class="mt-4" block @click="saveDataOnSessionStorage"
              >Proceed</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      ship_date: "",
      deliveryOptions: [
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
            ? JSON.parse(sessionStorage.getItem("user_from"))
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
            ? JSON.parse(sessionStorage.getItem("user_to"))
            : null;
        return from;
      } catch (error) {
        console.log(">>>> src/utils/index.js : getCurrentUser -> error", error);
        return null;
      }
    },
    getDimensions() {
      try {
        const dimensions =
          sessionStorage.getItem("dimensions") != null
            ? JSON.parse(sessionStorage.getItem("dimensions"))
            : null;
        return dimensions;
      } catch (error) {
        console.log(" dimensions -> error", error);
        return null;
      }
    },
  },
  methods: {
    saveDataOnSessionStorage() {
      try {
        sessionStorage.setItem("from", JSON.stringify(this.from));
        sessionStorage.setItem("to", JSON.stringify(this.to));

        this.$router.push("/user/login");
      } catch (error) {
        console.log("saveDataOnSessionStorage -> error", error);
      }
    },
  },
  mounted() {
    try {
      const dimensions =
        sessionStorage.getItem("dimensions") != null
          ? JSON.parse(sessionStorage.getItem("dimensions"))
          : null;

      const from =
        sessionStorage.getItem("from") != null
          ? JSON.parse(sessionStorage.getItem("from"))
          : null;

      const to =
        sessionStorage.getItem("to") != null
          ? JSON.parse(sessionStorage.getItem("to"))
          : null;

      console.log("");
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

.top {
  border-bottom: 1px dotted #333;
  padding-bottom: 1rem;
}

.top-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shipping-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>