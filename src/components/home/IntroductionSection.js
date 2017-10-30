import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 50px 0;
  justify-content: center;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    margin: 0;
    flex-wrap: wrap;
  }
`;

class TitleSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <IntroductionItem
              title="Flexible"
              subTitle="Build encapsulated handlers that manage your business logic, then compose them to make complex Bots. Handlers are just JavaScript function which can achieve whatever you want."
            />
            <IntroductionItem
              title="Modern"
              subTitle="Bottender is written with ES6/ES7 up syntax and full async await support. Now we can deal with complex async logic without lost the readability and maintainability of code."
            />
          </Row>
          <Row>
            <IntroductionItem
              title="Modular"
              subTitle="There are a set of interface that define the core modules provided by the Bottender. You can use your own implement of session store, your http server framework or even connect your bot to any platform."
            />
            <IntroductionItem
              title="Learn Once, Write Anywhere"
              subTitle="Handle multiple platforms with unified development experience. You can develop Bots for different platforms including Messenger, LINE, Slack and Telegram comfortably with similar mindset."
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default TitleSection;
