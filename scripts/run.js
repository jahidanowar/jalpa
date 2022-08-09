const main = async () => {
  // Get Owner and randomUser by Signers
  const [owner, randomUser] = await hre.ethers.getSigners();

  // Get contract factory
  const secretMessageContractFactory = await hre.ethers.getContractFactory(
    "SecretMessage"
  );

  // Deploy the contract
  const secretMessageContract = await secretMessageContractFactory.deploy();

  // Wait for the contract to be deployed
  await secretMessageContract.deployed();

  let totalMessage = await secretMessageContract.getTotalMessage();

  let txn = await secretMessageContract.sendMessage();
  await txn.wait();

  totalMessage = await secretMessageContract.getTotalMessage();

  // Create a txn by new user
  txn = await secretMessageContract.connect(randomUser).sendMessage();
  await txn.wait();

  console.log(`🏃 -> ${secretMessageContract.address}`);
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
