## What is SyndiShare?
The goal of the Syndishare project is to develop an AI+Blockchain-powered decentralised system to share analytics while keeping data private. 

Our aim was to combine these two cutting edge technologies to decentralise financial services so that value can be intelligently directed to where it is needed with minmal intervention from third parties. 

The key to the project is a method called homomorphic encryption which allows machine learning algorithms to be trained locally on a user's device without revealing the details of the algorithm so that it cannot be modified by malicious actors, whilst preserving the privacy of the user's data.

In addition the use of smart contracts addresses the challenge of getting good data for ML models - large scale public datasets of sensistive data such as financial/health info are not easily available and in addition the quality of the data may not be good. Smart contracts can be used not only to encourage people to share data, but also ensure data quality by only issusing rewards for sharing good data (i.e. model accuracy improves with model gradient updates from training on their data).

## How does it work?
The SyndiShare project is built upon the framework of pySyft and Sonar. 

Model training
- Individuals (we refer to them as 'data analysts') can share their personal financial details in return for a reward. They are incentivised to share the insights, knowing that not only will they be rewarded but that privacy will be maintained and they would not get access to private data. 



The process is illustrated in the architecture diagram below.

![](https://github.com/Riksi/chAIn/blob/master/architecture.jpeg)


## Why blockchain?

1. There is potential for the system of incentives to develop into a cryptocurrency system with its own token.
2. It is simpler to create and manage incentives via smart contracts and theoretically impossible to game the system.

## The tech
Our system consists of a smart contract and pair of applications, one for the use of the lender and one for the use of data-owner. 

For simplicity we implemented the applications as Flask apps to be run locally and accessed via a browser. 

In order to communicate with the contract, the module web3.py is used by these applications. We also rely on OpenMined's repositories [Sonar](https://github.com/OpenMined/Sonar), [PySonar](https://github.com/OpenMined/PySonar), and, crucially, for encrypted machine learning, its repository, [PySyft](https://github.com/OpenMined/PySyft). Due to the lack of functionality for mathematical operations in the present state of the library we used a linear regression in this first stage of the project. For out system to work, setup instructions provided by each of these repositories need to be followed in order to create a contract and install all the necessary modules.

A Python based application was needed for the lender and the data-owner because we have to do machine learning off-chain, whilst on the chain, rewards are calculated and incentives are transferred appropriately. Also the contract stores the addresses of the model data which is stored on the decentralised InterPlanetary File System since the data is too large to be stored on chain. 

For model training, to simulate data-owners sending data, we used the data provided by UCI Machine Learning. 

## Where next
Of course there is much more we can do even to develop the peer-to-peer Analytics system. Here are some important areas where we want to focus:

1. Build and train more sophisticated classifiers and simulate the involvement of many data-analysts sending their models
2. Create a more complex smart contracts - for example dealing with attempts to resend same data whilst allowing different data to be sent at different times by same data-owner (where this is appropriate e.g. bank statements)
3. Package the applications so that users can easily download and run them
4. Deploy the model 
5. Develop a token for this system
6. Extend this framework to other financial services.



### Tech

SyndiShare uses a number of open source projects to work properly:

* [NodeJs] 
* [Python] 
* [PySyft] 
* [Pytorch] 
* [PySonar] 





**Made with ♡ in India @ NSE FutureTech Hack 2018**
By Team Syndicate
