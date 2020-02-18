Scenario: The health insurance contract has its own tokens called as health tokens which are either incentivized or penalized to the patient wallet depending upon the footsteps.

1) A Patient is incentivized (Health Tokens) if the avg_week footsteps are above 5000.
3) Number of Health Tokens differs depending on avg_monthly footsteps which is between 5 to 20 Health Tokens.
2) If avg_week at any instance is less thank 5000 then the patient is penalized 4 Health Tokens.

Prerequisites:

	1) Node JS - 8.11.3 or any above version will do.
	2) Ganche ( Ethereum Blockchain simulator)
	3) Postman
	4) vs code

Installation:

	1) Check if all the prerequisites have been installed.
	2) Open project folder in VS Code, run commands "npm install" and "npm install -g truffle" from its terminal.
	4) cd into ./src/Sol folder and run command "truffle migrate"
	5) On successful migration, the contract address of the healthIncentive contract will be printed in the terminal
	6) Copy contract address and paste it in contractAddress field in constants.config.js
	7) Run application with the command "npm start"


Testing  :

	1) Import the RBEI - API.postman_collection.json present at the root of project folder into Postman.
	2) Execute API's one by one for pass and fail scenarios:

	#Pass Scenario ->
	a) API 1- Register Patient - This api call will insert the user data into the blockchain and returns a
					 blockchain receipt.
					 
	b) API 2- Update Footsteps - Updates the footsteps of a patient for a particular date and returns a
					 blockchain receipt.
	c) API 3- Incentivize      - This api call checks the avg weekly and monthly footsteps and adds 
					 tokens to the respective wallets of user.
	d) API 4- Check Balances   - Returns the number of tokens the user has in the wallet, in this case it
					 will return 10.
	
	#Fail Scenario ->
	
	    a) API 5- Penalize         - It is the same as API 3 but with penalty scenario data.
	    d) API 4- Check Balances   - Returns the balance of the user after penalty, in this case it will be 6
					 as 4 tokens have been revoked for not maintaining weekly avg.

############################################################################################
						
					Mobile - 8904837693/8610291872
					E-Mail - sreeharshagarimella1995@gmail.com
					
############################################################################################

 
		
