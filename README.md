# AnalogDeviceProject

# Features
1. List of Users with some profile details
<img width="1435" alt="Screen Shot 2022-09-15 at 15 40 08" src="https://user-images.githubusercontent.com/22813669/190497702-ce410ff1-3dea-47f4-9a58-a7f0deb17285.png">

2. Pagination

<img width="1435" alt="Screen Shot 2022-09-15 at 15 40 29" src="https://user-images.githubusercontent.com/22813669/190498012-1501cbe9-2b5a-4a53-8bff-e9cd962ccb90.png">

<img width="1435" alt="Screen Shot 2022-09-15 at 15 40 41" src="https://user-images.githubusercontent.com/22813669/190498109-03cf212f-7ec1-4ade-acc2-a9f5ab073918.png">

3. Sort on every column. It supports both increasing and decreasing order. 
   1. The example shows sorting(increasing) on username.
      <img width="1435" alt="Screen Shot 2022-09-15 at 15 41 06" src="https://user-images.githubusercontent.com/22813669/190498176-0ae8c8fc-f113-410a-b4c3-946d43e86b2e.png">
   2. The example shows sorting(decreasing) on followers
      <img width="1438" alt="image" src="https://user-images.githubusercontent.com/22813669/190501451-93fa9870-d81c-423f-b052-30607ce0ade6.png">


4. List of repositories on button click
<img width="1438" alt="Screen Shot 2022-09-15 at 15 41 47" src="https://user-images.githubusercontent.com/22813669/190498268-56335000-a57d-4a26-9a71-d6462aed7fe4.png">

5. Search the entire table using the search bar. The search is supported on all columns. In this case search "ar" results in two rows because in the first row the name has string "ar" and in the second row the username and name both have string "ar".
<img width="1438" alt="Screen Shot 2022-09-15 at 15 42 10" src="https://user-images.githubusercontent.com/22813669/190498392-9027f798-846f-41f0-ad33-446bddb7ce25.png">

6. Add new user using add username button and providing the github username.
<img width="1438" alt="Screen Shot 2022-09-15 at 15 43 32" src="https://user-images.githubusercontent.com/22813669/190498455-e61affbf-19fb-4914-83e6-b6a86607cf67.png">

7. Script - A script is provided inside the backend directory which can take multiple github usernames and add them to mongodb.

# Directory Structure
* Frontend - contains all the code for front end.
* Backend 
  * app.py - Server
  * script.py - Script

# Note
Please note that some of the data seen in the screenshot are fabricated to show features like search and pagination. 
