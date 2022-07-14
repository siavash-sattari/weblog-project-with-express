(function ($) {
    "use strict";

    // Simple
    if( $('#simple-sortable').length ) {
        var simpleSorting = document.getElementById('simple-sortable');
        new Sortable(simpleSorting, {
            animation: 150,
        });
    }

    // Handle
    if( $('#sortable-handle').length ) {
        var handleSorting = document.getElementById('sortable-handle');
        new Sortable(handleSorting, {
            animation: 150,
            handle: '.handle',
        });
    }

    // Share List
    if( $('#sortable-share-left').length ) {
        var sortableShareLeft = document.getElementById('sortable-share-left');
        new Sortable(sortableShareLeft, {
            animation: 150,
            group: '.share',
        });
    }
    if( $('#sortable-share-right').length ) {
        var sortableShareRight = document.getElementById('sortable-share-right');
        new Sortable(sortableShareRight, {
            animation: 150,
            group: '.share',
        });
    }

    // Cloning
    if( $('#sortable-clone-left').length ) {
        var sortableCloneLeft = document.getElementById('sortable-clone-left');
        new Sortable(sortableCloneLeft, {
            animation: 150,
            group: {
                name: 'shared',
                pull: 'clone'
            },
        });
    }
    if( $('#sortable-clone-right').length ) {
        var sortableCloneRight = document.getElementById('sortable-clone-right');
        new Sortable(sortableCloneRight, {
            animation: 150,
            group: {
                name: 'shared',
                pull: 'clone'
            },
        });
    }

    // Disabling Sorting
    if( $('#disable-sorting').length ) {
        var disableListsorting = document.getElementById('disable-sorting');
        new Sortable(disableListsorting, {
            animation: 150,
            sort: false,
        });
    }

    // Filter Sorting
    if( $('#filter-sorting').length ) {
        var filterSorting = document.getElementById('filter-sorting');
        new Sortable(filterSorting, {
            animation: 150,
            filter: '.filtered',
        });
    }

    // Grid
    if( $('#grid-sorting').length ) {
        var gridSorting = document.getElementById('grid-sorting');
        new Sortable(gridSorting, {
            animation: 150,
        });
    }

    // Nested Sortables
    if( $('.nested-sortable').length ) {
        var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));
        for (var i = 0; i < nestedSortables.length; i++) {
            new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150
            });
        }
    }
    
})(jQuery);