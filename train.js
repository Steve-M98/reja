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
maslahatBering(45)m           // shu yerda .then() avtomatik ravishda async funcni returndan qaytgan jvbni parametr qilib oladi.
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
// console.log(' MIT TASK " A "');

// Masalani izohi
// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

/* function TaskA(harf, matn) {
  let sikl = 0;

  for (let h = 0; h < matn.length; h++) {
    if (matn[h] === harf) {
      sikl++;
    }
  }

  return sikl;
}

console.log("Task A 1- misoli:", TaskA("l", "Alhamdulillah")); //call

console.log("===========================");

function sukche_A(mit, soz) {
  let son = 0;

  for (let m = 0; m < soz.length; m++) {
    if (soz[m] === mit) {
      son++;
    }
  }

  return son;
}

console.log("Task A 2- misoli:", sukche_A("e", "SteveDev")); // call 

console.log("****************************"); */

// MIT TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi YECHIM :

// YECHIM :

/*
function sukcheB(taskB) {
  let soni = 0;
  for (let i = 0; i < taskB.length; i++) {
    if (taskB[i] >= "0" && taskB[i] <= "9") {
      soni++;
    }
  }
  console.log("TASK B ni 1-misoli", soni);
}

sukcheB("sho67mr34540bei999k");

console.log("===========================");

// 2-misol

function devops(masala) {
  let raqamsoni = 0;
  for (let i = 0; i < masala.length; i++) {
    if (masala[i] >= "0" && masala[i] <= "9") {
      raqamsoni++;
    }
  }
  console.log("TASK B ni 2-misoli", raqamsoni);
  return raqamsoni;
}

devops("tas567kBniye75chish974qiyin09boldi8"); */

/*         MIT TASK " C "
TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!  */

//. MIT TASK C YECHIM

/*
class shop_mall {
  constructor(Un, kartoshka, yog) {
    this.Un = Un;
    this.kartoshka = kartoshka;
    this.yog = yog;
  }

  qabul(nomi, soni) {
    if (nomi === "Un") {
      this.Un += soni;
    } else if (nomi === "kartoshka") {
      this.kartoshka += soni;
    } else if (nomi === "cola") {
      this.yog += soni;
    }
    console.log(
      `Hozir soat ${new Date().toLocaleTimeString()} da ${nomi} ${soni} tonna va qabul qilindi.`,
    );
  }

  sotuv(nomi, soni) {
    if (nomi === "Un") {
      this.Un -= soni;
    } else if (nomi === "kartoshka") {
      this.kartoshka -= soni;
    } else if (nomi === "cola") {
      this.yog -= soni;
    }
    console.log(
      `Bugun soat ${new Date().toLocaleTimeString()} da ${nomi} ta ${soni} tonna sotildi.`,
    );
  }

  qoldi() {
    console.log(
      `방금 전에 ${new Date().toLocaleTimeString()} da Skladda ${this.Un} kg Un, ${this.kartoshka} tonna Kartoshka va ${this.yog} ta 5 litrlik Pista yog'i astatkada qoldi.`,
    );
  }
}

const shop = new shop_mall(1000, 600, 400);

shop.qabul("Un", 1000);
shop.sotuv("kartoshka", 500);
shop.qoldi();

*/

// console.log("*********************************");

/* TASK D

Ikkita parametra ega function tuzing, va functioning berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq mos kelsa true qiymat qaytarsin.

Masalan: checkContent("mitgroup", "gmtiprou") return true */

/*
function taskd(a, b) {
  if (a.length !== b.length) return false; // ikkala parametrni uzunlik miqdori teng bo'lsa kod davom etadi bo'lmsa false b.b to'xtaydi

  let sortedA = a.split("").sort().join(""); // split -> so'zni harflarga ajratib beradi,   sort -->  alifbo tartibibda saralaydi
  let sortedB = b.split("").sort().join(""); // join --> saralangan harflarni jamlaydi

  return sortedA === sortedB;
}

console.log(taskd("makhmudov", "shoyadbek"));
console.log(taskd("shoyadbek", "kebdayosh"));
console.log(taskd("leganda1998", "ganleda0111")); */

// =====================================

// TASK E

// Shunday function tuzing, u bitta string argumentini qabul qilib, qabul qilingan stringni teskari ko'rinishda return qilsin.

// Masalan: getReverse("hello") return "olleh"
/*
function taskE(a) {
  if (typeof a !== "string") return false; //

  return a.split("").reverse().join("");
}

console.log("javob:", taskE("kebdayohs"));  */

// =====================================

//      TASK F

// Yagona string argumentga ega findDoublers nomli function tuzing. Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa true yokida false natija qaytarsin.

// Masalan: findDoublers("hello") return true

/*
function findDoublers(taskF) {
  if (typeof taskF !== "string") return false;
  return new Set(taskF).size !== taskF.length; // new Set --> Set orqali bir hillarini olib tashlab yangi object yasa deyapmiz,
} //  olib tashlangan yangi objectni soni bilan eski holatdagi uzunligi bir hilmi deb tekshiryapmiz.

console.log(findDoublers("MIT A-7 REJA deploy qilindi"));
console.log(findDoublers("arfytvcnjoplk"));
*/

/*
 TASK ' G '
Yagona parametrga ega function tuzing. Array tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

Masalan: getHighestIndex([5, 21, 12, 21, 8]) return 1    */

function taskG(arr) {
  let highest = arr[0]; // array ichidagi eng katta qiymatni saqlash uchun o'zgaruvchi yaratdik va arrayning 0 indeksidagini qiymat qilib berildi
  let highestIndex = 0; // array ichidagi eng katta qiymatnin INDEX ni shu yerda saqlash uchun yaratildi.

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i]; // bu yerlarda loop o'zini ishini ajaradi.
      highestIndex = i;
    }
  }

  return highestIndex;
}

console.log(taskG([5, 21, 12, 21, 8])); // 1
