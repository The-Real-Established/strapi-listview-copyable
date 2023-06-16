import { INJECT_COLUMN_IN_TABLE } from "@strapi/admin/admin/src/exposedHooks"
import { injectCopyActionColumns } from "./components/injectCopyActionColumns";
import * as pluginPkg from "../../package.json";
import { StrapiAdminInstance } from 'strapi-typed'
const { name } = pluginPkg.strapi;
export const pluginId = name.replace(/^strapi-plugin-/i, "");

export default {
	register(app: StrapiAdminInstance) {
		app.registerPlugin({
			id: pluginId,
			isReady: false,
			name,
		});
	},
	bootstrap(app: any) {
		app.registerHook(INJECT_COLUMN_IN_TABLE, injectCopyActionColumns);
	}
};
