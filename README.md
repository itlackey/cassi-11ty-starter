# Cassi - 11ty Starter Kit

![Cassi Logo](./assets/imgs/logo-small.webp)

Cassi is an innovative tool that generates markdown-based documentation for your CSS files using AI. Whether you're managing a legacy codebase or building new projects, Cassi simplifies the process of creating a comprehensive and customizable CSS style guide. You can learn more about Cassi here [itlackey/cassi](https://github.com/itlackey/cassi).

## Why a Starter Kit?

The Cassi 11ty Starter Kit is an easy way to get a custom CSS style guide up and running. With this kit, you can quickly scaffold a documentation site for your CSS files using the power of 11ty and Cassi. This saves time and effort in creating manual documentation, allowing you to focus on other aspects of your project.

## Installation

To create a site using the Cassi 11ty Starter Kit GitHub Template repository, follow these steps:

1. Click the "Use this template" button.
2. Enter a name for your new repository and select the owner.
3. Click "Create repository from template".
4. Clone the newly created repository to your local machine (`git clone https://github.com/yourusername/your-repository.git`).
5. Install dependencies (`npm install`).
6. Build the site locally (`npm run build`).

You should now have an `.build` folder with some html files and other assets.

Congrats!! You now have a Cassi powered style guide!

## Next Steps

Now that you have your site up and running, it is time to customize it, and add the pages for your style guide.

Here are the steps to follow to begin customizing your style guide:

### 1. Customize CSS Files

Edit your CSS files in the `assets/css` directory to add styles and customize them as needed.

### 2. Generate Style Guide Pages

Run the following command to generate style guide pages based on your CSS files: `npm run generate`.

### 3. Start the Development Server

Run the following command to start the development server: `npm start`.

This will open your style guide in a browser at `http://localhost:8080`.

## Usage

Once you have generated your style guide pages, you can view them by running the development server and opening `http://localhost:8080` in your browser.

### Customizing the Style Guide

You can customize the look and feel of your style guide by modifying the CSS files in the `assets/css` directory. You can also add new styles or modify existing ones to better suit your needs.

### Adding New Pages

To add new pages to your style guide, you can manually create new markdown files in the `src/pages` directory. Each file should have a `.md` extension and contain the content for that page.

### Generating Style Guide Pages

When styles change in your `assets/css` directory, you can run the following command to generate new style guide pages: `npm run generate`.

## Deployment

To deploy your style guide, you can use a static site hosting service like Netlify, Azure Static Web Apps, or Vercel. Simply upload the contents of the `.build` folder to your chosen hosting provider.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Have questions or feedback? Open an issue or reach out on [GitHub](https://github.com/itlackey/cassi-11ty-starter/issues).
