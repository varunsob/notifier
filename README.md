# Notifier
A responsive webpage with 3 input fields that notifies the user if someone else is also updating a field on this page.

Scenario :
  - User X opens a page (in any browser, web or mobile IE10+, FF, Chrome – latest, Safari) which has 3 input fields (First Name : text field, Last Name : text field and Gender : dropdown [M, F]). User X keeps it open.

  - User Y opens same page (in any browser, web or mobile IE10+, FF, Chrome – latest, Safari) and started entering values into those fields.

Expected result :
  - User X will be notified saying “User Y is currently changing ‘<Field_Name>’”. You don’t need to persist those notifications.

Libraries :
  - Bootstrap : For responsive design
  - JQuery : Javascript library
  - Pusher : It facilitates Pub/Sub implementation for browsers and mobile devices.

Prerequisite :
  - Web Server : Apache
  - PHP
  
  You can either install these separately or simpler way would be to install XAMPP which can be downloaded from https://www.apachefriends.org/download.html

Running on Local :
  - Download master and extract the directory structure to htdocs (\xampp\htdocs\)
  - Once you have localhost working successfully, you should be able to access http://localhost/notifier/
  - Open multiple browser windows/tabs to test feature.

Demo :
  - The implementation has been hosted and is avaiable at http://submissions.varunsobti.com/notifier/

Limitations:
  - The solution has been implemented considering only 2 users for now. If a third user opens a new tab, then other 2 users will see the most recent notification. For example, user X and user Y are on field 1 and field 2 respectively. When third user comes and starts editing field 3, both user X and user Y will have notification for field 3.
  - The solution can also be enhanced to show which user is editing which field simultaneously.
  - Currently, only one i.e most recent notification is being displayed.
