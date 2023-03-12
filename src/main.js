import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

/**Base Component */
import BaseInput from "./components/common/input/BaseInput.vue";
import BaseDate from "./components/common/datepicker/BaseDatePicker.vue";
import BaseButton from "./components/common/button/BaseButton.vue";
import BaseDialog from "./components/common/dialog/BaseDialog.vue";
import BaseDropdown from "./components/common/dropdown/BaseDropdown.vue";
import BaseTooltip from "./components/common/tooltip/BaseTooltip.vue";
import BaseIcon from "./components/common/icon/BaseIcon.vue";
import BaseCheckbox from "./components/common/checkbox/BaseCheckbox.vue";
import BaseLoading from "./components/common/loading/BaseLoading.vue";
import BaseToast from "./components/common/toast/BaseToast.vue";
import BaseTable from "./components/common/table/BaseTable.vue";
import BasePopup from "./components/common/popup/BasePopup.vue";
import BaseCombobox from "./components/common/combobox/BaseCombobox.vue";

/**
 * scripts
 */
import positionIcon from "./scripts/resources/positionIcon";
import MISAEnum from "./scripts/enums/enum";
import toolTip from "./scripts/resources/toolTip";

const app = createApp(App);
app.component("BaseInput", BaseInput);
app.component("BaseDate", BaseDate);
app.component("BaseButton", BaseButton);
app.component("BaseDialog", BaseDialog);
app.component("BaseDropdown", BaseDropdown);
app.component("BaseTooltip", BaseTooltip);
app.component("BaseIcon", BaseIcon);
app.component("BaseCheckbox", BaseCheckbox);
app.component("BaseLoading", BaseLoading);
app.component("BaseToast", BaseToast);
app.component("BaseTable", BaseTable);
app.component("BasePopup", BasePopup);
app.component("BaseCombobox", BaseCombobox);

app.use(positionIcon);
app.use(MISAEnum);
app.use(toolTip);

app.use(router);
app.use(store);
app.mount("#app");
