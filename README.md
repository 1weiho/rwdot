## rwdot

rwdot is a RWD tool designed for Tailwind CSS development.
It allows you to quickly determine which Tailwind size variant corresponds to the current window size,
helping you build responsive websites more conveniently.

## Installation

To get started with rwdot, you need to install it into your project using npm:

```bash
npm install rwdot
```

## Usage

Once Rwdot is installed, you can integrate it into your project's root layout to ensure it displays on all pages. Here's an example of how to do it:

```jsx
import { Rwdot } from 'rwdot'

// ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Rwdot />
        {children}
      </body>
    </html>
  )
}
```
