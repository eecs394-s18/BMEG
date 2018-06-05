Flow of the BMEG app (all of the pages are located in the src folder):
Home Page-> Regionsurvey Page-> Search Page-> Results Page-> Buildingplans Page
[Insert video of the app in use]

Instructions to update the app to incorporate data from updated algorithm:
(1) The algorithm that finds the best combination of materials given a list of materials outputs the results in a csv format. Here is the Python script that converts that csv to a JSON file [link to Python script]
(2) Here is where you copy and paste the updated JSON file
[insert where to copy and paste json]
(3)After the "Find Materials" button on Regionsurvey page is clicked, it is supposed to narrow down the materials shown to the user in the drop down menu on the Search page. Currently, since the algorithm that determines which materials to use based on lowest cost and energy only works for 2 unavailable materials, the line of code that actually reduces the number of materials shown on the Search page is commented out. Once the algorithm is updated to work for all combinations of materials, you can uncomment this line of code:
[insert line of code to uncomment to narrow down the material list after the region survey]

Ionic tutorials:
[Insert Ionic tutorials]