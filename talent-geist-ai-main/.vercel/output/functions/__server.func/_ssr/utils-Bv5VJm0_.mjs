//#region node_modules/.nitro/vite/services/ssr/assets/utils-Bv5VJm0_.js
function triggerFileDownload(filename, content, contentType = "text/markdown") {
	if (typeof window === "undefined") return;
	const blob = new Blob([content], { type: contentType });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
//#endregion
export { triggerFileDownload as t };
