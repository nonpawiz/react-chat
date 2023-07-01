import { Helmet } from 'react-helmet-async';

interface Meta {
    title?: string,
    description?: string,
    name?: string,
    type?: string,
}

export default function Meta({ title, description, name, type }: Meta) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name='description' content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

        </Helmet>
    )
}