export const dateFormater = (date) => {
    const inputDate = new Date(date);

    const options = { day: '2-digit', month: 'long', year: '2-digit' };
    const formattedDate = inputDate.toLocaleDateString('en-GB', options);
    return formattedDate;
}