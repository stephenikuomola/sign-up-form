# Introductory Component Sign Up Form Style Guide

- Mobile: 375px
- Desktop: 1440px

## Google Imports 

```css
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
```

## Colors 

```css
--red: hsl(0, 100%, 74%); 
--green: hsl(154, 59%, 51%); 
--light-green: hsl(154, 65%, 68%); 
--blue: hsl(248, 32%, 49%); 
--dark-blue: hsl(249, 10%, 26%); 
--grayish-blue: hsl(246, 25%, 77%); 
--light-grayish-blue:hsl(0, 0%, 87%); 
```

## Shadows

```css
--box-shadow: 0px 8px 0px hsla(0, 0%, 0%, 0.147); 
--box-shadow-inset:  inset 0px -4px 0px hsla(0, 0%, 0%, 0.091);
```

## Gap 

```css
--gap-0: 0px; 
--gap-1: 1px; 
--gap-1_25: 0.125rem; 
--gap-2_5: 0.25rem; 
--gap-3_75: 0.375rem; 
--gap-5: 0.5rem; 
--gap-6_25: 0.625rem; 
--gap-7_5: 0.75rem; 
--gap-8_75: 0.875rem; 
--gap-10: 1rem; 
--gap-12_5: 1.25rem; 
--gap-15: 1.5rem; 
--gap-17_5: 1.75rem; 
--gap-20: 2rem; 
--gap-22_5: 2.25rem; 
--gap-27_5: 2.75rem; 
--gap-30: 3rem;
--gap-35: 3.5rem; 
--gap-40: 4rem; 
--gap-50: 5rem; 
--gap-60: 6rem; 
--gap-70: 7rem; 
--gap-80: 8rem; 
--gap-90: 9rem; 
--gap-100: 10rem; 
--gap-110: 11rem; 
--gap-120: 12rem; 
--gap-130: 13rem; 
--gap-140: 14rem; 
--gap-150: 15rem; 
--gap-160: 16rem; 
--gap-180: 18rem; 
--gap-200: 20rem; 
--gap-240: 24rem;
```

## Display

```css
--hidden: none; 
--block: block; 
--inline: inline; 
--inline-block: inline-block; 
--flex: flex;
--inline-flex: inline-flex; 
--grid: grid; 
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px; 
--radius-2: 4px; 
--radius-3: 6px;
--radius-4: 8px; 
--radius-5: 12px; 
--radius-6: 16px; 
--radius-7: 20px; 
--radius-8: 24px; 
--radius-9: 26px; 
--radius-10: 28px; 
--radius-11: 30px; 
--radius-12: 32px; 
--radius-13: 34px; 
--radius-14: 36px; 
--radius-15: 38px; 
--radius-16: 40px;
```

## Screen Readers

```css
--sr-only-width: 1px; 
--sr-only-height: 1px; 
--sr-only-padding: 0px; 
--sr-only-margin: -1px; 
--sr-only-border-width: 0; 
--sr-only-left: -1000px; 
--sr-only-top: auto;
```


## Typography

```css

--ff-Josefin-Sans: 'Poppins', sans-serif;

--fw-300: 300; 
--fw-400: 400; 
--fw-600: 600; 
--fw-700: 700; 


--line-height-none: 1; 
--line-height-tight: 1.25; 
--line-height-snug: 1.375; 
--line-height-normal: 1.5; 
--line-height-relaxed: 1.625; 
--line-height-loose: 2; 


--letter-spacing-tighter: -0.05em; 
--letter-spacing-tight: -0.025em; 
--letter-spacing-normal: 0em; 
--letter-spacing-wide: 0.025em; 
--letter-spacing-wider: 0.05em; 
--letter-spacing-widest: 0.1em; 




/* Font size */
--fs-1: clamp(1.12rem, calc(1.072rem + 0.23vw), 1.408rem);
--fs-2: clamp(1.264rem, calc(1.20rem + 0.26vw), 1.584rem);
--fs-3: clamp(1.424rem, calc(1.36rem + 0.29vw), 1.776rem);
--fs-4: clamp(1.60rem, calc(1.52rem + 0.33vw), 2.00rem);
--fs-5: clamp(1.808rem, calc(1.712rem + 0.37vw), 2.256rem);
--fs-6: clamp(2.032rem, calc(1.936rem + 0.42vw), 2.528rem);
--fs-7: clamp(2.272rem, calc(2.176rem + 0.47vw), 2.848rem);
--fs-8: clamp(2.56rem, calc(2.448rem + 0.53vw), 3.20rem);
--fs-9: clamp(2.88rem, calc(2.752rem + 0.60vw), 3.60rem);
--fs-10: clamp(3.248rem, calc(3.088rem + 0.67vw), 4.048rem);
--fs-11: clamp(3.648rem, calc(3.472rem + 0.75vw), 4.56rem);
```


## Space

```css
--space-1: clamp(1.60rem, calc(1.52rem + 0.33vw), 2.00rem);
--space-2: clamp(2.40rem, calc(2.288rem + 0.50vw), 3.008rem);
--space-3: clamp(3.20rem, calc(3.04rem + 0.66vw), 4.00rem);
--space-4: clamp(4.8rem, calc(4.576rem + 0.99vw), 6.00rem);
--space-5: clamp(6.4rem, calc(6.096rem + 1.32vw), 8.00rem);
--space-6: clamp(9.6rem, calc(9.136rem + 1.98vw), 12rem);
--space-7: clamp(1.60rem, calc(1.328rem + 1.16vw), 3.008rem);
--space-8: clamp(2.4rem, calc(2.096rem + 1.32vw), 4.00rem);
--space-9: clamp(3.20rem, calc(2.672rem + 2.31vw), 6.00rem);
--space-10: clamp(4.8rem, calc(4.192rem + 2.64vw), 8.00rem);
--space-11: clamp(6.40rem, calc(5.328rem + 4.63vw), 12rem);
--space-12: clamp(1.00rem, calc(0.71rem + 1.98vw), 2.50rem);
```