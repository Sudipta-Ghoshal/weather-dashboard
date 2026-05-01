function dateFormatter(value, format, isMS) {
    if (!format) return value;
    if (!isMS) {
        value = value * 1000;
    }
    const date = new Date(value);
    let options;

    if (format === 'date') {
        options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    } else if (format === 'time') {
        options = { hour: '2-digit', minute: '2-digit' };
    }

    return Intl.DateTimeFormat('en-US', options).format(date)
}

export default dateFormatter;