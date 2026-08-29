/*console.log("Jack Ma maslahatlari");
const list = [
  "Yahshi talaba bo'ling!", // 0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
  "O'zingiz maqsad qilgan ishlaringizni boshlang!", // 30-40
  "Siz kuchli bo'lgan ishlarni amalga oshiring", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling, { Sizga non yo'q bu dasturlash olamida 😂 }", // 60 ++
];

/*    //CALLBACK function

function maslahatBering(a, callback) {
  // callbackni functionni parametri  qilib berib
  if (typeof a !== "number")
    callback("insert a number", null); // bu yerda callbackni chaqirib uni o'ziga parametrini berib ketyapmiz.
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);  // null qiymatini if conditionlar o'qimaydi shunchun javob olyatgand list[.]ni beryapti 
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log("passed here 0");
maslahatBering(68, (err, data) => {
  // bu yerda callbackni yaratib argumentiga < err , data > ni berdik

  if (err) console.log("ERROR: ", err);
  else {
    console.log("javob:", data); // bu yerda null qiymatni ko'rsatib o'tirmasligi uchun errorni alohida qilib else orqali kiritdik.
  }
});
console.log("passed here 1");

*/

/*      // ASYNC function

// // bu functionda error hosil qilish uchun "throw new Error" syntx kerak.
async function maslahatBering(a) {
  if (typeof a !== "number")
    throw new Error("insert a number"); // javob olish uchun shunchaki " return va "data" ni ko'rsatsak bo'ldi
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
    // setTimeout (function () {
    //   return list [5];
    // }, 5000);
  }
}  */

/*
// then & catch   <--- ko'rinishida. jvb olish

console.log("passed here 0");
maslahatBering(45)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1")
*/

/*
// ASYNC & await   <--- ko'rinishida call qilib jvb olish.

async function run() {
  // bu yerda har bir array elementni chaqirib alohida ishga tushirish uchun oson qilib yozildi
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31); // async func.lar birinchi yozilgan kod jvbi kelmaguncha passtdagi kodni ishga tushirmaydi.
  console.log(javob);
  javob = await maslahatBering(41); // ketma ketlikni saqlab ishga tushirish uchun aynan ASYNC func ishlatiladi
  console.log(javob);
}

run();
*/

console.log(' MIT TASK " A "');

function TaskA(harf, matn) {
  let sikl = 0;

  for (let h = 0; h < matn.length; h++) {
    if (matn[h] === harf) {
      sikl++;
    }
  }

  return sikl;
}

console.log(TaskA("l", "Alhamdulillah")); //call

console.log("===========================");

function sukcheA(mit, soz) {
  let son = 0;

  for (let m = 0; m < soz.length; m++) {
    if (soz[m] === mit) {
      son++;
    }
  }

  return son;
}

console.log(sukcheA("e", "SteveDev")); // call
