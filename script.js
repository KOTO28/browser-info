// URL情報を取得・表示
document.getElementById("url").textContent = window.location.href;

let table = document.getElementById("browser-info");

for (let key in navigator) {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = key;

    // objectの場合はJSONに変換
    let value = navigator[key];
    if (typeof value === "object" && value !== null) {
        try {
            cell2.textContent = JSON.stringify(value, null, 2);
        } catch (e) {
            cell2.textContent = "[Object - JSON conversion failed]";
        }
    } else {
        cell2.textContent = value;
    }

    console.log(`${key}: ${navigator[key]}`);
}
