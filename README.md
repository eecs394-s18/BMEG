# Building Materials Environmental Guide (BMEG)
## Description
Automating BMEG to allow construction professionals to find the most environmentally friendly and cost effective building materials post natural disasters

Flow of the BMEG app (all of the pages are located in the src folder):
Home Page-> Regionsurvey Page-> Search Page-> Results Page-> Buildingplans Page
[Insert video of the app in use]

## Prerequisites

- Node >= 8.0
- Python >= 2.7
- Git CLI

## How to download and install the app

In terminal, type the following commands:

```
mkdir BMEG
git clone https://github.com/eecs394-s18/BMEG.git .
cd BMEG_app
npm install
```

## How to build anad deploy the app
### Web deploy
```
ionic serve
```
### iOS deploy
```
ionic cordova build ios --prod --release
```
### Android deploy
```
ionic cordova build android --prod --release
```
If you run into problems refer to [Deploying to a Device](https://ionicframework.com/docs/intro/deploying/).

## Limitations
Currently, however, the algorithm that finds the cheapest and most environmentally friendly building materials only works for an input of between 10-12 materials. As a result, the region survey page should reduce the number of viable materials on the next page where the user selects unavailable materials), but currently that piece of code is commented out. Additionally, the user is only allowed to select up to two unavailable materials.

## How to update the app as the algorithm provides more data
Instructions to update the app to incorporate data from updated algorithm:
1. The algorithm that finds the best combination of materials given a list of materials outputs the results in a csv format. Here is the Python script that converts that csv to a JSON file [link to Python script]
2. Here is where you copy and paste the updated JSON file [insert where to copy and paste json]
3. After the "Find Materials" button on Regionsurvey page is clicked, it is supposed to narrow down the materials shown to the user in the drop down menu on the Search page. Currently, since the algorithm that determines which materials to use based on lowest cost and energy only works for 2 unavailable materials, the line of code that actually reduces the number of materials shown on the Search page is commented out. Once the algorithm is updated to work for all combinations of materials, you can uncomment this line of code:
[insert line of code to uncomment to narrow down the material list after the region survey]
