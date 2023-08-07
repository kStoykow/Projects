export const dateFormater = (date) => {
    const inputDate = new Date(date);

    const options = { day: '2-digit', month: 'short', year: '2-digit' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options)
        .replace(',', '')
        .toLowerCase();
    return formattedDate;
}