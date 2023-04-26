const initialState = {
  posts: [
    {
      id: "1",
      title: "First post",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("04-18-2023"),
      author: "John Doe",
    },
    {
      id: "2",
      title: "Second post",
      shortDescription: "Skrócony tekst",
      content: "Główna treść",
      publishedDate: new Date("04-21-2023"),
      author: "Noe",
    },
    {
      id: "3",
      title: "Third post",
      shortDescription: "The last of us",
      content: "The best game of 2022",
      publishedDate: new Date("04-01-2023"),
      author: "Joel",
    },
    {
      id: "4",
      title: "Fourth post",
      shortDescription: "GTA VI release date",
      content: "GTA VI will be released in December 2023",
      publishedDate: new Date("04-26-2023"),
      author: "Rockstar",
    },
  ],
};

export default initialState;
