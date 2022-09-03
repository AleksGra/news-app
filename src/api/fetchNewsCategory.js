export const fetchNewsCategory = async (category) => {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=15b5dec82ce84a9f870e969a8e4eeb6d`;

        const response = await fetch(url).then();
        const data = await response.json();

        const content = data.articles?.map((article) => {
            return {
                title: article.title,
                url: article.urlToImage,
                description: article.description,
                content: article.content,
                detail: article.url,
            };
        });
        return content.filter((item) => item.url !== null);
    } catch (e) {
        console.log(e)
    }
};
