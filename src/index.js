import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createList(inputText);
};
//div生成
const createList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタン押下
    deleteFromlist(completeButton.parentNode);
    //要素作成
    const addTaeget = completeButton.parentNode;
    addTaeget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //戻すボタン押下
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backbutton.parentNode.firstElementChild.innerText;
      createList(text);
    });
    addTaeget.appendChild(li);
    addTaeget.appendChild(backbutton);
    document.getElementById("complete-list").appendChild(addTaeget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタン押下
    deleteFromlist(deleteButton.parentNode);
  });
  //liタグ
  const li = document.createElement("li");
  li.innerText = text;
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

const deleteFromlist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
