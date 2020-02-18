const configuration={
 contractAddress : "0x466A67E8A94E4BaD38dcEb61d88f07ef7E578733",
 blockchainEndPoint : "http://localhost:7545",
 contractABI : [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "totalTokens",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "action",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fundsTransferred",
                "type": "uint256"
            }
        ],
        "name": "incentivePenalty",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "insuranceProviderId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registrationDate",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "patientWallet",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "pAge",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "sex",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "pDisease",
                "type": "bytes32"
            }
        ],
        "name": "registerPatient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "steps",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timeStamp",
                "type": "uint256"
            }
        ],
        "name": "updateFootSteps",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "monthlyAvg",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "weeklyAvg",
                "type": "uint256"
            }
        ],
        "name": "incentiveAndPenalty",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pId",
                "type": "uint256"
            }
        ],
        "name": "getBalances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

}

module.exports = configuration;