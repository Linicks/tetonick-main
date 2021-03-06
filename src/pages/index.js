import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Paragraph2, Paragraph3, H3 } from "baseui/typography"

import { Card, StyledBody } from "baseui/card"
import { Block } from "baseui/block"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { StyledLink } from "baseui/link"

import {
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation"

import oldminer from "../images/old-miner.jpg"
import cardanoLogo from "../images/cardano_logo_no_text_dark.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Tetonick Home" />

    <Block width="95%" marginTop="2.70rem">
      <FlexGrid
        flexGridColumnCount={[1, 1, 2]}
        flexGridColumnGap="scale600"
        flexGridRowGap="scale600"
      >
        <FlexGridItem float="left" marginTop="1.5rem">
          <center>
            <H3>Earn Staking Rewards!</H3>
          </center>
          <Paragraph2>
            Make the most of your "Proof Of Stake" crypto currencies, and stake
            them with our quality staking services. Our stake pools provide
            you with a reliable staking partner that delivers a great return on
            your stake(ROS). We strive to provide you with the best staking experience possible.
            Please select our Cardano stakepool, Tetonick - TTNK, and start getting your rewards today.
          </Paragraph2>

          <center>
            <H3>Incentivized Testnet </H3>
          </center>
          <Paragraph2>
            Our stake pool is part of the Cardano blockchain development
            phase called "Shelley". This phase is focused on the decentralization
            of the blockchain, and adds the important staking features outlined
            the the Ouroboros protocol. This is an early phase in the
            development of Cardano, but the rewards are very real.
          </Paragraph2>
          <Paragraph2>
            If you haven't herd of the "Cardano Incentivized Test Net", 
            you can find out more on their dedicated website:            
          </Paragraph2>

          <div style={{ height: "20px" }}></div>

          <StyledNavigationList $align={ALIGN.left}>
            <span style={{ height: "0px" }}>
              <img
                src={cardanoLogo}
                alt="ada-symbol"
                width="40px"
                height="auto"
              />
            </span>
            <StyledNavigationItem>
              <StyledLink href="https://staking.cardano.org/" target="_blank">
                {" "}
                Shelley Incentivized Testnet{" "}
              </StyledLink>
            </StyledNavigationItem>
          </StyledNavigationList>

          <div style={{ height: "20px" }}></div>
        </FlexGridItem>

        <FlexGridItem paddingLeft="6%">
          <Card
            overrides={{
              Root: {
                style: { width:"100%", height:"auto", float: "right", padding: ".3rem" },
              },
            }}
            headerImage={oldminer}
            title="Cardano Stake Pool - TTNK"
          >
            <StyledBody>
              Just like the adventurous prospectors of the old west, this stake
              pool will bring home the <u>ADA</u>.
            </StyledBody>

            <ul
              style={{
                margin: `0 auto`,
                padding: `0px 0.8rem 0.80rem`,
                paddingTop: 0,
              }}
            >
              <li>
                Stake Pool Ticker Symbol: <b>TTNK</b>{" "}
              </li>
              <li>
                ステークプールティッカーシンボル：<b>TTNK</b>{" "}
              </li>
              <li>
                A Very Low Stake Pool Reward Fee: <b> 7% </b>
              </li>

              <li>
                Stake Pool ID: <div style={{ height: "7px" }}></div>
                0f6afd2ab82372b870c1cfabd331238d9aefe30600e604e0933ae55ffa00d42b
              </li>

            </ul>
          </Card>
        </FlexGridItem>
      </FlexGrid>

      <p style={{ height: "30px" }}></p>

      <center>
        <Card
          overrides={{
            Root: {
              style: {
                width: "100%",
                padding: "0px",
                backgroundColor: "#de6356",
              },
            },
          }}
          padding=".05rem"
          align="left"
        >
          <Paragraph3>
            <b>Important Note!</b> This website and Cardano itself are under
            heavy development. <i>Please use them at your own risk.</i> If you
            need help, you should reach out to us or others in the{" "}
            <StyledLink
              href="https://https://www.cardano.org/en/home/"
              target="_blank"
            >
              {" "}
              Cardano{" "}
            </StyledLink>{" "}
            ecosystem. It's important that you understand that there are
            scammers trying to steal your ADA. NO Cardano stake pools require you
            to give them your ADA to get rewards.
          </Paragraph3>
        </Card>
      </center>
    </Block>
  </Layout>
)

export default IndexPage
