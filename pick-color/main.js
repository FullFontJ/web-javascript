const button = document.querySelector("button");

const pickColor = async () => {
    const eyeDropper = new EyeDropper();
    var body = document.body;
    const { sRGBHex } = await eyeDropper.open();
    body.style.backgroundColor = sRGBHex;
    console.log(sRGBHex);
}

button.addEventListener("click", pickColor);