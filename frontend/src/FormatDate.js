


const FormatDate = (isoString) => {
        const data = new Date(isoString);
        return data.toLocaleString('en-GB',{
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).replace(','," ")
    }

export default FormatDate