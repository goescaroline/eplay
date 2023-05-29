import styled from 'styled-components'
import { Props } from '../Section/index'
import { color } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'games' | 'title'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? color.black : color.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? color.gray : color.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`