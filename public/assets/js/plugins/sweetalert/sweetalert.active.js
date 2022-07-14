(function ($) {
    "use strict";
    
    
    // Basic
    if( $('.sweetalert-basic').length ) {
        $('.sweetalert-basic').on('click', function(){
            swal({
                title: "Here's the title!",
                text: "Here's the Lorem ipsum text!"
            });
        });
    }
    
    // Success
    if( $('.sweetalert-success').length ) {
        $('.sweetalert-success').on('click', function(){
            swal({
                title: "Good job!",
                text: "You clicked the button!", 
                icon: "success"
            });
        });
    }
    
    // Warning
    if( $('.sweetalert-warning').length ) {
        $('.sweetalert-warning').on('click', function(){
            swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!", 
                icon: "warning",
                buttons: {
                    confirm: {
                        text: "Yes Delete It",
                        value: true,
                        visible: true,
                        className: "button button-warning",
                        closeModal: true
                    },
                    cancel: {
                        text: "Cancel",
                        value: true,
                        visible: true,
                        className: "button button-primary",
                        closeModal: true,
                    }
                }
            });
        });
    }
    
    // Error
    if( $('.sweetalert-error').length ) {
        $('.sweetalert-error').on('click', function(){
            swal({
                title: "Something went wrong",
                text: "Please try again later", 
                icon: "error",
                button: {
                    text: "Go back",
                    value: true,
                    visible: true,
                    className: "button button-danger",
                    closeModal: true,
                }
            });
        });
    }
    
    // Info
    if( $('.sweetalert-info').length ) {
        $('.sweetalert-info').on('click', function(){
            swal({
                title: "Under Construction",
                text: "Come back later", 
                icon: "info",
                button: {
                    className: "button button-info",
                }
            });
        });
    }
    
    // Multiple
    if( $('.sweetalert-multiple').length ) {
        $('.sweetalert-multiple').on('click', function(){
            swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!", 
                icon: "warning",
                buttons: {
                    cancel: {
                        text: "Cancel",
                        value: true,
                        visible: true,
                        className: "button button-primary",
                        closeModal: true,
                    },
                    confirm: {
                        text: "Yes Delete It",
                        value: true,
                        visible: true,
                        className: "button button-danger",
                        closeModal: true
                    }
                },
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                        button: {
                            className: "button button-primary"
                        }
                    });
                } else {
                    swal({
                        text: "Your imaginary file is safe!",
                        button: {
                            className: "button button-primary"
                        }
                    });
                }
            });
        });
    }
    
    // Ajax
    if( $('.sweetalert-ajax').length ) {
        $('.sweetalert-ajax').on('click', function(){
            swal({
                text: 'Search for a movie. e.g. "La La Land".',
                content: "input",
                button: {
                    text: "Search!",
                    closeModal: false,
                },
            })
            .then(name => {
                if (!name) throw null;

                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
            })
            .then(results => {
                return results.json();
            })
            .then(json => {
                const movie = json.results[0];

                if (!movie) {
                    return swal("No movie was found!");
                }

                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;

                swal({
                    title: "Top result:",
                    text: name,
                    icon: imageURL,
                });
            })
            .catch(err => {
                if (err) {
                    swal("Oh noes!", "The AJAX request failed!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        });
    }
    
    // Prompt
    if( $('.sweetalert-prompt').length ) {
        $('.sweetalert-prompt').on('click', function(){
            swal("Write something here:", {
                content: {
                    element: "input",
                },
            })
            .then((value) => {
                swal(`You typed: ${value}`);
            });
        });
    }
    
    // Timer
    if( $('.sweetalert-timer').length ) {
        $('.sweetalert-timer').on('click', function(){
            swal("This modal will disappear in 5 Seconds", {
                button: false,
                timer: 5000,
            });
        });
    }
    
})(jQuery);