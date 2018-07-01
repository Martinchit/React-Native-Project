# 
-minute
30 Apr 2018

feature - visualise the availability by the density of color
feature - display hidden folder by command
styling - reference the style of terminal showing the digital calendar
mode - normal mode vs programmer mode -> normal mode with buttons
styling - fixed input box at the bottom
route - non-refresh get / post
command - /today = check date by month and day then go to database. => handlebars /
￼
daily tasks
- set up the server and basic html with black and white style
- set database ‘users’ ‘one-to-many’ ‘
- register users in local database
- set up new repo and express-generator start off a new project

03 May 2018 - recipe and exercise app (redirected)
- wireframe
- seek if any api about exercise and how much calories related exercises
- any similar app / website
- layout / front-end could first thing to do
- seek exercise api /
Intro: This app/website aims to display charts of the discrepancy between calories intake (and nutritions) and calories burned. This app estimates calories intake by calling food API and calories burnt by our database (?).

/ As we talk in the afternoon 02 May :
For database:
setup user table containing
- height, weight , gender, bob and atEase (a spot user avoid to exercise), goal(purpose: aerobic ,gain muscle, ETC)
- diet-record (what users have eaten and what time (morning, noon and night)
- exercise categorisation according to body parts (e.g shoulder, tight and bicep)
- For calculation is to be confirmed by Brad.

##07-May-2018
- databse draft decided ( in /frame)
- front-end updated
- calculation formulation decided

##08-May-2018
- seed file done and fk link-up
- passport local login and bcrypt working okay, only those users with has can login
- Brad shifted to front-end
- Parker set up router and link up server and db
- Shawn is on back-end

##09-May-2018
- wireframe and database structure redesigned, muscles_gp removed, whole thing simplified
- product MVP direction is changed, this website only consider calories , no other function until primary one has been finished
- MVP (minimum viable product) 
- => display users' calories consumed and burnt in a chart
- => users can input ##exercise and ##food in text-area, through server to call api to get calories, then save to db

##10-May-2018
- client side call nutritionix api okay
- public folder added

##11-May-2018
- index page updated with sucessful log-in and sign-up
- now nutritionix api only can be called through server => client post request -> server received and post request api -> back to client
- passport-session fixed
- dashboard page(after logged in page) is missing
- chart is okay, need backend's knex to select number input to chart

##12-May-2018
- client can get food and save to db
- client can get exe calculation done and save to db
- dashboard page(after logged in page) is missing
- chart is not okay as start date cannot be customised
- ***Possibly it's better use handlebars to deal with html
- 
