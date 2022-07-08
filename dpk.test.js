const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Returns the literal '0' when given an empty string", () => {
    const trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
  });


  it("Returns a crypto Hash string when given the integer 12", () => {
    const trivialKey = deterministicPartitionKey(12);
    expect(trivialKey).toBe("f235c129089233ce3c9c85f1d1554b9cb21952b27e0765bcbcf75d550dd4d2874e546889da5c44db9c066e05e268f4742d672889ff62fb9cb18a3d1b57f00658");
  });

  it("The return value should be the same as the partitionKey value in the key object input", () => {
    const key = {partitionKey : '5'}
    const trivialKey = deterministicPartitionKey(key);
    expect(trivialKey).toBe(key.partitionKey);
  });

  it("Returns a string, when input length is greater than the max partition key length", () => {
    const key = {partitionKey : 'tmtdpgpskhbfzllvezmupcckbganruhwvauvlwdvxonknrlofsxamloplvwgabkgicfjktstipknwexnnjrkvpexcpfcsujzzwzjvihqvuihoivmsfxqcftlgzxrmefttvsowalbpfrqeiwxhctaowccgjondsxkwsydgqzkxnpxuyjwifgzakifwburrfzskmgfzcmncqjuvcfnpckebjdhkklkebgukexprqfpmpwmkfjmfixxsmmxjtkojbeal'}
    const trivialKey = deterministicPartitionKey(key);
    expect(typeof trivialKey).toBe("string");
  });

  
});
