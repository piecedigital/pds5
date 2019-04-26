"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
function updateSRVConfig(data) {
    var config = {};
    try {
        config = JSON.parse(fs_1.readFileSync(path_1.join(__dirname, "../srv-config.json")).toString());
    }
    catch (error) {
        config.theme = "example";
    }
    Object.keys(data)
        .map(function (key) {
        var updateData = data[key];
        config[key] = updateData;
    });
    fs_1.writeFileSync(path_1.join(__dirname, "../srv-config.json"), JSON.stringify(data));
}
exports.updateSRVConfig = updateSRVConfig;
// gets every plugin and its database data
function aggregateAllPluginData(dbs, store, options, callback) {
    if (options === void 0) { options = {}; }
    new Promise(function (res, rej) {
        var plugins = store.getPlugins();
        // data gathered from the database
        var data = {
            adminViews: []
        };
        // variable used to track how many collections have been queried
        if (plugins.length == 0) {
            res(data);
            return;
        }
        var index = -1;
        // iterate and send plugin info to itter2 until there are no more plugins
        function itter1() {
            index++;
            if (index >= plugins.length) {
                console.log("no more plugins");
                res(data);
                return;
            }
            data.adminViews.push(plugins[index]);
            itter2(plugins[index]);
        }
        // get collection documents for a given plugin
        function itter2(plugin) {
            console.log("getting plugin database data");
            if (plugin.databaseCollections.length === 0) {
                itter1();
            }
            var dataCollected = 0;
            plugin.databaseCollections.map(function (collectionName) {
                // make sure database collections don't clash
                if (data[collectionName]) {
                    console.error("Database \"" + collectionName + "\" for plugin \"" + plugin.name + "\" conflicts with an existing database of the same name");
                    return;
                }
                queryOneCollection(dbs, {
                    collectionName: collectionName,
                    query: {}
                })
                    .then(function (docs) {
                    data[collectionName] = docs[collectionName];
                    dataCollected++;
                    if (dataCollected == plugin.databaseCollections.length)
                        itter1();
                })
                    .catch(function (e) { return console.error(e); });
            });
        }
        itter1();
    })
        .then(function (data) {
        callback(data);
    })
        .catch(function (e) { return console.error(e); });
}
exports.aggregateAllPluginData = aggregateAllPluginData;
// gets one plugin and its database data
function aggregateOnePluginData(pluginName, dbs, store, options, callback) {
    if (options === void 0) { options = {}; }
    new Promise(function (resolve, reject) {
        var plugin = store.getPluginByDirectoryName(pluginName);
        // data gathered from the database
        var data = {};
        // variable used to track how many collections have been queried
        if (!plugin) {
            console.log("no plugin");
            resolve(data);
            return;
        }
        var index = -1;
        // get collection documents for a given plugin
        console.log("getting plugin database data");
        if (plugin.databaseCollections.length === 0) {
            resolve(data);
        }
        var dataCollected = 0;
        plugin.databaseCollections.map(function (collectionName) {
            // make sure database collections don't clash
            if (data[collectionName]) {
                console.error("Database \"" + collectionName + "\" for plugin \"" + plugin.name + "\" conflicts with an existing database of the same name");
                return;
            }
            queryOneCollection(dbs, {
                collectionName: collectionName,
                query: {}
            })
                .then(function (docs) {
                data[collectionName] = docs[collectionName];
                dataCollected++;
                if (dataCollected == plugin.databaseCollections.length)
                    resolve(data);
            })
                .catch(function (e) { return console.error(e); });
        });
    })
        .then(function (data) {
        callback(data);
    })
        .catch(function (e) { return console.error(e); });
}
exports.aggregateOnePluginData = aggregateOnePluginData;
function queryManyCollections(dbs, queryList) {
    return new Promise(function (resolve, reject) {
        var data = {};
        if (!(queryList.length > 0)) {
            resolve(data);
        }
        else {
            queryList.map(function (query, ind) {
                queryOneCollection(dbs, query)
                    .then(function (res) {
                    data[query.collectionName] = res[query.collectionName];
                    if (ind === queryList.length - 1)
                        resolve(data);
                })
                    .catch(function (e) {
                    console.error(e);
                    resolve(data);
                });
            });
        }
    });
}
exports.queryManyCollections = queryManyCollections;
function queryOneCollection(dbs, query) {
    return new Promise(function (resolve, reject) {
        var data = {};
        if (!query) {
            // No query?! YOU GET NOTHING! YOU LOSE! GOOD DAY, SIR!
            resolve(data);
        }
        else {
            var cursor = dbs.dbs.collection(query.collectionName).find(query.query, {});
            if (cursor) {
                cursor.toArray(function (err, docs) {
                    if (docs === void 0) { docs = []; }
                    if (err) {
                        reject(err);
                    }
                    else {
                        data[query.collectionName] = docs || [];
                        resolve(data);
                    }
                });
            }
            else {
                resolve(data);
            }
        }
    });
}
exports.queryOneCollection = queryOneCollection;
function urlPrefixer(prefix) {
    return function (url) {
        return "" + prefix + url;
    };
}
exports.urlPrefixer = urlPrefixer;
// export function getPlugins(pluginType: string = "standard", callback: (data: any) => void) {
function getPlugins(callback) {
    fs_1.readdirSync(path_1.join(__dirname, "../plugins"))
        .map(function (folder) {
        var pr = JSON.parse(fs_1.readFileSync(path_1.join(__dirname, "../plugins", folder, "info.json")).toString());
        // const component = readFileSync(join(__dirname, `../plugins`, folder, "index.handlebars")).toString();
        // const component = readFileSync(join(__dirname, `../plugins`, folder, "index.js")).toString();
        return { pr: pr, directory: folder };
    })
        .map(function (data) {
        callback(data);
    });
}
exports.getPlugins = getPlugins;
function getThemes() {
    return fs_1.readdirSync(path_1.join(__dirname, "../themes"))
        .map(function (folder) {
        try {
            var tr = JSON.parse(fs_1.readFileSync(path_1.join(__dirname, "../themes", folder, "info.json")).toString());
            return { tr: tr, directory: folder };
        }
        catch (e) {
            console.error("Skipping \"" + folder + "\". Reason: " + e.message || e);
            return null;
        }
    }).filter(function (x) { return !!x; }); //filters out null values
}
exports.getThemes = getThemes;
function regexURL(url) {
    var x = {
        params: {}
    };
    x.regexURL = new RegExp(url
        .replace("/", "\\/")
        .replace(".", "\\.")
        .replace(/{:[\w\d\-_]+}/g, function (_) {
        x.params[_.replace(/({:|})/g, "")] = null;
        return "(.+)";
    }), "i");
    return x;
}
exports.regexURL = regexURL;
function getViewContent(url, contentRoot) {
    var header = "";
    var footer = "";
    var json = {};
    try {
        header = fs_1.readFileSync(contentRoot + "/partials/header.handlebars").toString();
        footer = fs_1.readFileSync(contentRoot + "/partials/footer.handlebars").toString();
        json = JSON.parse(fs_1.readFileSync(contentRoot + "/routes.json").toString());
    }
    catch (error) {
        console.error("Content requires 3 files: \"partials/header.handlebars\", \"partials/footer.handlebars\", and \"routes.json\"");
        console.error(error.message);
        return {
            params: {},
            queryList: [],
            page: "<center><h1>Critical error getting page content</h1></center>"
        };
    }
    var routes = {};
    Object.keys(json).map(function (routeKey) {
        var routeData = json[routeKey];
        var data = {
            params: {},
            page: null,
            query: []
        };
        data.params = routeData.params || {};
        data.query = routeData.queryList || [];
        data.page = function () {
            var page = routeData.page;
            var params = regexURL(routeData.page
                .replace(/\.\.\//g, "")
                .replace(/\/\w+\.\w+$/, "")
                .replace("plugins", "plugin"));
            var param = Object.keys(params.params).pop();
            var match = url.match(params.regexURL);
            // console.log(url, params.regexURL, match);
            if (match) {
                page = page.replace("{:" + param + "}", match[1]);
            }
            var path = path_1.join(contentRoot, "pages/" + page);
            return fs_1.readFileSync(path).toString();
        };
        routes[routeKey] = data;
    });
    // url match
    var results = pickPage(url, routes);
    results.page = header + results.page + footer;
    return results;
}
exports.getViewContent = getViewContent;
function getAdminContent(url) {
    var themeRoot = path_1.join(__dirname, "../admin");
    return getViewContent(url, themeRoot);
}
exports.getAdminContent = getAdminContent;
function getThemeContent(url) {
    var themeRoot = path_1.join(__dirname, "../themes/" + process.env["THEME"]);
    return getViewContent(url, themeRoot);
}
exports.getThemeContent = getThemeContent;
function pickPage(url, routes) {
    var arr = Object.keys(routes);
    var params = {};
    var queryList = [];
    var page = "";
    var i = 0;
    while (!page && i < arr.length) {
        var routeString = arr[i];
        params = routes[routeString].params || {};
        queryList = routes[routeString].query || [];
        var x = regexURL(routeString);
        var xx = new RegExp(x.regexURL);
        var match = url.match(xx);
        if (match) {
            var paramList = Object.keys(x.params);
            paramList.unshift(null);
            match.map(function (x, i) {
                if (i > 0) {
                    params[paramList[i]] = x;
                }
            });
            page = routes[routeString].page();
            break;
        }
        i++;
    }
    if (!page) {
        var routeString = "404";
        page = routes[routeString].page();
    }
    var res = {
        page: page,
        params: params,
        queryList: queryList
    };
    swapParamMarkers(res);
    return res;
}
exports.pickPage = pickPage;
function swapParamMarkers(res) {
    res.queryList.map(function (queryObject, index) {
        if (!queryObject.query)
            return;
        Object.keys(queryObject.query)
            .map(function (queryKey) {
            var queryData = queryObject.query[queryKey];
            var regexMatcher = /{:(.+)}/;
            var match = queryData.match(regexMatcher);
            var param = Object.keys(regexURL(queryData).params).pop();
            if (match) {
                // swap
                res.queryList[index].query[queryKey] = res.params[param];
                console.log(queryKey, queryData, param, res.params[param]);
            }
        });
    });
}
exports.swapParamMarkers = swapParamMarkers;
