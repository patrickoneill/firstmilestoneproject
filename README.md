# First Milestone Project
## Reasons and target audience

This project is formed around an ordering website for fresh food delievery
It is aimed towards all consumers from business to office to home delivery

With my current line if work I looked into the idea on a fresh ordering site in which i have experence in using.
I am alway in touch with one local supplier that doesnt have a web presence but a big customer range and everything is ordered over the phone
<h4>Website</h4>
In creating this project I have made a 5 page website with a downloadable pdf file for off line ordering

Here is a link to the finished product <a href="https://patrickoneill.github.io/firstmilestoneproject/">Click Me!!</a>

Within this project the technologies used:
- HTML5
- CSS3
- Bootstrap 3 

<h4>Overall Layout</h4>
<h5>Header section</h5>
The overall layout of the pages consist of an image for the business which is also a link to the home page for users to return to at any time.
A login section for returning users for placing orders faster (fucture addjustment will have plans for a repeat order of favourites) and then
a section for signing up to the website for future returning cumtomers.
<h5>Navigation</h5>
- Then the navigation bar (from bootstrap) with all the links to each page (5 in total) and a search bar for easy product or information results.
    
- In the testing of the site on small devices and screen width I cam across some minor issues in design.
        
- For smaller devices the navbar resixed but i was left with a large area with all the links just in a in-line block formation
        so adjusted it so that the navbar collapsed. Now it has the recognisable dropdown (burger icon)
        
- Further issues that occured on resizing the browser the Searchbar didn't resize with the rest of the navbar and droping to the next line
  creating a larger navbar. Replaced the searchbar with a glyphicon button that when clicked drops down a search area, and when resize the 
  previous issue does not occure and sits nicely in the collapsed navbar.

<h5 >Main Section</h5>
Section area where the main body of information on the website and functionality.

<h6>index.html</h6>
- The aspects on the index.html/ home page are the main h1 and h2 tags for the website
and then an offers and products available. 
- On making the wireframing of the site I had the idea for the use of a carousel for the offers and to be visually 
pleasing with them on a loop, but I had run into some issues with the code not picking up the image refs and decided to try a slideshow but had similar problem.
I proceded with the original plan of the carousel and had found I was missing the JQuery link at the bottom and a small piece of Java Script to run the carousel.
Fixed the file path for the images and now everything is running and looking well on smaller deviced.

<h6>orders.html</h6>
- I created a form from scratch for users to complete there orders, using table tags, check buttons and dropdown for the quantity for items they wish to order.
- There is a section below stating the price of delivery for orders and a searchbar for location on google maps (not yet linked in to the map API).
- Included a google map API as well for users to see there distance and there rough idea for the price.


<h6>signinLogin.html</h6>
- This is a basic information page for either logining in or to create an account with the company. Information such as name, address, email and contact number.
- There is aso the option if needed to continue as a guest.

<h6>contact.html</h6>
- This is the basic info for the company in order for the customer to contact them, the likes of phone numbers, email, opening times and then a location for them to see 
where the company resides if the chose to collect the order.
- I have had an issue with the google map on smaller devices on the position in which it lines up in the page

<h6>about.html</h6>
- This is the story of the company, what we are about. Each paragraph has a glypficon at the start of them but can be later changed to photos of staff and product if needed
- There is a comment section on the page for user and customer feedback. At the moment it is just a false mockup of what can be achieved later.
- Position problem on smaller devices. Icon are set off the coloured area. Need to adjust with some css classes.

<h6>orderinvoice.pdf</h6>
- Basic table of products for the customer to download and use offline. Linked in at the bottom of the page, may need a link on the navbar.


<h5>Footer section</h5>
- Consists of three small sections with some quick information (similar to the resume project). There is the email and phone number
for the company, a download glyphicon for an order invoice for customers to be able to print off the list of products and prices for making a list 
of what is needed to order. And we have a social media section for quick links to there profiles and have used the corisponding font awsome icons.

<h5>Testing & Feedback</h5>
So far I have just used friends and family for this.
Through them I have come across issues with layout and some of the functions
<h6>Results</h6>
- index.html:
    - Make the name of the company more visable ont head of the page and not just on the navbar.
    - The page is a bit plain, could do with a little bit more information.
- Carousel:
    - initially it worked but would hit a dead end and the images would collapse, this got me to got back and find the javascript that would run correctly.
- order.html
    - Overall the layout and the information on the page is good, no prices on the site is only thing that is missing.
- Feedback on carousel 
    - Add a function when image is clicked that it brings you to the product or the page.
- 

<h5>Wireframes<h5>

![dsc_0298](https://user-images.githubusercontent.com/33999607/51115959-9d069900-1801-11e9-9e01-d4be6014dc46.JPG)

![dsc_0299](https://user-images.githubusercontent.com/33999607/51116002-b90a3a80-1801-11e9-9007-a17264b78555.JPG)

![dsc_0300](https://user-images.githubusercontent.com/33999607/51116011-bd365800-1801-11e9-99de-5ae790c008a4.JPG)

![dsc_0301](https://user-images.githubusercontent.com/33999607/51116023-c6272980-1801-11e9-9965-4a00bcd6f934.JPG)

![dsc_0303](https://user-images.githubusercontent.com/33999607/51116029-ca534700-1801-11e9-9438-07fa2c5b9da8.JPG)
