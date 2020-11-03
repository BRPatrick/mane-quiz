// Potential results for quiz
// Each product is matched up with a list of possible coded answer combinations that will work for that product
// Ex: 11111 = [1 1 1 1 1] = [Short Straight Fine Matte Light], this combo will result in "hair oil"
// Ex: 32313 = [3 2 3 1 3] = [Long Wavy Thick Matte Strong], this combo will result in "hair wax"
// Object key is the text the user will see in the result screen.

const hairProduct = {
  "hair oil": ["11111", "11211", "11311", "12111", "12211", "12311"],

  "hair paste": ["11112", "11212", "11312", "12112", "12212", "12312"],

  "hair wax": [
    "31113",
    "31213",
    "31313",
    "32113",
    "32213",
    "32313",
    "21113",
    "21213",
    "21313",
    "22113",
    "22213",
    "22313",
    "11113",
    "11213",
    "11313",
    "12113",
    "12213",
    "12313",
  ],

  pommade: ["11121"],

  "hair clay": ["11122", "11222", "11322", "12122", "12222", "12322"],

  "hair fiber": [
    "31122",
    "31222",
    "31322",
    "32122",
    "32222",
    "32322",
    "21122",
    "21222",
    "21322",
    "22122",
    "22222",
    "22322",
    "11123",
    "11223",
    "11323",
    "12123",
    "12223",
    "12323",
  ],

  "sea salt spray": [
    "21121",
    "21221",
    "21321",
    "22121",
    "22221",
    "22321",
    "12121",
    "12221",
    "12321",
  ],

  "hair spray": [
    "31123",
    "31223",
    "31323",
    "32123",
    "32223",
    "32323",
    "21123",
    "21223",
    "21323",
    "22123",
    "22223",
    "22323",
  ],

  gel: [
    "31112",
    "31212",
    "31321",
    "32112",
    "32212",
    "32312",
    "21112",
    "21212",
    "21312",
    "22112",
    "22212",
    "22312",
  ],
};

export default hairProduct;
