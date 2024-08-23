sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("myui5app.controller.MainView", {
    onResetChanges() {
      this.getView().getModel().resetChanges("all");
    },

    onRefresh() {
      this.byId("page").getBindingContext().refresh();
    },
  });
});
