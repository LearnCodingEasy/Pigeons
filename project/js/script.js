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
// Div Answer
let answerError = eleId("answerError");

// Function Create Data
const createInfo = async (e) => {
  const doc = {
    // Value Input Ask
    ask: form.ask.value,
    // Value Input Answer
    answer: form.answer.value,
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
  const minText = 13;
  const maxText = 35;

  // If Input Empty
  if (ask.value.trim() == ``) {
    messageAsk = `حقل الإدخال فارغ`;
    // message = `Input Is Empty`;
    askError.innerHTML = messageAsk;
    askError.style.border = "2px solid red";
  }
  // If Value Less Than Min Text Value
  else if (ask.value.length < minText) {
    messageAsk = `يجب أن يكون اسم المستخدم اكبر من ${minText} حرف.`;
    // messageAsk = `User Name must be More Thane ${minText}  characters.`;
    askError.innerHTML = messageAsk;
    ask.style.border = "2px solid red";
    askError.style.cssText = "font-size: 13px;";
  }
  // If Value More Than Max Text Value
  else if (ask.value.length > maxText) {
    messageAsk = `يجب أن يكون اسم المستخدم اصغر من ${maxText} حرف.`;
    // messageAsk = `Username must be between ${minText} and ${maxText} characters.`;
    askError.innerHTML = messageAsk;
    ask.style.border = "2px solid red";
    askError.style.cssText = "font-size: 13px;";
  }
  // Customer Name Is Valid
  // If Input Not Empty
  // If Value More Than Min Text Value
  // If Value Less Than Max Text Value
  else if (
    ask.value != `` ||
    ask.value.length > minText ||
    ask.value.length < maxText
  ) {
    messageAsk = `جيد`;
    // messageCustomerName = `Good`;
    askError.innerHTML = messageAsk;
    ask.style.border = "2px solid #080";
    askValid = true;
    // customerNameIcon.classList.add("fa-check");
    // customerNameIcon.classList.add("fa-check");
    // customerNameIcon.classList.remove("fa-times");
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

const APIURL = "http://localhost:3000/info?_sort=customerName&_order=desc";

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
      <h3>${id}</h3>
      <h3>${ask}</h3>
      <h3>${answer}</h3>
    </div>`;
    // Add The New Div To Parent
    innerMain.appendChild(itemEl);
  });
}
