const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners();
  const NAME = "TokenMaster";
  const SYMBOL = "TM";

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("TokenMaster");
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL);
  await tokenMaster.deployed();

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`);

  // List 6 events
  const occasions = [
    {
      name: "MIT Hackathon",
      cost: tokens(1),
      tickets: 100,
      date: "Apr 19",
      time: "4:00PM EST",
      location: "MIT Boston, MA",
    },
    {
      name: "NBA Warriors VS Lakers",
      cost: tokens(3),
      tickets: 125,
      date: "Oct 20",
      time: "2:00PM EST",
      location: "Los Angeles, California",
    },
    {
      name: "UFC 300",
      cost: tokens(0.25),
      tickets: 200,
      date: "Apr 9",
      time: "10:00AM EST",
      location: "Las Vegas, Nevada",
    },
    {
      name: "Boston Univerity Hacakthon",
      cost: tokens(1),
      tickets: 0,
      date: "Mar 9",
      time: "3:30PM EST",
      location: "Boston, MA",
    },
    {
      name: "CS 595 Final Presentation",
      cost: tokens(1.5),
      tickets: 125,
      date: "May 1",
      time: "3:00PM EST",
      location: "Boston, MA",
    },
  ];

  for (var i = 0; i < 5; i++) {
    const transaction = await tokenMaster
      .connect(deployer)
      .list(
        occasions[i].name,
        occasions[i].cost,
        occasions[i].tickets,
        occasions[i].date,
        occasions[i].time,
        occasions[i].location
      );

    await transaction.wait();

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
