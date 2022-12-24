/**
 * => How To Use
 * 1 let username = eleId('username');
 */

let eleId = (id) => document.getElementById(id);
// Form
let form = eleId("form");
// Input Ask
let ask = eleId("ask");
// Div Ask
let askError = eleId("askError");
// Input Answer
let answer = eleId("answer");
let answer1 = eleId("answer1");
// let answer2 = eleId("answer2");
// let answer3 = eleId("answer3");
// let answer4 = eleId("answer4");
// let answer5 = eleId("answer5");
// let answer6 = eleId("answer6");
// let answer7 = eleId("answer7");
// let answer8 = eleId("answer8");
// let answer9 = eleId("answer9");
// let answer10 = eleId("answer10");
// Div Answer
let answerError = eleId("answerError");

// Function Create Data
const createInfo = async (e) => {
  const doc = {
    // Value Input Ask
    ask: form.ask.value,
    // Value Input Answer
    answer: form.answer.value,
    answer1: form.answer1.value,
    // answer2: form.answer2.value,
    // answer3: form.answer3.value,
    // answer4: form.answer4.value,
    // answer5: form.answer5.value,
    // answer6: form.answer6.value,
    // answer7: form.answer7.value,
    // answer8: form.answer8.value,
    // answer9: form.answer9.value,
    // answer10: form.answer10.value,
  };
  await fetch(`http://localhost:3000/info`, {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });
  // window.location.replace("/");
};

// Form On Submit
document.forms[0].onsubmit = function (e) {
  // => Var Ask Valid
  let askValid = false;
  // => Var Answer Valid
  let AnswerValid = false;
  // => Global Var
  let messageAsk = ``;
  let messageAnswer = ``;
  //  And تستخدام فى تطابق جميع الشروط &&
  //  Or تطابق شارط من الشروط ||
  // If Input Empty
  if (ask.value.trim() == ``) {
    messageAsk = `حقل الإدخال فارغ`;
    // message = `Input Is Empty`;
    askError.innerHTML = messageAsk;
    askError.style.border = "2px solid red";
  }
  // Customer Name Is Valid
  // If Input Not Empty
  // If Value More Than Min Text Value
  // If Value Less Than Max Text Value
  else if (ask.value != ``) {
    messageAsk = `جيد`;
    // messageCustomerName = `Good`;
    askError.innerHTML = messageAsk;
    ask.style.border = "2px solid #080";
    askValid = true;
  }
  // =>
  // If Value Is Default
  if (answer.value.trim() == ``) {
    messageAnswer = `حقل الإدخال فارغ`;
    // message = `Input Is Empty`;
    answerError.innerHTML = messageAnswer;
    answerError.style.border = "2px solid red";
  }
  // If Input Empty
  else if (answer.value != ``) {
    messageAnswer = `جيد`;
    // messageCustomerType = `Good`;
    answerError.innerHTML = messageAnswer;
    answer.style.border = "2px solid #080";
    AnswerValid = true;
  }
  // Inputs Is Not Valid
  if (askValid === false || AnswerValid === false) {
    e.preventDefault();
  }
  // All Is Good
  else {
    createInfo();
  }
};

//
//
//
//

/*
?===============================================
?                Variables
?===============================================
*/

// => Element Parent Items For Api
const innerMain = eleId("inner-main");

/*
?===============================================
?                 Api Url
?===============================================
*/

const APIURL = "http://localhost:3000/info?_sort=ask&_order=desc";

/*
?===============================================
?                 Start Play Function
?===============================================
*/

getApi(APIURL);

/*
?===============================================
?               Functions
?===============================================
*/

async function getApi(url) {
  const response = await fetch(url)
    .then((answer) => {
      // Response & Answer Api هى حالة طلب ال
      console.log(
        "%cResponse & Answer %cApi هى حالة طلب ال",
        "color: red; font-size: 18px",
        "color: blue; font-size: 18px"
      );
      console.log("Answer: ", answer);
      // رجع البيانات كا ابجاكت
      return answer.json();
    })
    .then((data) => {
      // Data Api هى البيانات التي تم الحصول عليها من ال
      console.log(
        "%cData %cApi هى البيانات التي تم الحصول عليها من ال",
        "color: red; font-size: 18px",
        "color: blue; font-size: 18px"
      );
      console.log("Data: ", data);
      // Data Items Api الوصول الى العناصر الموجودة فى
      console.log(
        "%cData Items %cApi الوصول الى العناصر الموجودة فى",
        "color: red; font-size: 18px",
        "color: blue; font-size: 18px"
      );
      console.log("Data: ", data);
      showItemsApi(data);
    })
    .catch((error) => {
      // تستخدام لتخزين الاخطاء فى حالة يوجد خطاء Catch
      console.log(
        "%cCatch Error %c تستخدام لتخزين الاخطاء فى حالة يوجد خطاء ",
        "color: red; font-size: 18px",
        "color: blue; font-size: 18px"
      );
      console.error("Error: ", error);
    });
}
function showItemsApi(Items) {
  // Api جميع البيانات التي تم الحصول عليها من ال
  console.log(
    "%cItems %cApi جميع البيانات التي تم الحصول عليها من ال",
    "color: red; font-size: 18px",
    "color: blue; font-size: 18px"
  );
  console.log("Items: ", Items);
  // Clear Parent Main Div
  innerMain.innerHTML = "";
  Items.forEach((element) => {
    // Api البيانات الفردية التي تم الحصول عليها من ال
    console.log(
      "%cElement %cApi البيانات الفردية التي تم الحصول عليها من ال",
      "color: red; font-size: 18px",
      "color: blue; font-size: 18px"
    );
    console.log("Element: ", element);
    // Create New Div
    const itemEl = document.createElement("div");
    // Add Class To The New Div
    itemEl.classList.add("item");
    // Get All Items You Need It
    const { id, ask, answer } = element;
    //
    itemEl.innerHTML = `
    <div class="text">
      <h3 class="ask">${ask}</h3>
      <p class="lead answer">${answer}</p>
    </div>`;
    // Add The New Div To Parent
    innerMain.appendChild(itemEl);
  });
}
