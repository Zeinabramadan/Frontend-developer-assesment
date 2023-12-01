# Frontend-developer-assesment
This is an assesment for a front end developer.

Welcome Candidate and thank you for taking the time to complete the Cayesh take-home challenge for our frontend engineer position

You will have 2 days to complete the assignment. Once you have completed your solution, please send an email to moosama@cayesh.com & ryehia@cayesh.me with a link to a github repository and instructions on how to install / run the application

The goal of this challenge is to build out a "Movie Awards 2021" interactive ballot. Please clone this repository and submit it once you are finished.

Here are the rules of this challenge.. you must:

1- Build an application that displays a list of categories and nominees. follow the design in the wireframe below.
2 - First build a page for login with its authentication ( using RTK ), and in the nominees page , there will be a navbar with  
 this sentence "Hi, {{logged in user }}"
and besides it a button to log out to return to the login page again.
3 - you can mock json api with data from the wireframe below. Use the React useEffect hook to fetch the ballot data from the provided API ( you can use Redux toolkit query as a bonus ), and save it to state by using the Redux toolkit.
4 - When you click on a nominee, we should highlight the nominee card and save the selections using the Redux toolkit. A user can only select one nominee per category, and we should be able to see all of their selections highlighted. The selected nominee card should follow the style guides below.
Make the layout responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width).
5 - Once the user is finished making their selections, they can click on a submit button that displays a results modal screen. A user can dismiss the modal by clicking on the close button (follow the wireframe below).


# Requirements:
1 - All navigation should happen in the same page
2 - Demonstrate use of Redux toolkit and React hooks
3 - Demonstrate knowledge of component modularization
4 - Utilize CSS to create the layout of the page. Add hover styles to the items the user is interacting with.
5 - Create components as you feel is best suited for your solution.
6 - the authentication must be built using RTK.





![take-home-wire](https://github.com/MohamedOsamaAbdellah/Frontend-developer-assesment/assets/36635247/2cda3db4-6e22-42d9-a991-9bb4571a3d38)






![take-home-success](https://github.com/MohamedOsamaAbdellah/Frontend-developer-assesment/assets/36635247/aa7fd611-d203-4876-ab76-88046781409c)


# Bonuses
* Make it pretty
* Make it accessible
* Add unit tests
* Use Redux Toolkit query


# Styling Guidelines
* Use the "Roboto" Google font

* Use the following colors

* Page background: - #0D2436 #0D2436
    Default/normal font color: #FFFFFF #FFFFFF
    Hover font color: #CCCCCC #CCCCCC
      - Nominee card / submit button background: #009B86 #009B86
    Selected Nominee card: #009B86 #009B86
    Nominee card background hover / submit button background hover: #34AC9C #34AC9C

  
Good luck and if you have questions, please reach out to us at moosama@cayesh.me 





