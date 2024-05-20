export function showCurrentDate() {
    const today = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    const currentDate = `Current Date: ${month} ${date}, ${year}`;
    // console.log(currentDate);
    return currentDate;
}

  // Call the function to display the current date
// showCurrentDate();
