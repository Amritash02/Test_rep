(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {

    };

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);
})();
document.querySelector("#submitButton").addEventListener("click", getData);

function getData() {
  tableau.connectionName = "USGS Earthquake Feed";
  tableau.submit();
}