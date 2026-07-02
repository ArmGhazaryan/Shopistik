# Controllers

This folder holds the API endpoint classes — the "front door" of the backend.

Each controller (e.g. `ProductsController.cs`, `CategoriesController.cs`) will define
the routes the frontend calls, such as:

- `GET /api/products` — list products
- `GET /api/products/{id}` — get one product
- `POST /api/products` — create a product

Controllers receive HTTP requests, talk to the database (via the `ApplicationDbContext`
in `/Data`), and return data shaped by the classes in `/DTOs`.

No controllers have been implemented yet — this is a placeholder so the folder is
tracked by git until the first controller is added.
