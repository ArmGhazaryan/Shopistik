# DTOs (Data Transfer Objects)

This folder holds classes that define exactly what data the API sends to (and
accepts from) the frontend — separate from the internal database Models.

For example, a `Product` Model might have internal fields like `CostPrice` or
`SupplierId` that should never be exposed publicly. A `ProductDto` would only
include the fields that are safe and useful for the frontend, such as `Id`,
`Name`, `Price`, and `ImageUrl`.

Keeping DTOs separate from Models protects the database structure from being
directly exposed over the API and gives control over the public API "shape"
independent of how data is stored.

No DTOs have been implemented yet — this is a placeholder so the folder is
tracked by git until the first DTO is added.
