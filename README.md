# Description
This is a personal project of mine that utilizes the Github API which contains data from each Github user including repository statistics, languages, and followers. I wanted to create a unique experience when searching a Github user and viewing their repository stats such as top languages and repositories. My inspiration came from seeing all the different README’s users have created over the years since Github has upgraded their UI.

[Github api](https://docs.github.com/en/rest)

[Live Application](https://gitstatss.netlify.app/)
Hosted on [Netlify]( https://www.netlify.com/)

# Tech
GitStats is a front-end application developed with React. I chose React Context to manage the data because all the data was coming from one source and would be used globally throughout the application. I utilized React Router to seamlessly navigate throughout the different component UI’s including the login page, dashboard, and error page. 
To fetch the data from the [Github API]( https://docs.github.com/en/rest), I used the [Axios](https://www.axios.com/) library. Axios supports the promise API which makes fetching data simple and only requires a few lines of code. Once fetched, the data is filtered through functions that display a certain number of items depending on the query. For example: The top 100 followers are displayed while only the top 5 languages and specific repo stats. 
Users have the ability to log in with either an email or password (fake or real) or use their GitHub credentials to log in. I used [Auth0](https://auth0.com/) to handle the authorization and authentication. Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications.

# Usage
When first entering the site, users will be directed to the login page. Here, they can click on the login button located under the hero image. 
![login-desktop](https://user-images.githubusercontent.com/73142998/201353979-a1bfcb71-6113-4481-ad5b-e1d858e37f1f.png)

After clicking on the login button, users will be brought to the sign in/sign up page provided by [Auth0](https://auth0.com/). Here they can either sign up suing an email and password or they can sign in using their GitHub credentials.
![auth0_loginPage](https://user-images.githubusercontent.com/73142998/201354632-59effbe0-e317-4139-9b5d-fbb57d83b508.png)

After a successful sign-in, the user will be brougth to the main dashboard. The navbar will show either thier GitHub profile picture or a letter representing the first letter of their first name. Users will will see the statistics of whichever user they type into the search bar.
![dashboard-desktop 1](https://user-images.githubusercontent.com/73142998/201355245-1e494a76-98a9-4370-8753-090553446aa1.png)

Second half of main dashboard
![dashboard-desktop 2](https://user-images.githubusercontent.com/73142998/201355545-6bb8f03e-affd-4c6a-a4e9-00f3facccfb3.png)

If searching for a user that does not exist, an error in red text will be returned and placed at the top left of the search bar. 
![user-search-error](https://user-images.githubusercontent.com/73142998/201356274-4173281f-2b64-4d03-b243-3bc97e3935d2.png)

When a user inputs the correct URL, for example: an extra character at the end of the site URL, an error page is returned with a button that brings the user to either the login page or the dashboard depending on whether they have previously logged in or not. 
![page-error](https://user-images.githubusercontent.com/73142998/201356565-9c76d50e-2fd0-4b5b-ab9c-60f1f9bada2f.png)

# Mobile View
![mobile-dash 1](https://user-images.githubusercontent.com/73142998/201356645-f9981166-337f-48ff-96d7-0b6d8d1d9a00.png)

![mobile-dash 2](https://user-images.githubusercontent.com/73142998/201356668-377b2994-ceff-491b-b9b0-a6516cb6686a.png)

![mobile-dash 3](https://user-images.githubusercontent.com/73142998/201356686-c82e4870-2b50-4a67-8c73-bff20b399f8c.png)












