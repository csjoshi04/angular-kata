const path = require("path");

const moduleConfig = {
    getEntries : function (appBasePath, projectBasePath) {
        return [
            {
                generatedIndexJSName : "gen.angular2app.index",
                indexJSLocation : path.join(appBasePath, "angular2app", "angular2app.index.ts"),

                generatedIndexCSSName : "gen.angular2app.style",
                cssFiles : [path.join(appBasePath, "angular2app", "styles", "angular2app.style.css")],

                generatedVendorJSName : "gen.angular2app.jsvendor",
                jsVendors : path.join(appBasePath, "angular2app", "angular2app.jsvendor.ts"),

                generatedVendorCSSName : "gen.angular2app.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.angular2app.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "angular2app", "angular2app.index.html")
            },
            {
                generatedIndexJSName : "gen.routing.index",
                indexJSLocation : path.join(appBasePath, "routing", "routing.index.ts"),

                generatedIndexCSSName : "gen.routing.style",
                cssFiles : [path.join(appBasePath, "routing", "styles", "routing.style.css")],

                generatedVendorJSName : "gen.routing.jsvendor",
                jsVendors : path.join(appBasePath, "routing", "routing.jsvendor.ts"),

                generatedVendorCSSName : "gen.routing.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.routing.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "routing", "routing.index.html")
            },
            {
                generatedIndexJSName : "gen.template-form.index",
                indexJSLocation : path.join(appBasePath, "template-form", "template-form.index.ts"),

                generatedIndexCSSName : "gen.template-form.style",
                cssFiles : [path.join(appBasePath, "template-form", "styles", "template-form.style.css")],

                generatedVendorJSName : "gen.template-form.jsvendor",
                jsVendors : path.join(appBasePath, "template-form", "template-form.jsvendor.ts"),

                generatedVendorCSSName : "gen.template-form.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.template-form.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "template-form", "template-form.index.html")
            },
            {
                generatedIndexJSName : "gen.reactive-form.index",
                indexJSLocation : path.join(appBasePath, "reactive-form", "reactive-form.index.ts"),

                generatedIndexCSSName : "gen.reactive-form.style",
                cssFiles : [path.join(appBasePath, "reactive-form", "styles", "reactive-form.style.css")],

                generatedVendorJSName : "gen.reactive-form.jsvendor",
                jsVendors : path.join(appBasePath, "reactive-form", "reactive-form.jsvendor.ts"),

                generatedVendorCSSName : "gen.reactive-form.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.reactive-form.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "reactive-form", "reactive-form.index.html")
            },
            {
                generatedIndexJSName : "gen.cmp-databinding.index",
                indexJSLocation : path.join(appBasePath, "cmp-databinding", "cmp-databinding.index.ts"),

                generatedIndexCSSName : "gen.cmp-databinding.style",
                cssFiles : [path.join(appBasePath, "cmp-databinding", "styles", "cmp-databinding.style.css")],

                generatedVendorJSName : "gen.cmp-databinding.jsvendor",
                jsVendors : path.join(appBasePath, "cmp-databinding", "cmp-databinding.jsvendor.ts"),

                generatedVendorCSSName : "gen.cmp-databinding.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.cmp-databinding.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "cmp-databinding", "cmp-databinding.index.html")
            },
            {
                generatedIndexJSName : "gen.directive.index",
                indexJSLocation : path.join(appBasePath, "directive", "directive.index.ts"),

                generatedIndexCSSName : "gen.directive.style",
                cssFiles : [path.join(appBasePath, "directive", "styles", "directive.style.css")],

                generatedVendorJSName : "gen.directive.jsvendor",
                jsVendors : path.join(appBasePath, "directive", "directive.jsvendor.ts"),

                generatedVendorCSSName : "gen.directive.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.directive.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "directive", "directive.index.html")
            },
            {
                generatedIndexJSName : "gen.service.index",
                indexJSLocation : path.join(appBasePath, "service", "service.index.ts"),

                generatedIndexCSSName : "gen.service.style",
                cssFiles : [path.join(appBasePath, "service", "styles", "service.style.css")],

                generatedVendorJSName : "gen.service.jsvendor",
                jsVendors : path.join(appBasePath, "service", "service.jsvendor.ts"),

                generatedVendorCSSName : "gen.service.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.service.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "service", "service.index.html")
            },
            {
                generatedIndexJSName : "gen.observable.index",
                indexJSLocation : path.join(appBasePath, "observable", "observable.index.ts"),

                generatedIndexCSSName : "gen.observable.style",
                cssFiles : [path.join(appBasePath, "observable", "styles", "observable.style.css")],

                generatedVendorJSName : "gen.observable.jsvendor",
                jsVendors : path.join(appBasePath, "observable", "observable.jsvendor.ts"),

                generatedVendorCSSName : "gen.observable.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.observable.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "observable", "observable.index.html")
            },
            {
                generatedIndexJSName : "gen.pipe.index",
                indexJSLocation : path.join(appBasePath, "pipe", "pipe.index.ts"),

                generatedIndexCSSName : "gen.pipe.style",
                cssFiles : [path.join(appBasePath, "pipe", "styles", "pipe.style.css")],

                generatedVendorJSName : "gen.pipe.jsvendor",
                jsVendors : path.join(appBasePath, "pipe", "pipe.jsvendor.ts"),

                generatedVendorCSSName : "gen.pipe.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.pipe.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "pipe", "pipe.index.html")
            },
            {
                generatedIndexJSName : "gen.http.index",
                indexJSLocation : path.join(appBasePath, "http", "http.index.ts"),

                generatedIndexCSSName : "gen.http.style",
                cssFiles : [path.join(appBasePath, "http", "styles", "http.style.css")],

                generatedVendorJSName : "gen.http.jsvendor",
                jsVendors : path.join(appBasePath, "http", "http.jsvendor.ts"),

                generatedVendorCSSName : "gen.http.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.http.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "http", "http.index.html")
            }
        ]
    }
}

module.exports = moduleConfig;