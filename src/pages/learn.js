import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Paragraph2, Paragraph3, H3, H6 } from "baseui/typography"
import { Block } from "baseui/block"
import { StyledLink } from "baseui/link";
import BuffaloBelowTetons from "../components/buff-tetns"

const Learn = () => (
  <Layout>
    <SEO title="Page two" />

    <Block marginTop="1.50rem">

      <H3>What is Crypto Currancy Staking </H3>
      <Paragraph2>
        First generation crypto currancies like Bitcoin are based on a concept call proof of work.  In a proof of work
        based blockchain, transactions are randomly processed by a mining node that is the first to solve a complex
        algorithm at the end of a timeframe.  Unfortuantly, investors holding currancies like Bitcoin have no say in
        which network operator validates the transaction.  This also leads to a certain level of centralization because
        proof of work based protocols take huge amounts of resources of operate and are usually dominated by large
        companies.
      </Paragraph2>

      <Paragraph2>
        In contrast to these first generation crypto currancies a much more effecient and distribued method of securing a blockchain, called Proof of Stake,
        has been developed.  Proof of Stake protocols dramatically improved the efficiency of securing the blockchain because they don't
        require massive data centers preforming usless calculations to operate effectively.  This new approach secures the blockchaing by
        randomly selecting miners or validators from a pool of operators based on the amount of digital currancy that's been assigned to them.
        This process is called Staking, and has many advantages over proff of work based systems.  Instead of wasting energy and computational
        resources, Proof of Stake systems are more effecient, scaleable, and democratic.
      </Paragraph2>

      <H3>Proof Of Stake Systems We Support</H3>

      <Paragraph2>
        There are a number of Proof Of Stake systems that have been developed or are in development.  Currently, we're focusing on the
        Cardano blockchain because it has one of the strongest technical foundations is the industry, has Wyoming roots, and gives us
        the abiltiy to provide our customers with the best available tecnologies and methods.  In the future, we will contiue to evalute
        and offer our customers additional high quality options.
      </Paragraph2>

      <Paragraph2>
        <H6>What Is Cardano - ADA  ?</H6>
        <StyledLink href="https://www.cardano.org/en/home/" target="_blank"> Cardano </StyledLink>is home to the Ada cryptocurrency, which can be used to send and receive digital funds. This digital cash represents the future of money,
        making possible fast, direct transfers that are guaranteed to be secure through the use of cryptography.  Cardano is more than just a cryptocurrency,
        however, it is a technological platform that will be capable of running financial applications currently used every day by individuals, organisations
        and governments all around the world. The platform is being constructed in layers, which gives the system the flexibility to be more easily maintained
        and allow for upgrades by way of soft forks. After the settlement layer that will run Ada is complete, a separate computing layer will be built to handle
        smart contracts, the digital legal agreements that will underpin future commerce and business. Cardano will also run decentralised applications, or dapps,
        services not controlled by any single party but instead operate on a blockchain.
      </Paragraph2>
      <Paragraph2>
        This is the first blockchain project to be developed from a scientific philosophy, and the only one to be designed and built by a global team of leading
        academics and engineers. It is essential that the technology is secure, flexible and scalable for use by many millions of users. Consequently, considerable
        thought and care from some of the leading experts in their fields has been devoted to the project and informed design decisions. The scientific rigour applied
        to mission-critical systems such as aerospace and banking has been brought to the field of cryptocurrencies, with a high assurance implementation. We believe
        this is the first time that this has been done.
      </Paragraph2>
      <Paragraph2>
        A major innovation of Cardano is that it will balance the needs of users with those of regulators, and in doing so combine privacy with regulation. The vision
        for Cardano is that its new style of regulated computing will bring greater financial inclusion by providing open access for all to fair financial services.
      </Paragraph2>

    </Block>

    <Block>
      <div style={{ maxWidth: `960px`, marginBottom: `0em`, marginTop: `3.45rem` }}>
        < BuffaloBelowTetons />
        <Paragraph3>This photo was taken by Matt Anderson in Wyoming, and displays some of the beauty that it has to offer.</Paragraph3>
      </div>
    </Block>

  </Layout>
)

export default Learn
