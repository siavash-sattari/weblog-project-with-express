(function ($) {
    "use strict";
    
    /*Basic*/
    if( $('.footable').length ) {
        $('.footable').footable();
    }
    
    /*Ajax Data Load*/
    if( $('.footable-ajax').length ) {
        $('.footable-ajax').footable({
            "columns": $.get('assets/js/plugins/footable/footable-data/columns.json'),
            "rows": $.get('assets/js/plugins/footable/footable-data/rows.json')
        });
    }
    
    /*Edit Rows*/
    if( $('.footable-editing').length ) {
        var $modal = $('#footable-editor-modal'),
            $editor = $('#footable-editor'),
            $editorTitle = $('#footable-editor-title'),
            ft = FooTable.init('.footable-editing', {
                editing: {
                    enabled: true,
                    addRow: function(){
                        $modal.removeData('row');
                        $editor[0].reset();
                        $editorTitle.text('Add a new row');
                        $modal.modal('show');
                    },
                    editRow: function(row){
                        var values = row.val();
                        $editor.find('#name').val(values.name);
                        $editor.find('#position').val(values.position);
                        $editor.find('#office').val(values.office);
                        $editor.find('#age').val(values.age);
                        $editor.find('#startDate').val(values.startDate);
                        $editor.find('#salary').val(values.salary);

                        $modal.data('row', row);
                        $editorTitle.text('Edit - ' + values.name + ' Data');
                        $modal.modal('show');
                    },
                    deleteRow: function(row){
                        if (confirm('Are you sure you want to delete the row?')){
                            row.delete();
                        }
                    }
                }
            }),
            uid = 10;

        $editor.on('submit', function(e){
            if (this.checkValidity && !this.checkValidity()) return;
            e.preventDefault();
            var row = $modal.data('row'),
                values = {
                    name: $editor.find('#name').val(),
                    position: $editor.find('#position').val(),
                    office: $editor.find('#office').val(),
                    age: $editor.find('#age').val(),
                    startDate: moment($editor.find('#startDate').val(), 'YYYY-MM-DD'),
                    salary: $editor.find('#salary').val()
                };

            if (row instanceof FooTable.Row){
                row.val(values);
            } else {
                values.id = uid++;
                ft.rows.add(values);
            }
            $modal.modal('hide');
        });
    }
    
})(jQuery);