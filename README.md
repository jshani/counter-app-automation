> **Run the Counter App locally and run cypress tests to add, remove, delete items from the item list, reset and** > **restart the item list**

## Scripts

1. Install node modules (node v14.15.5 or above)

#### `npm install`

2. In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.

3. Open [Counter App](http://localhost:3000) to view it in the browser.

4. To run the test in headless mode.

#### `npm run tests`

OR

To run tests in cypress test runner.

#### `npm run cypress`

select 'shoppingCart.spec.js' from the pop-up

**Default browser is Chrome. You can select Firefox and Electron from the top right dropdown in the test runner**

To run tests in headless mode in other browsers (firefox, electron, edge)

#### `npm run <browser-name>`

## Folder Structure

	cypress/
	├─ fixtures	  			Contains exernal static data to be used by tests
	    ├─config.json		Configurations like URL, username etc.
	├─ integration 			Test suites comprising of single/multiple tests		
	├─ pageObjects			Page object classes with locators and functions		
	├─ plugins				Executes in Node before the project is loaded, before the browser launches, and during your test execution.	
	├─ support				Support files	
	    ├─commands.js    	Custom commands	
        ├─index.js		    Runs before every single spec file
