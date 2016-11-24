
$(function() {

    describe('RSS Feeds', function() {
        //Checks all RSS feedsare defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Checks all url properties are defined and not empty
         allFeeds.forEach(function(allFeeds){
           it('have URLs', function() {
             expect(allFeeds.url).toBeDefined();
             expect(allFeeds.url.length).not.toBe(0);
           });

         //Checks all name properties are defined and not empty
          it('have names', function() {
            expect(allFeeds.name).toBeDefined();
            expect(allFeeds.name.length).not.toBe(0);
           });
       });
    });


    //New suite named "The menu"
    describe('The menu', function() {

         //Checks menu element is hidden by default or not
         it('is hidden by default', function(){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

          //Checks menu element is visible when clicked and hidden when clicked again or not
          it('is visible when clicked and hidden when clicked again', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });

    //New suite named "Initial Entries"
    describe('Initial Entries', function() {

         //Calls the loadFeed function
         beforeEach(function(done){
           loadFeed(0,done);
         });
         //Checks at least 1 entry element is present inside feed container or not
         it('has at least single .entry element within .feed container', function(done) {
           expect($('.feed').children().length).not.toBe(0);
           done();
         });
       });

    //New suite named "New Feed Selection"
    describe('New Feed Selection', function() {

         var feedContents;
         //Calls the loadFeed function with 2nd allFeeds property
         beforeEach(function(done) {
            loadFeed(1, done);
            feedContents = $('.feed').html();
          });
        //Checks new feed has been loaded or not
        it('is loaded by the loadFeed function', function(done) {
          loadFeed(0);
          expect($('.feed').html()).not.toEqual(feedContents);
          done();
        });
        });
}());
