const main = async () => {
  // Get deployer
  const [deployer] = await hre.ethers.getSigners();
  // Get account balance of deployer
  const accountBalance = await deployer.getBalance();
  console.log(`Deploying contract with account -> ${deployer.address}`);
  console.log(`Account 💰: ${accountBalance.toString()}`);

  //Deploy
  const secretMessageContractFactory = await hre.ethers.getContractFactory(
    "SecretMessage"
  );
  const secretMessageContract = await secretMessageContractFactory.deploy();
  await secretMessageContract.deployed();

  console.log(`jalpa contract address: ${secretMessageContract.address}`);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
