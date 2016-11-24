$(function() {

    describe('RSS Feeds', function() {
        //Checks all RSS feedsare defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Checks all url properties are defined and not empty
        it('have URLs', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });
        //Checks all name properties are defined and not empty
        it('have names', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });
        });;
    });


    //New suite named "The menu"
    describe('The menu', function() {

        //Checks menu element is hidden by default or not
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //Checks menu element is visible when clicked and hidden when clicked again or not
        it('is visible when clicked and hidden when clicked again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //New suite named "Initial Entries"
    describe('Initial Entries', function() {

        //Calls the loadFeed function
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        //Checks at least 1 entry element is present inside feed container or not
        it('has at least single .entry element within .feed container', function() {
            //No of feeds
            console.log($('.feed .entry').length);
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    //New suite named "New Feed Selection"
    describe('New Feed Selection', function() {

        var contentFeed;

        //Calls the loadFeed function with 4th allFeeds property
        beforeEach(function(done) {
                loadFeed(3, function() {
                    contentFeed = $('.feed').html();
                    done();
                });
            })
            // feedContents = $('.feed').html();

        //Checks new feed has been loaded or not
        it('is loaded by the loadFeed function', function(done) {
            //If make it to equal with the above
            //loadFeed function's 1st argument, then
            //spec fails
            loadFeed(2, function() {
                //Checks if particular feed's content is empty or not
                console.log($('.feed').find('h2')[2].textContent);
                //Compare 3rd and 4th allFeeds's property html content
                expect($('.feed').html()).not.toEqual(contentFeed);
                done();
            });
        });
    });
}());
