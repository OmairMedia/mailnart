<template>
  <home-layout>
    <b-navbar class="py-2" toggleable="lg" type="dark" variant="light">
      <b-container>
        <b-navbar-brand class="mx-auto" href="https://ad-wize.com/mailnart/">
          <b-img src="assets/logos/logo.png" fluid></b-img>
        </b-navbar-brand>
      </b-container>
    </b-navbar>
    <b-container class="mt-4 section shipping-form">
      <div class="top-options">
        <div class="way">
          <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="sm"
            right
            toggle-class="header-icon notificationButton"
            menu-class="m-0 p-0"
            no-caret
          >
            <template slot="button-content">
              <b-button class="m-0"
                >{{ shipping.trip_type }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
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
              </b-button>
            </template>

            <b-dropdown-item
              v-for="(option, index) in shipping.trip_options"
              @click="shipping.trip_type = option"
              :key="index"
              >{{ option }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="boxes-cases">
          <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="sm"
            right
            toggle-class="header-icon notificationButton"
            menu-class="m-0 p-0"
            no-caret
          >
            <template slot="button-content">
              <b-button
                >{{ shipping.boxes_cases }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
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
              </b-button>
            </template>

            <b-dropdown-item
              v-for="(option, index) in shipping.boxes_options"
              @click="shipping.boxes_cases = option"
              :key="index"
              >{{ option }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="weight">
          <b-dropdown
            class="p-0 m-0"
            variant="empty"
            size="sm"
            right
            toggle-class="header-icon notificationButton"
            menu-class="m-0 p-0"
            no-caret
          >
            <template slot="button-content">
              <b-button
                >{{ shipping.weight }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
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
              </b-button>
            </template>

            <b-dropdown-item
              v-for="(option, index) in shipping.weight_options"
              @click="shipping.weight = option"
              :key="index"
              >{{ option }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>

      <div class="location">
        <b-form-group label="Ship From">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
        <b-form-group label="Ship To">
          <b-form-input type="text"></b-form-input>
        </b-form-group>
      </div>

      <h5>BOX/CASES #1 - CUSTOM</h5>
      <div class="box-cases">
        <b-form-select
          v-model="boxes.size"
          :options="boxes.size_options"
        ></b-form-select>

        <b-form-select
          v-model="boxes.content"
          :options="boxes.content_options"
        ></b-form-select>

        <b-form-group label="Market Value">
          <b-input-group size="lg" prepend="Market Value" append="$">
            <b-form-input></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-select
          v-model="boxes.premium_protection"
          :options="boxes.premium_protection_options"
        ></b-form-select>

        <b-form-select
          v-model="boxes.purpose"
          :options="boxes.purpose_options"
        ></b-form-select>
      </div>
    </b-container>
  </home-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      shipping: {
        trip_type: "One-Way",
        trip_options: ["One-Way", "Round-Trip", "Multi-City"],
        boxes_cases: "1 Box/Case",
        boxes_options: [
          "1 Box/Case",
          "2 Box/Case",
          "3 Box/Case",
          "4 Box/Case",
          "5 Box/Case",
          "6 Box/Case",
          "7 Box/Case",
        ],
        weight: "in/lbs",
        weight_options: ["in/lbs", "cm/lbs"],
      },
      boxes: {
        size: "AERUS Biospeed Bicycle Travel Case",
        size_options: [
          { value: null, text: "Please select an option" },
          {
            value: "AERUS Biospeed Bicycle Travel Case",
            text: "AERUS Biospeed Bicycle Travel Case",
          },
          { value: "BIKEBOX Alan", text: "BIKEBOX Alan" },
          {
            value: "BIKEFLIGHTS Bike Box LARGE",
            text: "BIKEFLIGHTS Bike Box LARGE",
          },
          {
            value: "BIKEFLIGHTS Bike Box MEDIUM",
            text: "BIKEFLIGHTS Bike Box MEDIUM",
          },
        ],
        content: "Complete Bicycle",
        content_options: [
          { value: null, text: "Please select an option" },
          {
            value: "Complete Bicycle",
            text: "Complete Bicycle",
          },
          {
            value: "Complete E-Bike With Battery Installed",
            text: "Complete E-Bike With Battery Installed",
          },
          {
            value: "Bicycle Frame",
            text: "Bicycle Frame",
          },
          {
            value: "Bicycle Wheel(s)",
            text: "Bicycle Wheel(s)",
          },
        ],
        premium_protection:
          "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
        premium_protection_options: [
          { value: null, text: "Please select an option" },
          {
            value:
              "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
            text: "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
          },
          {
            value:
              "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
            text: "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
          },
          {
            value:
              "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
            text: "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
          },
          {
            value:
              "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
            text: "$8,000 Coverage (+$124.80) Preferred Handling + Signature Required",
          },
        ],
        purpose: "Buy/Sell/Gift",
        purpose_options: [
          { value: null, text: "Please select an option" },
          {
            value: "Buy/Sell/Gift",
            text: "Buy/Sell/Gift",
          },
          {
            value: "Buy/Sell/Gift",
            text: "Buy/Sell/Gift",
          },
          {
            value: "Buy/Sell/Gift",
            text: "Buy/Sell/Gift",
          },
          {
            value: "Buy/Sell/Gift",
            text: "Buy/Sell/Gift",
          },
        ],
      },
    };
  },
  methods: {},
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