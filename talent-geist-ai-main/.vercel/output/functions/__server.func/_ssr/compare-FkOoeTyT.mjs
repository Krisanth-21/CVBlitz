import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-FkOoeTyT.js
var $$splitComponentImporter = () => import("./compare-Bp9LeBve.mjs");
var Route = createFileRoute("/compare")({
	validateSearch: (search) => {
		return { ids: search.ids || "" };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
