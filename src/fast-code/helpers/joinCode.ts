export const joinCode = ( html : string, css : string, js : string, title : string ) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title> ${ title } </title>
                <style>
                    ${ css }
                </style>
            </head>
            <body>
                ${ html }
                <script>
                    ${ js }
                </script>
            </body>
        </html>`;
}
