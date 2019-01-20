// The navbar is fidex to the top depending on the screen width.
(() => {
    var checkNavbar = () => {
        var breakpoint = $(`body`)
            .css(`--breakpoint-md`)
            .replace(`px`, ``);
        window.innerWidth <= breakpoint
            ? $(`.navbar`).removeClass(`fixed-top`)
            : $(`.navbar`).addClass(`fixed-top`);
    };
    // Once on load
    checkNavbar();
    // Allow the navigation to be scrolled if the breakpoint is hit.
    window.addEventListener('optimizedResize', () => {
        // 300ms timeout to allow for document re-flows etc.
        setTimeout(() => {
            checkNavbar();
        }, 300);
    });
})();

// Load the lists dynamically.
(() => {
    // Check if the element exists on the page
    if ($(`#lists`).length) {
        var lists;
        var ajaxLists = $.ajax({
            type: 'GET',
            url: 'lists.json',
            dataType: 'JSON',
            success: function(response) {
                lists = response;
            }
        });
        // Error handling must be added in a real production evironment.
        // Check if the request completes successfully
        $.when(ajaxLists).done(function() {
            // Create a section for each list and add it to the content.
            //
            // Identify the content of each list.
            $.each(lists, (i) => {
                var country = lists[i].country,
                    imgUrl = lists[i].imgUrl,
                    place = lists[i].place,
                    content = lists[i].content;
                // Create the template
                var template = `<div class="col-lg-4">
    <img src="img/${imgUrl}" class="img-fluid" alt="" />
    <span class="mt-4 text-muted small font-weight-bold">${country}</span>
    <h3 class="font-weight-bold">${place}</h3>
    <p>${content}</p>
    <div class="d-flex justify-content-center">
        <a href="#" class="btn btn-primary pb-2 px-4 mb-4">View List</a>
    </div>
</div>
`;
                // Append it to the HTML
                $(`#lists`).append(template);
            });
        });
    }
})();

// Card Columns
(() => {
    // Define the sources of the images. This is typically done via ajax/fetch.
    var photosSrc = [
        `https://scontent.cdninstagram.com/vp/039df4d882b57d040bdea299e515c628/5CCC9941/t51.2885-15/sh0.08/e35/s640x640/49491333_138348780507247_2442670192313937944_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/7155de36c51e07c3d281a9b9a3d6ed86/5CBFED42/t51.2885-15/sh0.08/e35/s640x640/47694889_354498131770471_6499041732427944214_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/b88a3f9986d6dee1904d22a063ad682b/5CFBB7E1/t51.2885-15/sh0.08/e35/s640x640/50050168_288718498665742_1621002317225338959_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/13b56f8449a90ac90504eb26ffda8ea9/5CBD5E66/t51.2885-15/sh0.08/e35/s640x640/50030099_2215153008753886_6195491990221852619_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/a02dd9416965f7f5de9cc063881a6da9/5CBF37DF/t51.2885-15/sh0.08/e35/s640x640/49573754_2215704865370833_4377890919128860830_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/517072bac809ee4b01178ab031262d00/5CDE3FD2/t51.2885-15/sh0.08/e35/p640x640/49513812_245339746362947_3051696781557949818_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/6827999ff8aaed46cfd825356584c91a/5CC867A0/t51.2885-15/sh0.08/e35/s640x640/47691703_138215260533524_8854908795802094457_n.jpg?_nc_ht=scontent.cdninstagram.com`,
        `https://scontent.cdninstagram.com/vp/b8d10eb1e205b20a113be258e54c3a5a/5CCBA09D/t51.2885-15/sh0.08/e35/p640x640/47693652_314930105808092_4862334254119211800_n.jpg?_nc_ht=scontent.cdninstagram.com`
    ];
    // Render them into the HTML.
    for (var i = 0; i < photosSrc.length; i++) {
        var template = `<div class="card js-instagram-clickable border-0">
    <img data-indexId="${i}" class="img-fluid" src="${photosSrc[i]}" />
</div>
`;
        $(`.card-columns`).append(template);
        // Fill the carousel
        var carouselContent = `<img src="${photosSrc[i]}" alt="">`;
        $('.owl-carousel').append(carouselContent);
    }
    // Initialize the carousel

    var instagramCarousel = $('.owl-carousel');
    instagramCarousel.owlCarousel({
        items: 1,
        // Check the number of items and display it.
        onInitialized: function(e) {
            $(`#js-total-image`).text(e.item.count);
            // $(`#js-current-image`).text(e.item.index);
        },
        // Check the current image index and display it.
        onChanged: function(e) {
            $(`#js-current-image`).text(e.item.index + 1);
            // Make sure the height of the modal updates.
            $(`.modal`).modal('handleUpdate');
        }
    });

    // Initialize the carousel controls.
    $(`#js-next`).click(() => {
        instagramCarousel.trigger(`next.owl.carousel`);
    });
    $(`#js-previous`).click(() => {
        instagramCarousel.trigger(`prev.owl.carousel`);
    });
    // Screenfull is a small library that can accurately take advantage of the fullscreen API across multiple browsers.
    $(`#js-fullscreen`).click(() => {
        if (screenfull.isFullscreen) {
            screenfull.exit();
        } else {
            screenfull.request();
        }
    });
    // Initialize the close button.
    $(`#js-close`).click(() => {
        $(`.modal`).modal(`hide`);
    });
    // Make sure to close the modal when clicking on the empty space between the buttons.
    $(`.js-carousel-controls`).click((e) => {
        if (e.target.nodeName == `DIV`) {
            $(`.modal`).modal(`hide`);
        }
    });
    // Show and hide the modal on click.
    $(`.js-instagram-clickable`).click(function() {
        // Determine which image is supposed to be shown.
        var clickedImg = $(this)
            .find(`img`)
            .attr(`data-indexid`);
        instagramCarousel.trigger(`to.owl.carousel`, [clickedImg]);
        $(`.modal`)
            .modal(`show`)
            // Exit fullscreen in case it's enabled when exiting from the fullscreen carousel.
            .on(`hide.bs.modal`, () => {
                if (screenfull.isFullscreen) {
                    screenfull.exit();
                }
            });
    });
})();
