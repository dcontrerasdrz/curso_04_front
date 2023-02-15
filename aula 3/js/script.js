const posts = [
    {
        title: "Google Chrome",
        subtitle:'History',
        contend: "google is a meu new best friend para developed by david or me :)"   
    },
   
];

const wrapper = document.getElementById('posts');
for (var i = 0; i < posts.length; i++){
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article");

    const title = document.createElement("h1");
    title.classList.add("article-title");

    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const subtitle = document.createElement("h3");
    article.classList.add("article-subtitle");

    const subtitleTex = document.createTextNode(postData.subtitle);
    subtitle.appendChild(subtitleTex);
    title.appendChild(subtitle);

    
    
    const contend = document.createElement("p");
    const contendText = document.createTextNode(postData.contend);

    contend.appendChild(contendText);    
    article.appendChild(contend);

    wrapper.appendChild(article)

} 
