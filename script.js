var quotes = [
    {
        quote: "Talk is cheap. Show me the code",
        author: "Linus Torvalds"
    },
    {
        quote: "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create",
        author: "Why The Lucky Stiff"
    },
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute",
        author: "Harold Abelson"
    },
    {
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
        author: "John Woods"
    },
    {
        quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning",
        author: "Rick Cook"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        author: "Martin Fowler"
    },
    {
        quote: "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct",
        author: "Donald E. Knuth"
    },
    {
        quote: "I'm not a great programmer; I'm just a good programmer with great habits",
        author: "Kent Beck"
    },
    {
        quote: "Truth can only be found in one place: the code",
        author: "Robert C. Martin"
    }
]

function changeQuote () {
    var rand = Math.floor(Math.random() * quotes.length);
    document.querySelector("p").innerText = quotes[rand].quote;
    document.querySelector("span").innerText = quotes[rand].author;
}