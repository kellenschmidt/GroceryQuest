"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const app_module_1 = require('./app.module');
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
const core_1 = require('@angular/core');
core_1.enableProdMode();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map