# HeliCarrier Assessment for Frontend Engineer Role

Rick and Morty Web Application: List of Characters
// The selected GraphQL API for this application is the Rick and Morty GraphQL API.

// Wrote a query to the GraphQL API to fetch a list of characters.

// A total of 60 characters were fetched from the GraphQL API using the CharactersByIds query.

// Created different batches of IDs for characters with different dates.

//The React ROuter DOM will be used to route between pages.

// Designed a loading page that is displayed when data is being fetched from the API.

// All the data needed from the GraphQL API is fetched in the App (root) Component
   and distributed to tree components. Further elaboration below:

[List of components]: #components

[Profile Component]: #profile

    // This is the component which displays characters according to their ids in
      chronological order.
    
    // The data fetched in the App component is passed as a prop into this component 
       and filtered into 8 new arrays according to dates.
    
    // This component will not be affected by the search functionality since it will 
       be labeled as the unique value column.

[Filter Component]: #filter
    // This component is used to filter the characters by their species.

    // There are three instances of this component, one for each species.

[Error Component]: #error
    // This component is used to display an error message when the user visits 
       a page that is non-existent.


// The three instances of the Filter component have a 
   filter method attached to the list of characters passed to them that respond to the value in the search bar.


// This is the breakdown of my Rick and Morty Character Web
   Application. View application live at: 
   <https://rick-and-morty.vercel.app/>