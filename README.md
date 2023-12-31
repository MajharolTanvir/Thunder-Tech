# ThunderTech

- Github link: https://github.com/MajharolTanvir/Thunder-Tech
- Live link: https://thunder-tech.vercel.app/

## Description
Build a clean and straightforward PC Builder website for PC parts and components using Next.js. The website should include a PC Builder tool where users can add selected PC components to build their own PC.

## Requirements
    
### Navbar:
[x] Add a button named PC Builder.

[x] Clicking on the PC Builder button should redirect the user to the PC Builder page to start building their PC.

[x] The navbar should also have a Categories dropdown with the following categories:

- CPU / Processor
- Motherboard
- RAM
- Power Supply Unit
- Storage Device
- Monitor
- Others
Each category should have a corresponding route. (SSG implementation)

#### Home Page: (SSG implementation)
The home page should feature at least 6 random PC components as Featured Products.

[x] Each Featured product card should display the following properties:
- Image
- Product Name
- Category
- Price
- Status ( In Stock | Out of stock)
- Rating (Out of 5 Stars)
[x] Each featured product will be clickable and should take the user to the product detail page. (Button/Entire Card)


[x] There should be 6 Featured Categories under the Featured Product section. The Categories are:

- CPU / Processor
- Motherboard
- RAM
- Power Supply Unit
- Storage Device
- Monitor
- Others (GPU, Mouse, Keyboard, etc…)

[x] Featured Category Sections: (SSG implementation)
Each featured category should be clickable.

[x] Clicking on any of the Featured Categories will redirect the user to another page where at least 3 products of that category will be displayed.
[x] Each product card on this page should show the following properties:
- Image
- Product Name
- Category
- Price
- Status ( In Stock | Out of stock)
- Rating (Out of 5 Stars)

[x] Each product retrieved after querying on this page will also be clickable and should take the user to the product detail page.


#### Product Detail Page / Route: (SSG implementation)

#### Product Details:

[x] Each PC Component must have the following properties:
- Image
- Product Name
- Category
- Status: In Stock | Out of stock
- Price
- Description
- Key Features (like Brand, Model, Specification, Port, Type, Resolution, Voltage, etc)
- Individual Rating (Out of 5 Stars)
- Average Rating (Out of 5 Stars)
- Reviews


### PC Builder Page: (SSR implementation)

[x] The PC Builder page should have category sections as follows:
- CPU / Processor
- Motherboard
- RAM
- Power Supply Unit
- Storage Device
- Monitor
[x] Each category will have a Choose/Select Button.

[x] Clicking on the Choose/Select Button will take the user to another page where at least 3 components of that specific category will be displayed.

[x] Each component card on this page should show the following properties:
- Image
- Product Name
- Category
- Price
- Status
- Rating
- Each component card on that page will have an Add To Builder Button.

[x] Clicking on this button will redirect the user to the PC Builder page, and it will update the state of that selected category section in the PC Builder Page with the selected component below. (You can use Redux / Context API to create a central store for this)

[x] After adding at least 5 - 6 Components (CPU, RAM, Power Supply, Storage, Motherboard, Casing), the user will be able to click on the Complete Build button. (This button will be disabled unless the user adds at least 5-6 of the mentioned components)

### Bonus Part:
[x] The PC Builder Page should be a protected/private route (only logged-in users can visit this route). You have to use NextAuth with at least one social login (Google/Github) provider to enable user authentication.

[x] Clicking on the Complete Build button will show a success alert.
[x] The Home page should also have a hero section/banner section and a footer.
[x] The entire application must be responsive for both mobile and desktop devices to ensure an enjoyable user experience across all devices.
[x] Create a ReadMe.md file describing your application, explaining its features, and providing clear instructions on how to run the project.


