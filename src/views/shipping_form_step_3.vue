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
        <h2>Step-3 (Payment)</h2>
      </div>

      <b-row>
        <b-col lg="8" md="8" sm="12">
          <b-card>
            <p class="p-0 m-0">STAGE 1 - SHIPPING</p>
            <p class="p-0 m-0">
              Bolton, ON Canada To Amarillo, TX United States
            </p>

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
              <b-form-group label="Delivery" v-slot="{ ariaDescribedby }">
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

            <b-button @click="saveDataOnSessionStorage">Proceed</b-button>
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
              <h4>Stage-1</h4>
              <p>
                Ship From: Amazon Fulfillment Centre YYZ7 12724 Coleraine Drive
                Bolton, ON L7E 3B1
              </p>
              <p>Ship To: Amarillo, TX 79118 Ship Date: Thu Mar 31, 2022</p>
              <p>Delivery: Mon Apr 4, 2022 -Thu Apr 7, 2022</p>
              <p>
                Box 1: AERUS Biospeed Bicycle Travel Case // 48 x 10 x 28in
                60lbs
              </p>
            </b-collapse>
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

        this.$router.push("/user/login");
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