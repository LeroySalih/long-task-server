"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sse/route";
exports.ids = ["app/api/sse/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsse%2Froute&page=%2Fapi%2Fsse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsse%2Froute.js&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsse%2Froute&page=%2Fapi%2Fsse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsse%2Froute.js&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_app_api_sse_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/sse/route.js */ \"(rsc)/./app/api/sse/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sse/route\",\n        pathname: \"/api/sse\",\n        filename: \"route\",\n        bundlePath: \"app/api/sse/route\"\n    },\n    resolvedPagePath: \"/app/app/api/sse/route.js\",\n    nextConfigOutput,\n    userland: _app_app_api_sse_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/sse/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzc2UlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNzZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNzZSUyRnJvdXRlLmpzJmFwcERpcj0lMkZhcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIyLz9jMjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9hcHAvYXBwL2FwaS9zc2Uvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NzZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NzZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3NlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2FwcC9hcHAvYXBpL3NzZS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3NlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsse%2Froute&page=%2Fapi%2Fsse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsse%2Froute.js&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/sse/route.js":
/*!******************************!*\
  !*** ./app/api/sse/route.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var amqplib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amqplib */ \"(rsc)/./node_modules/amqplib/channel_api.js\");\n// app/api/sse/route.js\n/* page sends out server side events */ const dynamic = \"force-dynamic\";\n\n\nasync function GET() {\n    const headers = new Headers();\n    headers.append(\"Content-Type\", \"text/event-stream\");\n    headers.append(\"Cache-Control\", \"no-cache\");\n    headers.append(\"Connection\", \"keep-alive\");\n    headers.append(\"X-Accel-Buffering\", \"no\");\n    const body = new ReadableStream({\n        async start (controller) {\n            const url = `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@${process.env.RABBITMQ_DEFAULT_HOST}`;\n            console.log(\"Connecting to \", url);\n            //'amqp://user:password@message'\n            const connection = await amqplib__WEBPACK_IMPORTED_MODULE_1__.connect(url);\n            const channel = await connection.createChannel();\n            const queue = \"log-queue\";\n            await channel.assertQueue(queue, {\n                durable: true\n            });\n            const sendMessage = (message)=>{\n                controller.enqueue(`data: ${JSON.stringify(message)}\\n\\n`);\n            };\n            channel.consume(queue, (msg)=>{\n                if (msg !== null) {\n                    const messageContent = msg.content.toString();\n                    sendMessage({\n                        message: messageContent\n                    });\n                    channel.ack(msg);\n                }\n            });\n            // Handle connection close\n            controller.close = ()=>{\n                channel.close();\n                connection.close();\n            };\n        }\n    });\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(body, {\n        headers\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NzZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsdUJBQXVCO0FBRXZCLHFDQUFxQyxHQUU5QixNQUFNQSxVQUFVLGdCQUFnQjtBQUVJO0FBQ2hCO0FBRXBCLGVBQWVHO0lBQ3BCLE1BQU1DLFVBQVUsSUFBSUM7SUFDcEJELFFBQVFFLE1BQU0sQ0FBQyxnQkFBZ0I7SUFDL0JGLFFBQVFFLE1BQU0sQ0FBQyxpQkFBaUI7SUFDaENGLFFBQVFFLE1BQU0sQ0FBQyxjQUFjO0lBQzdCRixRQUFRRSxNQUFNLENBQUMscUJBQXFCO0lBRXBDLE1BQU1DLE9BQU8sSUFBSUMsZUFBZTtRQUM5QixNQUFNQyxPQUFNQyxVQUFVO1lBRXBCLE1BQU1DLE1BQU0sQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCLENBQUMsQ0FBQyxFQUFFRixRQUFRQyxHQUFHLENBQUNFLHFCQUFxQixDQUFDLENBQUMsRUFBRUgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25JQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCUDtZQUM5QixnQ0FBZ0M7WUFDaEMsTUFBTVEsYUFBYSxNQUFNakIsNENBQVksQ0FBQ1M7WUFDdEMsTUFBTVUsVUFBVSxNQUFNRixXQUFXRyxhQUFhO1lBQzlDLE1BQU1DLFFBQVE7WUFFZCxNQUFNRixRQUFRRyxXQUFXLENBQUNELE9BQU87Z0JBQUVFLFNBQVM7WUFBSztZQUVqRCxNQUFNQyxjQUFjLENBQUNDO2dCQUNuQmpCLFdBQVdrQixPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUVDLEtBQUtDLFNBQVMsQ0FBQ0gsU0FBUyxJQUFJLENBQUM7WUFDM0Q7WUFFQU4sUUFBUVUsT0FBTyxDQUFDUixPQUFPLENBQUNTO2dCQUN0QixJQUFJQSxRQUFRLE1BQU07b0JBQ2hCLE1BQU1DLGlCQUFpQkQsSUFBSUUsT0FBTyxDQUFDQyxRQUFRO29CQUMzQ1QsWUFBWTt3QkFBRUMsU0FBU007b0JBQWU7b0JBQ3RDWixRQUFRZSxHQUFHLENBQUNKO2dCQUNkO1lBQ0Y7WUFFQSwwQkFBMEI7WUFDMUJ0QixXQUFXMkIsS0FBSyxHQUFHO2dCQUNqQmhCLFFBQVFnQixLQUFLO2dCQUNibEIsV0FBV2tCLEtBQUs7WUFDbEI7UUFDRjtJQUNGO0lBRUEsT0FBTyxJQUFJcEMscURBQVlBLENBQUNNLE1BQU07UUFBRUg7SUFBUTtBQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjIvLi9hcHAvYXBpL3NzZS9yb3V0ZS5qcz8yZThmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvc3NlL3JvdXRlLmpzXG5cbi8qIHBhZ2Ugc2VuZHMgb3V0IHNlcnZlciBzaWRlIGV2ZW50cyAqL1xuXG5leHBvcnQgY29uc3QgZHluYW1pYyA9IFwiZm9yY2UtZHluYW1pY1wiO1xuXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgYW1xcCBmcm9tICdhbXFwbGliJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAndGV4dC9ldmVudC1zdHJlYW0nKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0Nvbm5lY3Rpb24nLCAna2VlcC1hbGl2ZScpO1xuICBoZWFkZXJzLmFwcGVuZCgnWC1BY2NlbC1CdWZmZXJpbmcnLCAnbm8nKTtcblxuICBjb25zdCBib2R5ID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICBhc3luYyBzdGFydChjb250cm9sbGVyKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IHVybCA9IGBhbXFwOi8vJHtwcm9jZXNzLmVudi5SQUJCSVRNUV9ERUZBVUxUX1VTRVJ9OiR7cHJvY2Vzcy5lbnYuUkFCQklUTVFfREVGQVVMVF9QQVNTfUAke3Byb2Nlc3MuZW52LlJBQkJJVE1RX0RFRkFVTFRfSE9TVH1gXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RpbmcgdG8gXCIsIHVybCk7XG4gICAgICAvLydhbXFwOi8vdXNlcjpwYXNzd29yZEBtZXNzYWdlJ1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGFtcXAuY29ubmVjdCh1cmwpO1xuICAgICAgY29uc3QgY2hhbm5lbCA9IGF3YWl0IGNvbm5lY3Rpb24uY3JlYXRlQ2hhbm5lbCgpO1xuICAgICAgY29uc3QgcXVldWUgPSAnbG9nLXF1ZXVlJztcblxuICAgICAgYXdhaXQgY2hhbm5lbC5hc3NlcnRRdWV1ZShxdWV1ZSwgeyBkdXJhYmxlOiB0cnVlIH0pO1xuXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShgZGF0YTogJHtKU09OLnN0cmluZ2lmeShtZXNzYWdlKX1cXG5cXG5gKTtcbiAgICAgIH07XG5cbiAgICAgIGNoYW5uZWwuY29uc3VtZShxdWV1ZSwgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUNvbnRlbnQgPSBtc2cuY29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgIHNlbmRNZXNzYWdlKHsgbWVzc2FnZTogbWVzc2FnZUNvbnRlbnQgfSk7XG4gICAgICAgICAgY2hhbm5lbC5hY2sobXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBjb25uZWN0aW9uIGNsb3NlXG4gICAgICBjb250cm9sbGVyLmNsb3NlID0gKCkgPT4ge1xuICAgICAgICBjaGFubmVsLmNsb3NlKCk7XG4gICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoYm9keSwgeyBoZWFkZXJzIH0pO1xufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJOZXh0UmVzcG9uc2UiLCJhbXFwIiwiR0VUIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJib2R5IiwiUmVhZGFibGVTdHJlYW0iLCJzdGFydCIsImNvbnRyb2xsZXIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiUkFCQklUTVFfREVGQVVMVF9VU0VSIiwiUkFCQklUTVFfREVGQVVMVF9QQVNTIiwiUkFCQklUTVFfREVGQVVMVF9IT1NUIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiY2hhbm5lbCIsImNyZWF0ZUNoYW5uZWwiLCJxdWV1ZSIsImFzc2VydFF1ZXVlIiwiZHVyYWJsZSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImVucXVldWUiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc3VtZSIsIm1zZyIsIm1lc3NhZ2VDb250ZW50IiwiY29udGVudCIsInRvU3RyaW5nIiwiYWNrIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/sse/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/amqplib","vendor-chunks/readable-stream","vendor-chunks/@acuminous","vendor-chunks/debug","vendor-chunks/inherits","vendor-chunks/url-parse","vendor-chunks/supports-color","vendor-chunks/string_decoder","vendor-chunks/safe-buffer","vendor-chunks/requires-port","vendor-chunks/querystringify","vendor-chunks/ms","vendor-chunks/has-flag","vendor-chunks/core-util-is","vendor-chunks/buffer-more-ints"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsse%2Froute&page=%2Fapi%2Fsse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsse%2Froute.js&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();