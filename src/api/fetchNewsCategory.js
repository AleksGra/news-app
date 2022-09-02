
export const fetchNewsCategory = async (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fc48259ac29847549ef413127698eea6`;

    const response = await fetch(url).then();
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
    return content.filter((item) => item.url !== null);
};
