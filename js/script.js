const posts = [
    {
        title: "Google Chrome",
        contend: "google is a meu new best friend para developed by david or me :)"   
    },
    {
        title: "Mozilla Firefox",
        contend:"Mozilla is a meu new best friend para developed by david or me :)" 
    },
    {
        title: "Microsoft Edge",
        contend:"Microsoft Edge is a meu new best friend para developed by david or me :)"
    },
];

const wrapper = document.getElementById('posts');
for (var i = 0; i < posts.length; i++){
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article");

    const title = document.createElement("h2");
    title.classList.add("article-title");

    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    
    const contend = document.createElement("p");
    const contendText = document.createTextNode(postData.contend);

    contend.appendChild(contendText);    
    article.appendChild(contend);

    wrapper.appendChild(article)

} 
