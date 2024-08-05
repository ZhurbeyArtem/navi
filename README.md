Star Wars Heroes Viewer
Description

This web application allows users to view a list of Star Wars characters along with detailed information about the films they appeared in and the starships they traveled on. The data is visualized using a graph structure for an intuitive and engaging user experience.
Features

    Character List: Displays a paginated list of all Star Wars characters retrieved from the sw-api.starnavi.io API.
    Character Details: On selecting a character, detailed information is displayed in a graph format using React Flow.
        The main node represents the selected character.
        Links from the character node lead to nodes representing films they appeared in.
        Further links from each film node lead to nodes representing the starships the character traveled on.

Technologies Used

    React.js: For building the user interface.
    TypeScript: For type safety and improved developer experience.
    TanStack: For efficient state management and data fetching.
    Ant Design: For pre-designed UI components.
    React Flow: For visualizing character relationships in a graph format.
    Vitest: For unit testing.
    Vite: For fast and optimized development experience.

How to set up

     npm i   
     npm run dev   
     
For test   

     npm run test
