# Models

This folder holds the C# classes that represent tables in the database (e.g.
`Product.cs`, `Category.cs`). Each class property maps to a column, and each class
maps to a table via Entity Framework Core.

These classes are used internally by EF Core and the database layer — they are
NOT necessarily what gets sent to the frontend (see `/DTOs` for that).

No models have been implemented yet — this is a placeholder so the folder is
tracked by git until the first model is added.
