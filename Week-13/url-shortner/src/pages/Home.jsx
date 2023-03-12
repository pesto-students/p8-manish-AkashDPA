import React, {useState} from 'react';
import {shortenUrl} from '../shortnerLib'

const Home = () => {
    const homeStyle = {
        backgroundImage : "url('bg_image.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '0.3',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 'auto',
        zIndex: '-999'
    }

    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    
    const shorten = async () => {
        setShowLoader(true)
        setError('')
        setShortUrl('')
        let result = await shortenUrl(url);
        setShowLoader(false)
        if(result?.status == false){
            return setError(result?.error)
        }
        setShortUrl(result?.short_url);
    }

    const copyLink = async () => {
        try {
          await navigator.clipboard.writeText(shortUrl);
        } catch (err) {
          setError('Clipboard copying is blocked by your browser');
        }
    }

    return(
        <>
            <div style={homeStyle} className='h-100'>
            </div>
            <div className="row h-50 mt-5">
                <div className="col-6">
                    <h2 className="mx-auto text-center lh-lg">
                        A simple tool that<br />
                        takes a <strong>loooooong URL</strong> and turns it into a <br />
                        <strong>Short URL</strong>
                    </h2>
                </div>
                <div className="col-6">
                    <img src="url_shortner.jpg" alt="Url shortner" className="img-fluid rounded rounded-4" style={{maxWidth: '400px'}} />
                </div>
                
                <form action={() => shortUrl()} className="pt-4">
                    <div className="add-todo d-flex justify-content-center">
                        <input className="form-control w-50" placeholder="Enter URL to shorten" value={url} onChange={(e) => setUrl(e.target.value.trim())}/>
                        <button type="button" className="btn btn-lg btn-success mx-2 rounded" disabled={showLoader} onClick={shorten}>Shorten</button>
                    </div>
                </form>
                <p className="text-danger text-center my-2">
                    {error}
                </p>

                <div className={showLoader ? 'd-block' : 'd-none'}>
                    <div className='text-center lead text-primary'>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        &nbsp; Converting...
                    </div>
                </div>

                <div className={shortUrl=='' ? 'd-none' : 'd-block'}>
                    <div className="input-group w-25 mx-auto">
                        <input type="text" className="form-control" disabled="disabled" value={shortUrl} />  
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={copyLink}>Copy</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home