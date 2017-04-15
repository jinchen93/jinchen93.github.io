function renderNewPage () {
  pageName = this.value;
  html = document.querySelector('html');
  filename = `http://jinchen93.github.io/${pageName}.html`;

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filename, true);
  xmlhttp.send()
  text = xmlhttp.responseText

  console.log(text)
  // html.innerHTML = `<object type="text/html" data="${pageName}.html" ></object>`
}

buttons = document.querySelector('button');
buttons.addEventListener("click", renderNewPage);
