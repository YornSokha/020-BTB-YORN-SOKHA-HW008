$(document).ready(function() {
    let totalBubble = 5;
    $(document).on('click', '.bubble', (e) => {
        let div;
        if (totalBubble > 20)
            return;

        let bubbleClass = $(e.target).attr('class');
        div = "<div class='" + bubbleClass + "'></div>";
        totalBubble++;
        $('body').append(div)
    })

    setInterval(function again() {
        $(".bubble").first().animate({
            top: (((screen.height) - 100))
        }, 1000).animate({
            top: '0px',
            right: (((screen.width) / 2))
        }, 1000).animate({
            top: (((screen.height)) - 100),
            right: '0px'
        }, 1000).animate({
            top: '0px'
        }, 1000).animate({
            right: (((screen.width) - 50))
        }, 1000, function() { again() })
    });

    setInterval(function again() {
        $(".bubble").filter('.bubble.x1.bg-yellow').animate({
                top: (((screen.height) / 3))
            }, 500)
            .animate({
                top: '10px',
                right: (((screen.width - 100)))
            }, 500)
            .animate({
                top: (((screen.height) / 3)),
                right: (((screen.width)) - 200),
            }, 500)
            .animate({
                top: '10px',
                right: (((screen.width - 300)))
            }, 500)
            .animate({
                top: (((screen.height) / 3)),
                right: (((screen.width)) - 400),
            }, 500)
            .animate({
                top: '10px',
                right: (((screen.width - 500)))
            }, 500)
            .animate({
                top: (((screen.height) / 3)),
                right: (((screen.width)) - 600),
            }, 500)
            .animate({
                top: '10px',
                right: (((screen.width - 700)))
            }, 500)
            .animate({
                top: (((screen.height) / 3)),
                right: (((screen.width)) - 800),
            }, 500)
            .animate({
                top: '10px',
                right: (((screen.width - 900)))
            }, 500)
            .animate({
                top: (((screen.height) / 3)),
                right: (((screen.width)) - 1000),
            }, 500)
            .animate({
                top: '10px',
                right: (((screen.width - 1100)))
            }, 500)
    });


    setInterval(function again() {
        $(".bubble").filter('.x2').animate({
            top: (((screen.height) - 80))
        }, 2000).animate({
            right: '0px',
            // right: (((screen.width) / 2))
        }, 2000).animate({
            top: '0px'
        }, 2000).animate({
            right: (((screen.width) - 75))
        }, 2000, function() { again() })
    });

    setInterval(function again() {
        $(".bubble").filter('.x3').animate({
            top: (((screen.height) - 400))
        }, 1500).animate({
            right: '0px',
            // right: (((screen.width) / 2))
        }, 1500).animate({
            top: '0px'
        }, 1500).animate({
            right: (((screen.width) - 100))
        }, 1500, function() { again() })
    });

    setInterval(function again() {
        $(".bubble").filter('.x4').animate({
            top: (((screen.height) - 400))
        }, 2000).animate({
            right: '0px',
            // right: (((screen.width) / 2))
        }, 2000).animate({
            top: '0px'
        }, 2000).animate({
            right: (((screen.width) - 150))
        }, 2000, function() { again() })
    });
});