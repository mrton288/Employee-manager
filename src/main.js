import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

/**Base Component */
import BaseInput from "./components/base/BaseInput.vue";
import BaseDate from "./components/base/BaseDatePicker.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseDialog from "./components/base/BaseDialog.vue";
import BaseTable from "./components/table/BaseTable.vue";

const app = createApp(App);
app.component("BaseInput", BaseInput);
app.component("BaseDate", BaseDate);
app.component("BaseButton", BaseButton);
app.component("BaseDialog", BaseDialog);
app.component("BaseTable", BaseTable);

app.use(router);
app.use(store);
app.mount("#app");
