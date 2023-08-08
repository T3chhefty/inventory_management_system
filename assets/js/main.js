// all major varriables
let dashBoard = document.querySelector(".dashboard-container");
let form = document.querySelector(".form");
let ItemMarker = document.querySelector("#item-marker");
let purchase = document.querySelector("#purchase");
let purchaseSection = document.querySelector(".purchase-section");
let purchaseTabIndicator = document.querySelector("#purchase");
let salesSection = document.querySelector(".sales-section");
let salesTabIndicator = document.querySelector("#sales");
let reportsSection = document.querySelector(".reports-section");
let reportsTabIndicator = document.querySelector("#reports");
// **************************************************************************************************************
// dashboard variables
let dashBoardTabIndicator = document.querySelector("#dash-board");
dashBoardTabIndicator.style.backgroundColor = "#033c73";
dashBoardTabIndicator.style.color = "#fff";

dashBoardTabIndicator.addEventListener("click", () => {
  dashBoardTabIndicator.style.backgroundColor = "#033c73";
  dashBoardTabIndicator.style.color = "#fff";

  //   display Dashboard
  dashBoard.style.display = "block";

  //   hide other elements
  form.style.display = "none";
  purchaseSection.style.display = "none";

  // hide sales and style
  salesSection.style.display = "none";
  salesTabIndicator.style.backgroundColor = "#F6F5F5";
  salesTabIndicator.style.color = "#033C73";
  //  style Item Elements
  itemTabIndicator.style.backgroundColor = "#F6F5F5";
  itemTabIndicator.style.color = "#033C73";

  //   place Indicator elements
  ItemMarker.innerHTML = "Dashboard";
  // style purchases tab to default
  purchaseTabIndicator.style.backgroundColor = "#F6F5F5";
  purchaseTabIndicator.style.color = "#033C73";

  //hide and style reports sectionTab to default
  reportsSection.style.display = "none";
  reportsTabIndicator.style.backgroundColor = "#F6F5F5";
  reportsTabIndicator.style.color = "#033C73";
});
// *****************************************************************************************************************
// for item elements

let itemTabIndicator = document.querySelector("#items");
itemTabIndicator.addEventListener("click", () => {
  form.style.display = "block";
  itemTabIndicator.style.backgroundColor = "#033c73";
  itemTabIndicator.style.color = "#fff";

  //   style dashboard
  dashBoardTabIndicator.style.backgroundColor = "#F6F5F5";
  dashBoardTabIndicator.style.color = "#033C73";
  //   hide other elements
  dashBoard.style.display = "none";

  //   place indicatr Element
  ItemMarker.innerHTML = "Add Stock";
  // style purchases tab to default
  purchaseSection.style.display = "none";
  purchaseTabIndicator.style.backgroundColor = "#F6F5F5";
  purchaseTabIndicator.style.color = "#033C73";

  // hide sales and style
  salesSection.style.display = "none";
  salesTabIndicator.style.backgroundColor = "#F6F5F5";
  salesTabIndicator.style.color = "#033C73";

  //hide and style reports sectionTab to default
  reportsSection.style.display = "none";
  reportsTabIndicator.style.backgroundColor = "#F6F5F5";
  reportsTabIndicator.style.color = "#033C73";
});

// *********************************************************************************************************************

// for purchase Tab

purchase.addEventListener("click", (e) => {
  // show purchase section
  purchaseSection.style.display = "block";
  //  hide Dasboard and styles
  dashBoard.style.display = "none";
  dashBoardTabIndicator.style.backgroundColor = "#F6F5F5";
  dashBoardTabIndicator.style.color = "#033C73";
  //  hide Items form and styles
  form.style.display = "none";
  itemTabIndicator.style.backgroundColor = "#F6F5F5";
  itemTabIndicator.style.color = "#033C73";
  // hide sales and style
  salesSection.style.display = "none";
  salesTabIndicator.style.backgroundColor = "#F6F5F5";
  salesTabIndicator.style.color = "#033C73";

  // display section marker
  ItemMarker.innerHTML = "Purchases";
  // purchase tab indicator on active
  purchaseTabIndicator.style.backgroundColor = "#033c73";
  purchaseTabIndicator.style.color = "#fff";

  //hide and style reports sectionTab to default
  reportsSection.style.display = "none";
  reportsTabIndicator.style.backgroundColor = "#F6F5F5";
  reportsTabIndicator.style.color = "#033C73";
});

// for sales tab
// ***********************************************************************************************************************
// ***********************************************************************************************************************
salesTabIndicator.addEventListener("click", () => {
  salesSection.style.display = "block";
  // stylling sales tab Section on active
  salesTabIndicator.style.backgroundColor = "#033c73";
  salesTabIndicator.style.color = "#fff";
  // display section marker
  ItemMarker.innerHTML = "Sales";

  // Hide Other Elements
  //  hide Dasboard and styles
  dashBoard.style.display = "none";
  dashBoardTabIndicator.style.backgroundColor = "#F6F5F5";
  dashBoardTabIndicator.style.color = "#033C73";
  //  hide Items form and styles
  form.style.display = "none";
  itemTabIndicator.style.backgroundColor = "#F6F5F5";
  itemTabIndicator.style.color = "#033C73";

  //hide purchases and style
  purchaseSection.style.display = "none";
  purchaseTabIndicator.style.backgroundColor = "#F6F5F5";
  purchaseTabIndicator.style.color = "#033C73";

  //hide and style reports sectionTab to default
  reportsSection.style.display = "none";
  reportsTabIndicator.style.backgroundColor = "#F6F5F5";
  reportsTabIndicator.style.color = "#033C73";
});

// ***************************************************************************************************************************
// ***************************************************************************************************************************

// for General reports

reportsTabIndicator.addEventListener("click", () => {
  // styling report tab on active
  reportsSection.style.display = "block";
  reportsTabIndicator.style.backgroundColor = "#033c73";
  reportsTabIndicator.style.color = "#fff";
  // display section marker
  ItemMarker.innerHTML = "Reports";

  // Hide Other Elements
  //  hide Dasboard and styles
  dashBoard.style.display = "none";
  dashBoardTabIndicator.style.backgroundColor = "#F6F5F5";
  dashBoardTabIndicator.style.color = "#033C73";
  //  hide Items form and styles
  form.style.display = "none";
  itemTabIndicator.style.backgroundColor = "#F6F5F5";
  itemTabIndicator.style.color = "#033C73";

  // hide sales and style
  salesSection.style.display = "none";
  salesTabIndicator.style.backgroundColor = "#F6F5F5";
  salesTabIndicator.style.color = "#033C73";
});
