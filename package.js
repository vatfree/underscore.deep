Package.describe({
  name: "gfk:underscore-deep",
  version: "0.1.1",
  summary: "",
  git: "git@github.com:gfk-ba/underscore.deep.git",
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom(["2.0"]);
  api.use(["underscore", "coffeescript@2.4.1"]);

  api.addFiles("underscore.deep.coffee");
  api.export("_");
});

Package.onTest(function (api) {
  api.use([
    "underscore",
    "coffeescript",
    "gfk:underscore-deep",
    "mike:mocha-package@0.5.8",
    "practicalmeteor:sinon",
    "practicalmeteor:chai",
  ]);

  api.addFiles([
    "test/inspect.js",
    "test/helpers.coffee",
    "test/deepClone.coffee",
    "test/deepDelete.coffee",
    "test/deepExtend.coffee",
    "test/deepFromFlat.coffee",
    "test/deepHas.coffee",
    "test/deepKeys.coffee",
    "test/deepMapValues.coffee",
    "test/deepOmit.coffee",
    "test/deepPick.coffee",
    "test/deepToFlat.coffee",
    "test/isPlainObject.coffee",
    "test/mapKeys.coffee",
    "test/mapValues.coffee",
    "test/deepPickValue.coffee",
  ]);
});
