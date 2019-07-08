console.log('Bulgaria summer');
const myImage = document.querySelector('.my-image');
fetch('https://secure.img1-fg.wfcdn.com/im/90926983/resize-h505-w505%5Ecompr-r85/3444/34441239/Burslem+Regent+Upholstered+Dining+Chair.jpg')
	.then(res => res.blob())
	.then(res => {
		const objectURL = URL.createObjectURL(res);
		myImage.src = objectURL;
});