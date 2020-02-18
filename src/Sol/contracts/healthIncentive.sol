pragma solidity >=0.5.0 <0.7.0;

contract healthIncentive {
    address owner;
    uint256 healthTokens;

    constructor(uint256 totalTokens) public {
        owner = msg.sender;
        healthTokens = totalTokens;
    }
    struct patient {
        uint256 patientID;
        bytes32 disease;
        uint256 age;
        bytes32 gender;
        uint256 insurerId;
        uint256 walletBalance;
    }

    struct insuranceProvider {
        uint256 provideID;
        bytes32 location;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "Owner Only call");
        _;
    }
    event incentivePenalty(bytes32 action, uint256 fundsTransferred);
    mapping(uint256 => uint256) walletBalances;
    mapping(uint256 => address) idToWallet;
    mapping(address => patient) patientData;
    mapping(uint256 => mapping(uint256 => uint256)) patientDateWiseSteps;

    function registerPatient(
        uint256 pId,
        uint256 insuranceProviderId,
        uint256 registrationDate,
        address patientWallet,
        uint256 pAge,
        bytes32 sex,
        bytes32 pDisease
    ) public {
        patientData[patientWallet].patientID = pId;
        patientData[patientWallet].insurerId = insuranceProviderId;
        patientData[patientWallet].age = pAge;
        patientData[patientWallet].gender = sex;
        patientData[patientWallet].disease = pDisease;
        patientDateWiseSteps[pId][registrationDate] = 0;
        walletBalances[pId] = 0;
    }

    function updateFootSteps(uint256 pId, uint256 steps, uint256 timeStamp)
        public
    {
        patientDateWiseSteps[pId][timeStamp] = steps;
    }

    function incentiveAndPenalty(
        uint256 pId,
        uint256 monthlyAvg,
        uint256 weeklyAvg
    ) public ownerOnly {
        if (weeklyAvg >= 5000) {
            if (monthlyAvg <= 10000) {
                healthTokens = healthTokens - 5;
                walletBalances[pId] = walletBalances[pId] + 5;
                emit incentivePenalty("Incentive", 5);
            } else if (monthlyAvg > 10000 && monthlyAvg <= 20000) {
                healthTokens = healthTokens - 10;
                walletBalances[pId] = walletBalances[pId] + 10;
                emit incentivePenalty("Incentive", 10);
            } else {
                healthTokens = healthTokens - 20;
                walletBalances[pId] = walletBalances[pId] + 20;
                emit incentivePenalty("Incentive", 20);
            }
        } else {
            if (walletBalances[pId] == 0) {
                emit incentivePenalty("No wallet balance to penalize", 0);
            } else {
                walletBalances[pId] = walletBalances[pId] - 4;
                healthTokens = healthTokens + 4;
                emit incentivePenalty("Penalized", 4);
            }
        }
    }

    function getBalances(uint256 pId) public view returns (uint256 balance) {
        balance = walletBalances[pId];
    }

}
