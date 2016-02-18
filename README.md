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
	// - Comment
	ADD - Add new file
	BEWARE - Specify something that should not be done and explain what should be done.
	BREAK - Something is breaking 
	CAT - Commits based mostly on categorization. Ex: Creating new folders for code, moving code bits around. Merging files...etc
	CLEAN - Remove comments, or complete task in cleaning a file
	COMMENT REASON - Specify the reason why you have left the code commented and have not simply removed it
	CRUCIAL - Crucial for the site
	CRUCIAL - This commit deals with (FIX, BREAK, CHANGE)'s a core part of the application
	EDIT - Edit existing file, ADD - Add code, RM - Remove code
	FIX - Something broken has been fixed, not just a change for preference but a solution to a noticeable defect
	FMT - Data is good but display isn't. Data should be displayed in a different way as specified.
	FUNC - Important Function
	HOTFIX - FIX for either LOW, MEDIUM or CRUCIAL issue quickly
	IDEAL - A suggestion to do something differently or a way that may or may not be possible soon but is ideal
	IF - Explanation for an if conditional
	INIT - First Commit
	LOTS - Lots of changes have been made and I'm to lazy to create commit messages for all the changes
	MANDATE - Specify necessary tasks of a file that must be accomodated. These can be style rules or required jobs to complete.
	md - Markdown
	MINOR - A few changes have been made
	ORG - Change in file orgization likely resulting in falsely displayed code additions
	PERMIT - Specify condition allowed in conditions
	PRECHECK - Precheck form input before processing
	PSEUDO - Specify pseudo code for a complicated system
	RESET - Resets a form for next use
	Rm - Readme
	RM - Remove File
	RN - Rename existing file or files
	SMALL - Minimal changes, doesn't need a commit message
	SET - Set an important variable. Only for variables that are confusing / highly important
	STRICTLY - Only applies to certain circumstances. ( production vs dev code)
	STYLE - Commits mostly for styling purposes
	TASK - A task to complete in a certain file
	TODO: Specify tasks to complete
	UPDATE - Changes due to involuntary updating of versions
	USE - Something new piece of functionality is finally being used
	WARN - This commit may be hazardous 
	-// - Comments have been removed

## Sublime Stuff
	[
	{ "keys": ["ctrl+shift+r"], "command": "reindent" },
	{ "keys": ["ctrl+alt+shift+w"], "command": "close_all" } Closes Tabs

	Make one for refreshing folders
	]

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
	Only select images you have license to use

	duplicate system

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

