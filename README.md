## Introduction

rwdot is a RWD tool designed for Tailwind CSS development.
It allows you to quickly determine which Tailwind size variant corresponds to the current window size,
helping you build responsive websites more conveniently.

## Installation

To get started with rwdot, you need to install it into your project using npm:

```bash
npm i rwdot
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

## Features

The `<Rwdot />` component comes with interactive features that provide additional functionality for your responsive design testing. These features enhance your ability to monitor screen sizes while developing your web application.

### Hover to Display Screen Size

When you hover your cursor over the dot indicator, the component will automatically extend its width to reveal the screen size. This allows you to quickly check the current screen dimensions without needing to click.

### Toggle Screen Size Display

You have the option to toggle the screen size information to be displayed permanently. To achieve this, simply click the dot indicator. Once clicked, the screen size will remain visible until you decide to hide it again.

### Automatic Hide

If you've enabled the screen size display to be always visible, you can easily hide it again by clicking the dot indicator once more. This provides a convenient way to show and hide the screen size information based on your needs.

## Setting Dot Position

You can control the position of the dot indicator using the position prop. The available options are:

- bottom-left (default)
- bottom-right
- top-left
- top-right

Here's an example of how to set the dot position to top-right:

```jsx
<Rwdot position="top-right" />
```

## Always Show Screen Size

If you want to keep the screen size information visible at all times, even if the indicator is clicked, you can use the showSize prop. This will ensure that the screen size is always displayed:

```jsx
<Rwdot showSize />
```

## Display Only in Development Mode

In most cases, you might only want to display the responsive indicator in development mode to avoid clutter in production. You can achieve this by conditionally rendering the Rwdot component based on the environment using the show prop. For instance:

```jsx
<Rwdot show={process.env.NODE_ENV !== 'production'} />
```
