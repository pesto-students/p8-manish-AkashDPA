const api_base = 'https://api.shrtco.de/v2/';

const errorCodes = {
    1 : 'No URL specified ("url" parameter is empty)',
    2 :'Invalid URL submitted',
    3 : 'Rate limit reached. Wait a second and try again',
    4 : 'IP-Address has been blocked because of violating our terms of service',
    5 : 'shortcode code (slug) already taken/in use',
    6 : 'Unknown error',
    7 : 'No code specified ("code" parameter is empty)',
    8 : 'Invalid code submitted (code not found/there is no such short-link)',
    9 : 'Missing required parameters',
    10 : 'Trying to shorten a disallowed Link.',
}

const isValidUrl = urlString => {
    let urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

const shortenUrl = async (url) => {
    if(url==''){
        return {status: false, error: 'Please enter URL'}
    }
    let valid =isValidUrl(url);
    if(!valid){
        return {status: false, error: 'Invalid URL'}
    }
    
    const api_response = await fetch(api_base+`shorten?url=${url}`).then(r => r.json())
    if(api_response?.ok == true){
        return {status: true, short_url: api_response?.result?.full_short_link};
    }
    
    //error
    let error_code = api_response?.error_code
    if(error_code){
        return {status: false, error: errorCodes[error_code]};
    }

    return {status:false, error: api_response?.text}
}

export {isValidUrl, shortenUrl, errorCodes}