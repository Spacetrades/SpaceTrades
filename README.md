[!(Build Status)][https://travis-ci.org/Spacetrades/SpaceTrades.svg]
# SpaceTrades
## Buying and Selling Locally Through Meetups

## Trello

https://trello.com/b/IETMH34k/meteor-development
    
## Docs

- [:computer: Spacebars Docs](http://meteorcapture.com/spacebars/)
- [:computer: Meteor Docs](http://docs.meteor.com/)
- [:computer: Meteor Roles Docs](http://alanning.github.io/meteor-roles/classes/Roles.html)
- [:computer: Iron Router Docs](https://github.com/iron-meteor/iron-router/blob/dev/DOCS.md)
- [:computer: Chart JS Docs](http://www.chartjs.org/docs/)
- [:computer: Autoform Docs](https://github.com/aldeed/meteor-autoform)
- [:computer: Coffeescript](http://coffeescript.org/)
- [:computer: Google Maps](https://developers.google.com/maps/documentation/javascript/reference?hl=en)

## Stylesheets
- [:computer: jQuery Style Guide](http://contribute.jquery.org/style-guide/js/)

- [:computer: Unofficial Meteor Faq](https://github.com/oortcloud/unofficial-meteor-faq)
- [:computer: Meteor Manual](https://manual.meteor.com/)
- [:computer: Todo Example Site](https://github.com/meteor/simple-todos)
- [:book: Meteor Tips](http://meteortips.com/book/forms/)
- [:computer: Discover Meteor](https://www.discovermeteor.com/)
- [:computer: Iron Router](https://github.com/iron-meteor/iron-router/tree/devel/examples)
- [:computer: General](https://meteorhacks.com/)
- [:computer: Easy Search](http://matteodem.github.io/meteor-easy-search/)
- [:computer: MongoDB](http://docs.mongodb.org/manual/)
- [:computer: SO Meteor Q's](http://stackoverflow.com/questions/tagged/meteor)
- [:computer: Edit Meteor Online](http://meteorpad.com/)
- [:computer: Meteor packages online](https://atmospherejs.com)
- [:computer: General](https://www.discovermeteor.com/blog/javascript-for-meteor/)
- [:computer: General](http://www.meteorinaction.com/)
- [:computer: Meteor Tut's](https://kadira.io/academy/)
- [:computer: Meteor Forum](https://forums.meteor.com/)
- [:computer: Meteor Tut's](http://www.eventedmind.com/)
- [:book: Meteor tips](http://meteortips.com/book/)
- [:computer: General Blog](http://joshowens.me/)
- [:newspaper: Meteor News](http://thisweekinmeteor.com/)
- [:musical_note: Meteor Podcast](http://meteorpodcast.com/)
- [:newspaper: Meteor News](http://crater.io/)
- [:computer: Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq)
- [:book: Meteor-Cookbook](https://github.com/awatson1978/meteor-cookbook)
- [:computer: Improving Meteor performance](http://projectricochet.com/blog/meteor-js-performance)
- [:computer: Deploy to personal linux server (1)](http://lukaszkups.net/blog/0006_deploying_meteorjs_app_to_own_server_via_ssh/)
- [:computer: Deploy to personal linux server (2)](https://gentlenode.com/journal/meteor-19-deploying-your-applications-in-a-snap-with-meteor-up-mup/41)

## Design Principles
1. If it works, don't fix it
2. Remain consistent (Keep order in chaos)
3. Less is more
4. Better to undersalt then oversalt on design
5. ST is holistic and every part no matter how small reflects the whole
6. Consider automation at every instance of feasibility
7. **DRY**
8. Go the step further. Always go a little bit beyond the standard design practice so that users understand the site is willing to go the extra mile for them.
9. You are not designing for yourself
10. Provide content with the least amount of information as possible for readability sake.
11. Just because functionality can exist doesn't mean it should
12. Find simplicity in confusing complexity. Don't let users get lost.

## Commit Messages Language ( CML )
```
Extensive undertandability is less crucial in the beginning stage of development and for this reason it is not necessarily helpful to use highly descriptive commit messages. Once everything works, better documentation can be added. 
```
### Keywords:
	INIT - First Commit
	UPDATE - Changes due to involuntary updating of versions
	EDIT - Edit existing file, ADD - Add code, RM - Remove code
	ADD - Add new file
	RM - Remove File
	RN - Rename existing file or files
	// - Comment
	Rm - Readme
	md - Markdown
	STYLE - Commits mostly for styling purposes
	FIX - Something broken has been fixed, not just a change for preference but a solution to a noticeable defect
	USE - Something new piece of functionality is finally being used
	LOTS - Lots of changes have been made and I'm to lazy to create commit messages for all the changes
	MINOR - A few changes have been made
	WARN - This commit may be hazardous but i'm commiting anyway :smirk:
	CRUCIAL - This commit deals with (FIX, BREAK, CHANGE)'s a core part of the application
	-// - Comments have been removed
	HOTFIX - FIX for either LOW, MEDIUM or CRUCIAL issue quickly
	CAT - Commits based mostly on categorization. Ex: Creating new folders for code, moving code bits around. Merging files...etc
	INFECT - Merge is receiving errors
	MANDATE - Specify necessary tasks of a file that must be accomodated. These can be style rules or required jobs to complete.

## Sublime Stuff
	[
	{ "keys": ["ctrl+shift+r"], "command": "reindent" },
	{ "keys": ["ctrl+alt+shift+w"], "command": "close_all" } Closes Tabs

	Make one for refreshing folders
	]

## Inline Comments:
	TASK - A task to complete in a certain file
	COMMENT REASON - Specify the reason why you have left the code commented and have not simply removed it
	BREAK - Something is breaking 
	BREAK CRUCIAL - Something is breaking which is crucial for the site
	IDEAL - A suggestion to do something differently or a way that may or may not be possible soon but is ideal
	FMT - Data is good but display isn't. Data should be displayed in a different way as specified.

## Server:
	/opt/spacetrades - Location of ST files
	server - ~/.bash_profile command for ssh server login
	Run -  npm update mup -g if Error OR Try again and it might actually work the second time *facepalm*

	Meteor.users.update( Meteor.userId(), {$push: { "profile.files": downloadUrl } } );

	https://www.resrc.it/
	Use Lookback SEO

## Tasks:
	ChatOps
	https://www.resrc.it/pricing/us
	Implement Flow Router and Flow layouts
	Make system for cutting out TASKS and sending with @
	Make subtle animation on offer count change
	Make Social media profiles for those included in footer

## Formatting:
	Mongo - Listing.find({ _id: id}); NOT Listing.find({_id:id});
	jQuery - $( ".cardul" ).hide() NOT $(".cardul") AKA Parenthesis Padding *PP*
	SCSS - ALLOW double letter bonding Ex: .prohibiteddiv and NOT .prohibitediv
	LR - Left Right
	JS - Conditional blocks receive 1ln padding on top and bottom
	JS - Comments receive 1ln padding on top
	JS - If else blocks evade previous rule
	JS - Line breaks must always be purposeful
	JS - LR 1char spacing for mathematical characters
	JS - Single Line, Block, Inline Comments
	JS - Block uses Dividers with Open: * x 4 : //C// and //-C//
	JS - Objects get there own TB 1ln padding
	JS - Significantly different code sections receive BL 1ln padding
	JS - Console.log's get grouped if possible into sections using //L// and //-L//
	URL Names - Do not group words that end and begin with the same letter for readability sake. Ex: selllisting - Bad, listingsell - Good
	Files - Everything of its own significant gravity should be its own file
	JS Callback functions - Keep on same line as caller function Ex:$(".searchRefineCategories li input").each( function () {
	JS - New functionality requires a brief comment before it. This may be removed eventually

## Rand
	npm install -g eslint
	npm install -g babel-eslint
	npm install -g eslint-plugin-react

## Dependencies
	accounts-facebook               1.0.4  Login service for Facebook accounts
	accounts-password               1.1.1  Password support for accounts
	accounts-ui                     1.1.5  Simple templates to add login widgets to an app
	alanning:roles                  1.2.13  Role-based authorization
	aldeed:autoform                 5.3.2  Easily create forms with automatic insert and update, and automatic reactive validation.
	aldeed:collection2              2.3.3  Automatic validation of insert and update operations on the client and server.
	bozhao:accounts-instagram       0.2.0  Instagram account login for meteor
	chart:chart                     1.0.1-beta.4  Chart.js (official) - Responsive, simple, clean and interactive charts using HTML5 <canvas>
	coffeescript                    1.0.6  Javascript dialect with fewer braces and semicolons
	dburles:google-maps             1.1.1  Google Maps Javascript API v3
	edgee:slingshot                 0.7.1  Directly post files to cloud storage services, such as AWS-S3.
	email                           1.0.6  Send email messages
	fortawesome:fontawesome         4.3.0  Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina friendly
	fourseven:scss                  1.2.3* Style with attitude and autoprefixer.
	francocatena:compass            0.5.1  Stylesheet Authoring Environment that makes your website design simpler
	gadicohen:headers               0.0.27  Access HTTP headers on both server and client
	houston:admin                   2.0.3  A zero-config Meteor Admin
	http                            1.1.0  Make HTTP calls to remote servers
	iron:router                     1.0.9  Routing specifically designed for Meteor
	jeremy:snapsvg                  0.4.1_2  The JavaScript library for modern SVG graphics. http://snapsvg.io
	jquery                          1.11.3_2  Manipulate the DOM using CSS selectors
	juliancwirko:s-alert            2.4.1  Simple and fancy notifications / alerts / errors for Meteor
	kevohagan:sweetalert            1.0.0  a beautiful replacement for javascript's alert()
	less                            1.0.14  The dynamic stylesheet language
	lookback:seo                    1.1.0  Automatically add meta, OpenGraph and Twitter tags from your Iron Router routes.
	markdown                        1.0.4  Markdown-to-HTML processor
	matthew:foundation5-sass        1.0.0  Foundation 5 with Sass support
	mdg:camera                      1.1.4  Photos with one function call on desktop and mobile.
	mdg:geolocation                 1.0.3  Provides reactive geolocation on desktop and mobile.
	meteor-platform                 1.2.2  Include a standard set of Meteor packages in your app
	meteorhacks:fast-render         2.7.1  Render your app before the DDP connection even comes alive - magic?
	meteorhacks:kadira              2.22.1  Performance Monitoring for Meteor
	meteorhacks:npm                 1.4.0  Use npm modules with your Meteor App
	meteorhacks:search-source       1.4.0  Reactive Data Source for Search
	mike:mocha                      0.6.2  Run mocha tests in the browser
	mizzao:jquery-ui                1.11.4  Simple lightweight pull-in for jQuery UI in Meteor
	mizzao:user-status              0.6.5  User connection and idle state tracking for Meteor
	multiply:iron-router-progress   1.0.1  Progressbar for iron:router
	nemo64:bootstrap                3.3.5_2  Highly configurable bootstrap integration.
	npm-container                   1.1.0+ Contains all your npm dependencies
	peerlibrary:blaze-components    0.13.0  Reusable components for Blaze
	percolatestudio:segment.io      3.0.0  Segment.io integration for Meteor (works on both client and server) at version 1.0.3
	practicalmeteor:chai            2.1.0_1  The Chai Assertion Library, v2.1.0
	raix:handlebar-helpers          0.2.4  Handlebar helpers
	richsilv:pikaday                1.0.1  Pikaday JavaScript Datepicker for Meteor — lightweight, no dependencies, modular CSS
	ryanswapp:spectrum-colorpicker  0.0.1  A meteor wrapper for the spectrum colorpicker
	sacha:spin                      2.3.1  Simple spinner package for Meteor
	service-configuration           1.0.4  Manage the configuration for third-party services
	tmeasday:publish-counts         0.5.1  Publish the count of a cursor, in real time
	todda00:friendly-slugs          0.3.3  Generate URL friendly slugs from a field with auto-incrementation to ensure unique URLs.
	u2622:persistent-session        0.4.0* Persistently store Session data on the client
	underscore                      1.0.3  Collection of small helpers: _.map, _.each, ...