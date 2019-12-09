import React from "react"

import TetonBuffalo from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Paragraph2, Paragraph3, H3 } from "baseui/typography"
import { StyledLink } from "baseui/link";
import { Block } from "baseui/block"

const aboutPage = () => (
    <Layout>

        <SEO title="About" />
        <Block marginTop="1.50rem">
            <H3>About</H3>
            <Paragraph2>
              Tetonicks mission is to connect people and techology.
              We do this by delivering techology based products that are effective, easy
              to use, and high quality.  In a continuously evolving world,
              we utilize the best available core technologies and methods like
              blockchains to provide our customers with great experiences. We're located in the beautiful state of Wyoming,
              and endorse the <StyledLink href="https://wyoleg.gov/2010/Engross/SF0051.pdf" target="_blank"> "Code of the West" </StyledLink>
              as our guiding set of principles.  By addopting these principles, we're challenening ourselves and others to
              rise above the status quo.  We hope you join us!
            </Paragraph2>
            <H3>Contact</H3>
            <Paragraph2>
              If you need assistance, please call or email us:
              <ul style={{ marginTop: `0.50rem` }}>
                  <li>PH: *(one)three,zero,seven-seven,six,zero-three,six,nine,two*</li>
                  <li>EM: *linicks(at)gmail(dot)com*</li>
              </ul>

            </Paragraph2>
        </Block>

        <Block>
            <div style={{ maxWidth: `960px`, marginBottom: `0em`, marginTop: `2.45rem` }}>
                <TetonBuffalo />
                <Paragraph3>This photo was taken by Ryan Bailey in Wyoming, and displays some of the beauty that it has to offer.</Paragraph3>
            </div>
        </Block>

    </Layout>
)

export default aboutPage