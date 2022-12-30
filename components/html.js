export default (props) => (
    <html lang="zh">
        <meta charset="UTF-8" />
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link href="tailwind.css" rel="stylesheet"></link>
            <title>{props.title}</title>
        </head>
        <body>{props.children}</body>
    </html>
)
