import { INJECT_COLUMN_IN_TABLE } from "@strapi/admin/admin/src/exposedHooks"
import { injectCopyActionColumns } from "./components/injectCopyActionColumns";
export default {
	bootstrap(app: any) {
		app.registerHook(INJECT_COLUMN_IN_TABLE, injectCopyActionColumns);
	}
};
