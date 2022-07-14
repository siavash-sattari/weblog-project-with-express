(function ($) {
    "use strict";
    
    /*Basic*/
    if ($('#jsGrid').length) {
        $('#jsGrid').jsGrid({
            height: "610px",
            width: "100%",
            filtering: true,
            editing: true,
            inserting: true,
            sorting: true,
            paging: true,
            autoload: true,
            pageSize: 10,
            pageButtonCount: 5,
            deleteConfirm: "Do you really want to delete the client?",
            controller: db,
            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 80 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false},
                { type: "control" }
            ]
        });
    }
    
    /*Static*/
    if ($('#jsGrid-static').length) {
        $('#jsGrid-static').jsGrid({
            height: "610px",
            width: "100%",
            sorting: true,
            paging: true,
            pageSize: 10,
            pageButtonCount: 5,
            data: db.clients,
            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married" }
            ]
        });
    }
    
    /*Sorting*/
    if ($('#jsGrid-sorting').length) {
        $('#jsGrid-sorting').jsGrid({
            height: "610px",
            width: "100%",
            autoload: true,
            selecting: false,
            paging: true,
            pageSize: 10,
            pageButtonCount: 5,
            controller: db,
            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married" }
            ]
        });
        $("#sort").click(function() {
            var field = $("#sortingField").val();
            $("#jsGrid-sorting").jsGrid("sort", field);
        });
    }

})(jQuery);