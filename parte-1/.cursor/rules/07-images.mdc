---
description: Images in Next.js
alwaysApply: true
globs:
  - "src/presentation/**"
  - "src/app/**"
---

# Objective
Standardize image usage in Next.js applications for optimal performance, accessibility, and maintainability.

# Rules

## When to Use next/image

- **Always** use `next/image` (`<Image />`) for static images in the `public/` folder
- Use native `<img />` only for dynamic images from external URLs that cannot be optimized

## Required Props

Every `next/image` component **must** include:
- `src` - Path to image (e.g., `/illustrations/hero.png`)
- `alt` - Descriptive alt text for accessibility
- `width` - Original image width in pixels
- `height` - Original image height in pixels
- `className` - For styling (typically `w-full h-auto` for responsive)

## Performance Optimization

- Use `priority` prop for above-the-fold images (LCP optimization)
- Lazy load is automatic for images below the fold
- Use `sizes` prop for responsive images to serve smaller sizes on mobile

```tsx
// Good: Hero image with priority
<Image
  src="/illustrations/hero.png"
  alt="Hero illustration"
  width={600}
  height={515}
  className="w-full h-auto"
  priority
/>

// Good: Below-the-fold image (lazy by default)
<Image
  src="/illustrations/card.png"
  alt="Card illustration"
  width={400}
  height={300}
  className="w-full h-auto"
/>
```

## Responsive Images

Use flexbox or grid layouts with `w-full h-auto`:

```tsx
<div className="flex flex-col md:flex-row gap-8">
  <Image
    src="/image.png"
    alt="Description"
    width={400}
    height={300}
    className="w-full md:w-auto h-auto"
  />
</div>
```

## Image Storage

- Store static images in `public/` folder
- Organize by feature: `public/illustrations/`, `public/icons/`, etc.
- Use descriptive filenames: `hero-illustration.png` not `img1.png`

## Accessibility

- Always provide meaningful `alt` text
- Use empty alt (`alt=""`) for decorative images only
- Test with screen readers

## Best Practices

- Export images from Figma at 2x resolution for retina displays
- Use WebP format when possible
- Compress images before adding to project
- Set explicit width/height to prevent layout shift (CLS)
