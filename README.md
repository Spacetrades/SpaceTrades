[!(Build Status)][https://travis-ci.org/Spacetrades/SpaceTrades.svg]
# SpaceTrades
## Buying and Selling Locally Through Meetups

## Trello

https://trello.com/b/IETMH34k/meteor-development
    
## Resources

- [:computer: Spacebars Docs](http://meteorcapture.com/spacebars/)
- [:computer: Meteor Docs](http://docs.meteor.com/)
- [:computer: Unofficial Meteor Faq](https://github.com/oortcloud/unofficial-meteor-faq)
- [:computer: Todo Example Site](https://github.com/meteor/simple-todos)
- [:book: Meteor Tips](http://meteortips.com/book/forms/)
- [:computer: Discover Meteor](https://www.discovermeteor.com/)
- [:computer: Iron Router Docs](https://github.com/iron-meteor/iron-router/blob/dev/DOCS.md)
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

## Beginning Principles
1. If it works, don't fix it
2. Remain consistent (Keep order in chaos)
3. Nothing more, Nothing less
4. Better to undersalt then oversalt on design

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

## Inline Comments:
	TASK - A task to complete in a certain file
	BREAK - Something is breaking 
	BREAK CRUCIAL - Something is breaking which is crucial for the site
	IDEAL - A suggestion to do something differently 

## Server:
	/opt/spacetrades - Location of ST files
	server - ~/.bash_profile command for ssh server login
	Run -  npm update mup -g if Error OR Try again and it might actually work the second time *facepalm*
## Tasks:
	Implement Hubot in some way
## Formatting:
	Mongo - Listing.find({ _id: id}); NOT Listing.find({_id:id});
	jQuery - $( ".cardul" ).hide() NOT $(".cardul") AKA Parenthesis Padding *PP*
	SCSS - ALLOW double letter bonding Ex: .prohibiteddiv and NOT .prohibitediv
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
## Stylesheets
[:computer: jQuery Style Guide](http://contribute.jquery.org/style-guide/js/)
Include other language style guides JS, SCSS for reference
## Tasks
- [ ] Home Page card images aren't being cached and are rendering on every refresh
- [x] FIX annoying Nav Dropdowns that need double clicking
- [ ] Make profile user links /profile/facebookusername and NOT /profile/usermongorandomid
- [ ] Image Optimization like Kixify to mandate on width height for images and decrease image size for HD images
- [ ] Implement Chat (Meteor chat or Hipchat) and include hubot for on site deploys.
- [ ] Abandon Notifications for the future builds and begin advertising.
- [ ] ADD social listing media links to ST pages maybe near footer maybe
- [ ] ADD Sharing item on social media on addlisting and on item page
- [ ] ADD load more images button on home page
- [ ] SETUP email, with mailchimp or mailgun http://docs.meteor.com/#/full/email
- [ ] Add Go Premium
- [ ] Setup Jquery Autcomplete to 
- [ ] Switch out sAlert for sweet alerts
- [ ] Fix redirection on Addlisting submit and offer submit. Offer - Offer page. Addlisting - listing page
- [ ] http://fullcalendar.io/
- [ ] Utilize mobile url ASAP in FB