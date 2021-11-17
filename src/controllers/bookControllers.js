export function makeBookListData(rawBookData) {
    let odd = false
    return rawBookData.map((rawBook) => {
        let isEmpasised = false
        if (rawBook.id == 4) {
            isEmpasised = true
        }
        odd = !odd;
        return {
            author: rawBook.author,
            title: rawBook.title,
            id: rawBook.id,
            backgroundClass: odd ? "dark" : "light",
            isEmpasised
        }
    })
}