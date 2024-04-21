# Campaign Project

This Project is created using Next JS. The reason is, I want to enable full SSR for this project, also want to get better performance instantly without needing to config or too much modifying the project. For the styling mechanism, I combine SCSS & Tailwind CSS. Since this project is only have 3 days and need to be done as soon as possible, some of the component's style is using Tailwind CSS, and for a small component - I decide to use SCSS.

This project is running by PNPM.

## Library & Tools

- PNPM
- Next JS
- Typescript
- Tailwind CSS
- Zustand
- Vitest
- React Testing Library

## How to run

- Clone this project
- Make sure you already installed node & npm in your terminal (you can check by running `npm -v` or `node -` in terminal)
- Run `npm install` or `yarn install` or `pnpm install` (for this project, I prefer to use `pnpm`)

## Architecture Explanation

- Project Structure
  I use Next JS App Router, with `src` directory for this project with `Domain Driven Design` approach. I put the file based on the context and purpose. The structure of the project looks like this:
  ![alt text](https://github.com/andreepratama27/campaign-project/blob/main/screenshots/project-directory.png)

  I also use PNPM as package manager over npm or yarn, since it more disk efficient and faster also easy to use.

- Data Fetching
  I use `fetch` to fetching data from remote source. So we don't need to adding 3rd party library for this case. `window.fetch` is more than enough. I put the fetcher in `service` folder inside `src` directory.

- Stage Management
  I use `zustand` for handling state-management. It lightweight, support SSR and easy to use & implement. For this case on this project, I use it to manage sorting functionality.

- Testing Library
  I use combination between `react-testing-library` & `vitest` since both of the library working fine each others and easy to config. Mainly, I use `vitest` for assertions. 

## Testing Mechanism

I create `__tests__` in every folder that need to be tested, included `non-component` folder. Although it looks messy, I found myself easy to find the correct test file when I need.

## Improvement

Since the time is limited, here the improvement that we can implement for next iteration:

- [] Revamp Tailwind by using SCSS, using variable for theming
- [] Adding Zod to validate API Response to prevent property changes from backend
- [] Testing Coverage