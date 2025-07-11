console.log("This is a popup!")
const colorPicker = document.getElementById("color-picker");
const result = document.getElementById("result");

colorPicker.addEventListener("change", (color) => {
    result.value = color.target.value;
    result.select();
    document.execCommand("copy");
});