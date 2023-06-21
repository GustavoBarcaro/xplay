import React from 'react'
import styled from 'styled-components';

const TitleSection = styled.section`
  display: flex;
  justify-content: center;
`

const PageTitleContent = styled.p`
  font-family: Inter, sans-serif;
  font-size: 21px;
  font-weight: 300;
  color: var(--white);
`

const PageTitle = ({children}) => {
  return (
      <TitleSection>
        <PageTitleContent>{children}</PageTitleContent>
      </TitleSection>
  )
}

export default PageTitle