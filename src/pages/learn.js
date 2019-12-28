import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Paragraph2, Paragraph3, H3, H6 } from "baseui/typography"
import { Block } from "baseui/block"
import { StyledLink } from "baseui/link"
import BuffaloBelowTetons from "../components/buff-tetns"

const Learn = () => (
  <Layout>
    <SEO title="Learn" />

    <Block marginTop="1.50rem" paddingLeft=".5rem" paddingRight=".5rem">
      <H3>Crypto Currency Staking </H3>
      <Paragraph2>
        First generation crypto currencies like Bitcoin are based on a concept
        call proof of work. In a proof of work based blockchain, transactions
        are randomly processed by a mining node that is the first to solve a
        complex algorithm at the end of a time frame. Unfortunately, investors
        holding currencies like Bitcoin have no say in which network operator
        validates the transaction. This also leads to a certain level of
        centralization because proof of work based protocols take huge amounts
        of resources to operate and are usually dominated by just a few large companies.
      </Paragraph2>

      <Paragraph2>
        In contrast to these first generation crypto currencies, a much more
        efficient and distributed method of securing a blockchain has been developed, 
        called Proof of Stake. Proof of Stake protocols dramatically
        improved the efficiency of securing the blockchain because they don't
        require massive data centers preforming useless calculations to operate
        effectively. This new approach secures the blockchain by randomly
        selecting miners or validators from a pool of operators based on the
        amount of digital currency that's been assigned to them. This process is
        called Staking, and has many advantages over proof of work based
        systems. Instead of wasting energy and computational resources, Proof of
        Stake systems are more efficient, salable, and democratic.
      </Paragraph2>

      <H3>Proof Of Stake Systems We Support</H3>

      <Paragraph2>
        There are a number of Proof Of Stake systems that have been developed or
        are in development. Currently, we're focusing on the Cardano blockchain
        because it has one of the strongest technical foundations is the
        industry, has Wyoming roots, and gives us the ability to provide our
        customers with the best available technologies and methods. In the
        future, we will continue to evaluate and offer our customers additional
        high quality options.
      </Paragraph2>

      <Paragraph2>
        <H6>What Is Cardano - ADA ?</H6>
        <StyledLink href="https://www.cardano.org/en/home/" target="_blank">
          {" "}
          Cardano{" "}
        </StyledLink>
        is home to the Ada crypto currency, which can be used to send and
        receive digital funds. This digital cash represents the future of money,
        making possible fast, direct transfers that are guaranteed to be secure
        through the use of cryptography. Cardano is more than just a crypto
        currency, however, it is a technological platform that will be capable
        of running financial applications currently used every day by
        individuals, organizations and governments all around the world. The
        platform is being constructed in layers, which gives the system the
        flexibility to be more easily maintained and allow for upgrades by way
        of soft forks. After the settlement layer that will run Ada is complete,
        a separate computing layer will be built to handle smart contracts, the
        digital legal agreements that will underpin future commerce and
        business. Cardano will also run decentralized applications, or dapps,
        services not controlled by any single party but instead operate on a
        blockchain.
      </Paragraph2>

      <Paragraph2>
        This is the first blockchain project to be developed from a scientific
        philosophy, and the only one to be designed and built by a global team
        of leading academics and engineers. It is essential that the technology
        is secure, flexible and scalable for use by many millions of users.
        Consequently, considerable thought and care from some of the leading
        experts in their fields has been devoted to the project and informed
        design decisions. The scientific rigor applied to mission-critical
        systems such as aerospace and banking has been brought to the field of
        crypto currencies, with a high assurance implementation. We believe this
        is the first time that this has been done.
      </Paragraph2>

      <Paragraph2>
        A major innovation of Cardano is that it will balance the needs of users
        with those of regulators, and in doing so combine privacy with
        regulation. The vision for Cardano is that its new style of regulated
        computing will bring greater financial inclusion by providing open
        access for all to fair financial services.
      </Paragraph2>
    </Block>

    <Block>
      <div
        style={{ maxWidth: `960px`, marginBottom: `0em`, marginTop: `3.45rem` }}
      >
        <BuffaloBelowTetons />
        <Paragraph3>
          This photo was taken by Matt Anderson in Wyoming, and displays some of
          the beauty that it has to offer.
        </Paragraph3>
      </div>
    </Block>
  </Layout>
)

export default Learn
