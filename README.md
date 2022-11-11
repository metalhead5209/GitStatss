# Description
This is a personal project of mine that utilizes the Github API which contains data from each Github user including repository statistics, languages, and followers. I wanted to create a unique experience when searching a Github user and viewing their repository stats such as top languages and repositories. My inspiration came from seeing all the different README’s users have created over the years since Github has upgraded their UI.

[Github api](https://docs.github.com/en/rest)

[Live Application](https://github-profile-finder-aaronrodi.netlify.app/)
Hosted on [Netlify]( https://www.netlify.com/)

# Tech
GitStats is a front-end application developed with React. I chose React Context to manage the data because all the data was coming from one source and would be used globally throughout the application. I utilized React Router to seamlessly navigate throughout the different component UI’s including the login page, dashboard, and error page. 
To fetch the data from the [Github API]( https://docs.github.com/en/rest), I used the [Axios](https://www.axios.com/) library. Axios supports the promise API which makes fetching data simple and only requires a few lines of code. Once fetched, the data is filtered through functions that display a certain number of items depending on the query. For example: The top 100 followers are displayed while only the top 5 languages and specific repo stats. 
Users have the ability to log in with either an email or password (fake or real) or use their GitHub credentials to log in. I used Auth0 to handle the authorization and authentication. Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications.
![Uploading auth0_loginPage.png…]()
