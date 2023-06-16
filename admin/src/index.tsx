const { INJECT_COLUMN_IN_TABLE } = require("@strapi/admin/admin/src/exposedHooks")
import { injectCopyActionColumns } from "./components/injectCopyActionColumns";
import * as pluginPkg from "../../package.json";
import { StrapiAdminInstance } from 'strapi-typed'
import Initializer from "./components/Initializer";
export const pluginId = pluginPkg.strapi.name.replace(/^strapi-plugin-/i, "");

export default {
	register(app: StrapiAdminInstance) {
		app.registerPlugin({
			id: pluginId,
			isReady: false,
			initializer: Initializer,
			name: pluginPkg.strapi.name,
		});
	},
	bootstrap(app: any) {
		app.registerHook(INJECT_COLUMN_IN_TABLE, injectCopyActionColumns);
	}
};
