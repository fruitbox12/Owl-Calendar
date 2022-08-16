import { Container } from 'semantic-ui-react';
import { Component } from 'react';
import Head from "next/head";

class Layout extends Component {

    render = () => {
        return (
            <Container>
                        <style jsx global>{`
            body {

              color: #333;
            }
            h1 {
              font-weight: 700;
            }
            p {
              margin-bottom: 10px;
            }
            `}</style>
                <Head>
                    <title>Owl Calendar</title>
                    <link rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
                </Head>
                {this.props.children}
            </Container>
        )
    }
}
export default Layout
