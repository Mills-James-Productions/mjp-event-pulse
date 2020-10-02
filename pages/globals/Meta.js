import Head from 'next/head'

const Meta = (props) => (
    
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png"/>
        <link rel="stylesheet" href="/static/fonts/fonts.css" />
        <link rel="stylesheet" href="/pages/globals/globals.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
        <title> {props.title} </title>
        {/* {props.children} */}
    </Head>
)
export default Meta;

