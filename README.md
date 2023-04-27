<h1 align="center">
  dad-server
</h1>

<p align="center">
  Dark and Darker Private Server Project written in Typescript
</p>

## Table of contents

-   <a href="#features">Features</a>
-   <a href="#getting-started">Getting Started</a>
-   <a href="#contributing">Contributing</a>

<h2 id="features">Features</h2>

Coming Soon...

<h2 id="getting-started">Getting Started</h2>

To get started with this project, you should follow these steps:

<ol>
  <li>
  <p>Clone this repository to your local machine by running the following command:</p>

```bash
git clone https://github.com/theadriann/dad-server
```

  </li>
  
  <li>
  <p>You will need to have Node.JS installed. You can installed it from here <a href="https://nodejs.org/en" target="_new">https://nodejs.org/en</a></p>
  </li>

  <li>
  <p>If there is no `.env` file in your project directory, copy `.env.example` to `.env` and edit the relevant information (like your server ip address).</p>
  </li>
  

  <li>
  <p>Install the project dependencies by running the following command in the project directory:</p>

```bash
npm install
```

  </li>
  <li>
  <p>Once you have completed the installation steps above, you need to run the migration command in the project directory which will create a local SQLite database:</p>

```bash
npm run migrate
```

  </li>
  <li>
  <p>Now, you can run the project by running the following command:</p>

```bash
npm run dev
```

  </li>
  <li>
  <p>To connect to the server, modify the game's shortcut target by right-clicking on the game's shortcut and selecting 'Properties'. Then, update the target to connect to your server.</p>

```bash
"C:\Program Files\IRONMACE\Dark and Darker A5\DungeonCrawler.exe" -server=SERVER_IP:DISCOVERY_PORT
```

  <p>Replace the placeholders `SERVER_IP` and `DISCOVERY_PORT` with their corresponding values found in the `.env` file.</p>
  </li>
</ol>

<h2 id="contributing">Contributing</h2>

We welcome contributions from anyone interested in improving the project! To contribute, simply fork this repository and submit a pull request with your changes. We'll review your changes and merge them into the main branch if they meet our standards.
