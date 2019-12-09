import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Paragraph2, Paragraph3, H3 } from "baseui/typography"

import {
  Card,
  StyledBody
} from "baseui/card";
import { Block } from "baseui/block"
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { StyledLink } from "baseui/link";

import oldminer from "../images/old-miner.jpg";


const IndexPage = () => (

  <Layout>
    <SEO title="Home" />

    <Block margin="auto" width="95%" marginTop="2.70rem">
      <FlexGrid
        flexGridColumnCount={[1, 1, 2]}
        flexGridColumnGap="scale600"
        flexGridRowGap="scale600"
      >
        <FlexGridItem float='left' marginTop="1.5rem">
          <center><H3>Earn Passive Income!</H3></center>
          <Paragraph2>
            Make the most of your "Proof Of Stake" crypto currancies, and stake them with our
            professional staking services.  Our stake pools provide you with a reliable
            business partner that delivers a great return on your investment.  Our moderate fees
            give you maximum returns while giving us an oppertunity to provide above average service.
            Please select from one of our current stake pools to start earning today.
          </Paragraph2>

          <center><H3>Shelly Incentivized Testnet </H3></center>
          <Paragraph2>
            Our current stakepool is part of the Cardano blockchain development phase called "Shelly".  This phase
            is focused on the decentralization of the blockchain, and adds the important staking features outlined the the Ouroboros protocol.
            This is an early phase of the development of Cardano, but the rewards are very real.  If you are particpating
            in the the Incentivized Test Network, and would like to stake your ADA, we would love to provide you with
            a great stake pool.  You can find the staking details on their website dedicated to the
          <StyledLink href="https://staking.cardano.org/" target="_blank"> Shelly Incentivized Testnet </StyledLink>.
          </Paragraph2>


        </FlexGridItem>

        <FlexGridItem paddingLeft="6%" >
          <Card
            overrides={{ Root: { style: { width: '328px' } } }}
            headerImage={oldminer}
            title="Cardano - ADA Stake Pool"
          >
            <StyledBody>
              Just like the adventurous prospecorts of the old west, this stake pool will
              bring home the ADA.
          </StyledBody>

            <ul style={{
              margin: `0 auto`,
              padding: `0px 0.8rem 0.80rem`,
              paddingTop: 0,
            }}>
              <li>Our Stake Pool Ticker Symbole: TTNK </li>
              <li>Our Stake Pool ID: TBA!</li>
              <li>Our Stake Pool FEE: 7%</li>
              <li>Your ROI: 93% Of stake rewards.</li>
            </ul>

          </Card>
        </FlexGridItem>
      </FlexGrid>

      <Paragraph3 backgroundColor="#de6356" padding="7px" marginTop='1.6rem' >
        Important Note! This website and Cardano itself is under heavy development.  Please use them at your own risk.  If you need help, Please
        reach out to us or others in the Cardano ecosystem.  It's important that you understand that there are scammers trying to
        steal your ADA.  NO Cardano stakepools require you to give them your ADA to get rewards.
      </Paragraph3>

    </Block>

  </Layout>
)

export default IndexPage 