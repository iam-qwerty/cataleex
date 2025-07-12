// Define the client type
export type Client = {
    // id: number;
    name: string;
    logo: string;
    url: string;
    // description: string;
};

export const clients: Client[] = [
    {
        name: "Ondo Foundation",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cDovL29uZG8uZm91bmRhdGlvbi9mYXZpY29uLmljbw==.ico?fm=png",
        url: "https://ondo.foundation"
    },
    {
        name: "Injective",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cDovL2luamVjdGl2ZS5jb20vZmF2aWNvbi5pY28=.ico?fm=png",
        url: "https://injective.com"
    },
    {
        name: "Rango Exchange",
        logo: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop&crop=center",
        url: "https://rango.exchange"
    },
    // {
    //     name: "GuildFi",
    //     logo: null,
    //     url: "https://guildfi.com"
    // },
    {
        name: "Ocean Protocol",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9vY2VhbnByb3RvY29sLmNvbS9pY29ucy9pY29uLTE5MngxOTIucG5n.png",
        url: "https://oceanprotocol.com"
    },
    {
        name: "Tribal Finance",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cDovL3N5bmVzaXMub25lL2ltYWdlcy9sb2dvLnBuZw%3D%3D.png",
        url: "https://tribal.finance"
    },
    // {
    //     name: "Stader Labs",
    //     logo: null,
    //     url: "https://staderlabs.com"
    // },
    {
        name: "Band Protocol",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cDovL2JhbmRwcm90b2NvbC5jb20vZmF2aWNvbi5wbmc%3D.png",
        url: "https://bandprotocol.com"
    },
    {
        name: "Synesis One",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cDovL3N5bmVzaXMub25lL2ltYWdlcy9sb2dvLnBuZw%3D%3D.png",
        url: "https://synesis.one"
    },
    {
        name: "EMoney",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cDovL2Vtb25leS5jb20vaW1hZ2VzL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZw%3D%3D.png",
        url: "https://emoney.com"
    },
    {
        name: "Push Chain",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cDovL3B1c2gub3JnL2Fzc2V0cy93ZWJzaXRlL2Zhdmljb24uaWNv.ico?fm=png",
        url: "https://push.org"
    },
    {
        name: "Lossless",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cDovL2xvc3NsZXNzLmlvL2ljb25zL2ljb24tMTkyeDE5Mi5wbmc%2Fdj1mMTNlZGY4YTg0OGJmM2Q3NTRiMjc1MjY3NGM1YTI3Zg%3D%3D.jpeg",
        url: "https://lossless.io"
    },
    {
        name: "InsurAce",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ffavicons%2FaHR0cDovL2luc3VyYWNlLmlvL2Zhdmljb24ucG5n.png",
        url: "https://insurace.io"
    },
    {
        name: "BakerySwap",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cDovL2Jha2VyeXN3YXAub3JnL2ltYWdlcy8xOTJ4MTkyX0FwcF9JY29uLnBuZw%3D%3D.png",
        url: "https://bakeryswap.org"
    },
    // {
    //     name: "MELOS",
    //     logo: "null",
    //     url: "https://melos.studio"
    // },
    {
        name: "Cream Finance",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cDovL2Jha2VyeXN3YXAub3JnL2ltYWdlcy8xOTJ4MTkyX0FwcF9JY29uLnBuZw%3D%3D.png",
        url: "https://cream.finance"
    },
    {
        name: "Taraxa",
        logo: "data:image/png;base64,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",
        url: "https://taraxa.io"
    },
    {
        name: "XPLA",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cDovL3hwbGEuaW8vZmF2aWNvbi5pY28=.ico?fm=png",
        url: "https://xpla.io"
    },
    {
        name: "Akropolis",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cDovL2Frcm9wb2xpcy5pby9mYXZpY29uLmljbw==.ico?fm=png",
        url: "https://akropolis.io"
    },
    {
        name: "Formation Finance",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9mb3JtYXRpb24uZmkvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMDUvY3JvcHBlZC1yb2NrLWJsYWNrLTEtMTgweDE4MC5qcGc%3D.jpeg",
        url: "https://formation.fi"
    },
    // {
    //     name: "Thinkin",
    //     logo: null,
    //     url: "https://thinkin.ink"
    // },
    {
        name: "Monster Galaxy",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cHM6Ly93d3cucGxheW1vbnN0ZXJnYWxheHkuY29tL2Zhdmljb24uaWNv.ico?fm=png",
        url: "https://playmonstergalaxy.com"
    },
    {
        name: "Thetan World",
        logo: "https://assets.thetanarena.com/public_assets/thetan_world_ldp/logo/logo.png",
        url: "https://thetanworld.com"
    },
    // {
    //     name: "Zone.Game",
    //     logo: null,
    //     url: "https://zone.game"
    // },
    // {
    //     name: "Xion (Burnt)",
    //     logo: null,
    //     url: "https://xion.burnt.finance"
    // },
    {
        name: "BSCN",
        logo: "https://assets.thetanarena.com/public_assets/thetan_world_ldp/logo/logo.png",
        url: "https://bsc.news"
    },
    {
        name: "DAOventures",
        logo: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81ZmI4YjU3MGMwNjA1NzM0MjI4Nzk5NGMvNWZiYTc0NjViNzRmNzMzMWFlYjFhZGViX01hc2slMjBHcm91cC0xLnBuZw%3D%3D.png",
        url: "https://www.daoventures.co"
    },
    {
        name: "Rario",
        logo: "https://creatorspace.imgix.net/sites/favicons/aHR0cDovL3JhcmlvLmNvbS9mYXZpY29uLmljbw==.ico?fm=png",
        url: "https://rario.com"
    },
        {
            name: "Bounce Finance",
            logo: "https://www.bounce.finance/images/header/logo.svg",
            url: "https://www.bounce.finance"
        },
    {
        name: "Common",
        logo: "https://commonwealth.im/brand_assets/common-white.png",
        url: "https://commonwealth.im"
    },
    // {
    //     name: "Rift Finance",
    //     logo: null,
    //     url: "https://rift.finance"
    // },
    // {
    //     name: "Trias",
    //     logo: null,
    //     url: "https://trias.one"
    // },
    {
        name: "Ruby Protocol",
        logo: "https://www.bounce.finance/images/header/logo.svg",
        url: "https://ruby.xyz"
    },
];