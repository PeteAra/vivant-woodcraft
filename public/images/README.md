# Client photography drop-in

Replace placeholder Unsplash photography with Vivant project photos.

## Suggested structure

```
public/images/
  hero.jpg
  craftsmanship.jpg
  about.jpg
  consult.jpg
  process.jpg
  cta.jpg
  projects/
    lake-minnetonka-kitchen/
      cover.jpg
      01.jpg
      02.jpg
    ...
  materials/
    white-oak.jpg
    walnut.jpg
    ...
```

Then point `data/*.ts` image fields to `/images/...` paths.

Keep project `slug` values stable so portfolio URLs and the AI consultant stay consistent.
