import DemoVueButton from "./components/DemoVueButton.vue";

export default {
  install: (app, options) => {
    app.component("DemoVueButton", DemoVueButton);
  }
};
