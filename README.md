# ArtStoreEcommerce-react
Here is my react project for COMIT. I designed an artstore website to sell my artworks and support other local artists by showing their works here. 
Note that some of the paintings are reproduction from famous artists. 
Here is the technical details of the project. 

# Tech Stack
- backend: Firebase
- routing: React Router
- state management: Context
- styling: components

# Features
- Everyone can visit the items listed in the website without registering. 
- There is also an about page explaining the artworks.
- User accounts
  - Users can create an account, log in, and log out
  - Users can select different items, and add them to their cart. 
  
- Cart 
  - Each user can select some of the items and add them to their cart
  - Once they log out and they log in, they have previous items in their cart

# External State (Stored, Persisted)
- user profile information
- users's cart

For every external state in our application, we'll need to implement:
- backend
- client (communication, interface)
- Context components with useState and functions for getting and updating state


- Non-React Code
  - backend integration
  - Auth
  - storage


# Second Phase: 
- Users can proceed to the payment page and submit their order 
- Users can share an item in the social media
- Users can faviorite some of the items and then add them to their card or delete them.

# Third Phase: 
- Users are able to start chat with bot( an NLP ChatBot model with be implemented for this project)
