const notes = [{
		title: "保护与传承",
		content: "这件川西漆器展现了精湛的工艺和独特的设计风格。",
		author: "李明 - 传统川西漆器工匠",
		image: "./imgs/1.jpg",
		link: "./details.html"
	},
	{
		title: "川西非遗",
		content: "这个川西漆器融合了传统与现代元素，散发着古朴与时尚并存的魅力。",
		author: "王红 - 设计师兼川西漆器艺术家",
		image: "./imgs/2.jpg",
		link: "./details.html"
	},
	{
		title: "川西非遗之美",
		content: "这件川西漆器以细腻的纹饰和华丽的色彩吸引着人们的目光。",
		author: "张伟 - 川西漆器雕刻师",
		image: "./imgs/3.jpg",
		link: "./details.html"
	},
	{
		title: "跨越时空的回响",
		content: "这件川西漆器透露出浓厚的文化氛围，让人仿佛置身于古老传统的韵味之中。",
		author: "刘芳 - 川西漆器绘画师",
		image: "./imgs/4.jpg",
		link: "./details.html"
	}
];

const noteList = document.getElementById("noteList");

// 生成笔记列表
function renderNotes() {
	noteList.innerHTML = "";
	notes.forEach(note => {
		const li = document.createElement("li");
		li.classList.add("note");
		li.innerHTML = `
      <a href="${note.link}" target="_blank">
        <h2>${note.title}</h2>
        <img src="${note.image}" alt="${note.title}">
        <p>${note.content}</p>
        <p class="author">作者：${note.author}</p>
      </a>
    `;
		noteList.appendChild(li);
	});
}

// 初始化页面
function init() {
	renderNotes();
}

// 调用初始化函数
init();

function submitTest() {
	alert("提交成功");
	// 防止表单提交后页面跳转
	return false;

}