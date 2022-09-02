export const fetchSearchNews = async (searchText) => {
    try{
        const url = ` https://newsapi.org/v2/top-headlines?q=${searchText}&apiKey=fc48259ac29847549ef413127698eea6`;
        const response = await fetch(url);
        const data = await response.json();
        const content = data.articles.map((article) => {
            return {
                title: article.title,
                url: article.urlToImage,
                description: article.description,
                content: article.content,
                detail: article.url,
            };
        });
        return content;
    }catch(e){
        console.log(e)
    }

};